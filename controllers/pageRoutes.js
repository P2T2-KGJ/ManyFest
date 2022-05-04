const router = require("express").Router();
const { Item } = require("../models");
const { withAuth } = require("../utils/auth");

// routes for rendering the pages go here
// depending on how many we have, may want to break these out into separate files

// homepage
// displays 5? 10? most recently added items that have pictures and are public
// clicking any of them should redirect to login

// login
// could make sign-up its own page
// could handle both on same page via client-side script

// user dashboard - with collections rendered, no items
// button to create new collection
// could be its own page, or could be handled client side with a modal
// think about mobile-friendly here
// the following belong in a page route, not an api route

// get all items by collection id
// THIS IS NOT DONE
router.get("/collection/:id", withAuth, async (req, res) => {
    try {
        const itemData = await Item.findAll({
            where: {
                collection_id: req.params.id,
            },
        });
        // to render the
        const items = itemData.map((item) => items.get({ plain: true }));
        res.render("dashboard", {
            name,
            description,
            loggedIn: req.session.loggedIn,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// find item by id
router.get("/:id", withAuth, async (req, res) => {
    try {
        const itemData = await Item.findByPk(req.params.id);

        if (!itemData) {
            res.status(404).json({
                message: "No item found with that id!",
            });
            return;
        }

        res.status(200).json(itemData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// collection view - with item names, maybe pictures? no details
// can handle item inspection on the client side, with a modal
// or have page for looking at single items
// consider mobile users

// about us page
// hard coded information?
// something fun here would be nice

module.exports = router;
