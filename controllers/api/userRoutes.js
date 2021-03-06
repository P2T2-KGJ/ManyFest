const router = require("express").Router();
const { User } = require("../../models");
const { withAuth, userAuth } = require("../../utils/auth");

// CREATE new user
router.post("/", async (req, res) => {
    try {
        const userData = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        });

        req.session.save(() => {
            req.session.loggedIn = true;
            req.session.userId = userData.id;
            req.session.userName = userData.username;
            res.status(201).json(userData);
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// get user by username
router.get("/:username", async (req, res) => {
    try {
        const userData = await User.findOne({
            where: { username: req.params.username },
        });
        const user = userData.get({ plain: true });
        res.status(201).json(user);
    } catch (err) {
        res.status(500).json(err);
    }
});

// update user
router.put("/:id", withAuth, /*userAuth,*/ async (req, res) => {
    // update user logic
    try {
        const userData = await User.update(req.body, {
            where: {
                id: req.params.id
            },
          });

        if (!userData) {
        res.status(404).json({ message: 'No user with this id!' });
        return;
        }


        // Attempted to update session data when username updated as username from the dashboard was driven by the session data. In lieu added user data tto the dashboard page and loaded info via the user.
        if (req.session.loggedIn) {

            req.session.userName = req.body.username;

            }
        console.log(req.session)
        res.status(201).json(userData);

    } catch (err) {
        res.status(500).json(err);
        console.log(err)
    }
});

// delete user
router.delete("/", withAuth, /*userAuth,*/ async (req, res) => {
    try {
        const userData = await User.destroy({
            where: {
                id: req.body.userId,
            },
        });
        if (!userData) {
            res.status(404).json({ message: "User does not exist." });
        }
        req.session.destroy(() => {
            res.status(200).json({ message: "User successfully deleted." });
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// Login
router.post("/login", async (req, res) => {
    try {
        const userData = await User.findOne({
            where: {
                email: req.body.email,
            },
        });

        if (!userData) {
            res.status(400).json({
                message: "Incorrect email or password. Please try again!",
            });
            return;
        }

        const validPassword = await userData.checkPassword(req.body.password);

        if (!validPassword) {
            res.status(400).json({
                message: "Incorrect email or password. Please try again!",
            });
            return;
        }

        req.session.save(() => {
            req.session.userId = userData.id;
            req.session.loggedIn = true;
            req.session.userName = userData.username;

            res.status(200).json({
                user: userData,
                message: "You are now logged in!",
            });
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Logout
router.post("/logout", (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;
