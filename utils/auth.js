module.exports = {
    // check if user is logged in, else redirect to login
    withAuth: (req, res, next) => {
        if (!req.session.logged_in) {
            res.redirect("/login");
        } else {
            next();
        }
    },
    // takes session data & username and returns boolean on if it exists and matches session
    confirmUser: async (sess, username) => {
        const userData = await User.findOne(req.body, {
            where: {
                username,
            },
        });

        if (!userData) {
            return false;
        }

        const userInfo = userData.get({ plain: true });
        // instead of sess.userId, use whatever you used to store the session userid in
        return userInfo.id === sess.userId ? sess.userId : false;
    },
};
