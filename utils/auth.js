module.exports = {
    // check if user is logged in, else redirect to login
    withAuth: (req, res, next) => {
        if (!req.session.logged_in) {
            res.redirect("/login");
        } else {
            next();
        }
    },
};