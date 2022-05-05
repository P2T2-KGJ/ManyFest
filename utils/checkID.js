module.exports = {
    // capture user ID
    checkID: (req, res, next) => {
        if (!req.session.id) {
            console.log("no user ID")
        } else {
            console.log("req.session.id")
        }
    },
};