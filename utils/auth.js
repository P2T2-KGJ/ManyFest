const { blockParams } = require("handlebars");

module.exports = {
    // check if user is logged in, else redirect to login
    withAuth: (req, res, next) => {
        if (!req.session.loggedIn) {
            res.redirect("/login");
        } else {
            next();
        }
    },

    // makes sure user is only affecting data they own
    userAuth: async (req, res, next) => {
        if (
            req.body.userId !== req.session.userId ||
            req.params.userId !== req.session.userId
        ) {
            res.redirect(`/${req.session.userId}`);
        } else {
            next();
        }
    },
};
