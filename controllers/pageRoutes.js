const router = require('express').Router();

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

// collection view - with item names, maybe pictures? no details
// can handle item inspection on the client side, with a modal
// or have page for looking at single items
// consider mobile users

// about us page
// hard coded information?
// something fun here would be nice

module.exports = router;