const router = require("express").Router();
const path = require("path");

const { Collection, Item, User, Image } = require("../models");
const { withAuth } = require("../utils/auth");

// homepage
router.get("/", async (req, res) => {
    try {
        const itemData = await Item.findAll({
            include: [{
                model: Collection,
                    where: {
                        private: false}

                    },
                    {
                        model:Image,
                        required: true
                    }
        ],
            order: [["id", "DESC"]],
            limit: 5,
        });

        if (!itemData) {
            // what do we do if nothing satisfies this condition?
            res.render("homepage");
        } else {
            const items = itemData.map((item) =>
            item.get({ plain: true })
        );
            console.log(items);
            
            res.render("homepage", {
                items,
                loggedIn: req.session.loggedIn,
                userId: req.session.userId,
                userName: req.session.userName,
            });
        }
    } catch (err) {
        res.status(404);
        return;
    }
});

// login
router.get("/login", (req, res) => {
    if (req.session.loggedIn) {
        // do we want to send people to the front page, or to their dashboard?
        res.redirect(`/${req.session.userName}/dashboard`);
        return;
    }
    res.render("login");
});

// register
router.get("/signup", (req, res) => {
    if (req.session.loggedIn) {
        // do we want to send people to the front page, or to their dashboard?
        res.redirect(`/${req.session.userName}/dashboard`);
        return;
    }
    res.render("signup");
});

// redirect to user/dashboard
router.get("/dashboard", withAuth, async (req, res) => {
    res.redirect(`/${req.session.userName}/dashboard`);
});

// user dashboard - with collections rendered, no items
router.get("/:username/dashboard", withAuth, async (req, res) => {
    try {
        const userName = req.session.userName;
        const loggedIn = req.session.loggedIn;

        const collectionData = await Collection.findAll({
            where: {
                user_id: req.session.userId,
            },
            order: [["id", "DESC"]],
        });

        const userData = await User.findByPk(req.session.userId);
        const user = userData.get({ plain: true });
        const email = user.email;

        if (!collectionData) {
            res.render("dashboard", {
                email,
                loggedIn,
                userName,
            });
        }

        const collections = collectionData.map((collection) =>
            collection.get({ plain: true })
        );

        collections.userName = userName;

        res.render("dashboard", {
            collections,
            loggedIn,
            userName,
            email,
            user
        });
    } catch (err) {
        res.status(404).sendFile(path.join(__dirname, "../public", "404.html"));
    }
});

// redirect to user/collection/:id
router.get("/collections/:id", withAuth, async (req, res) => {
    res.redirect(`/${req.session.userName}/collections/${req.params.id}`);
});

// render all items in a collection
router.get("/:username/collections/:id", withAuth, async (req, res) => {
    try {
        // this will need the same verification/authorization as the dashboard
        const collectionData = await Collection.findByPk(req.params.id, {
            include: [{ model: Item, include: [{ model: Image }] }],
        });

        if (!collectionData) {
            res.redirect(`/${req.session.userName}/dashboard`);
        }

        const collection = collectionData.get({ plain: true });
        collection.collectionId = req.params.id;

        // console.log("COLLECTION LOG:", collection);
        collection.items.forEach(item => {
            if(!item.images.length){
                item.images = [{
                    description: "No image available",
                    link: "https://manyfest.s3.amazonaws.com/Placeholder-Image.png"
                }]
            }
        });

        res.render("collection", {
            collection,
            loggedIn: req.session.loggedIn,
            userName: req.session.userName,
        });
    } catch (err) {
        res.redirect(`/${req.session.userName}/dashboard`);
    }
});

// view item by id
router.get("/:username/items/:id", withAuth, async (req, res) => {
    // needs the same verification/authorization as the dashboard & collections pages
    try {
        const itemData = await Item.findByPk(req.params.id, {
            include: [{ model: Image }],
        });

        if (!itemData) {
            res.redirect(`/${req.session.userName}/dashboard`);
        }

        const item = itemData.get({ plain: true });

        res.render("item", {
            item,
            loggedIn: req.session.loggedIn,
            userName: req.session.userName,
        });
    } catch (err) {
        res.redirect(`/${req.session.userName}/dashboard`);
    }
});

router.get("/about", async (req, res) => {
    try {
        res.render("about", {
            loggedIn: req.session.loggedIn,
            userName: req.session.userName,
        });
    } catch (err) {
        res.status(404).sendFile(path.join(__dirname, "../public", "404.html"));
    }
});

module.exports = router;
