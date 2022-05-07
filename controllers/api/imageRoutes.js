const router = require("express").Router();
const multer = require("multer");
const multerS3 = require("multer-s3");
var aws = require("aws-sdk");
var s3 = new aws.S3({
    /* ... */
});

var upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: "manyfest",
        metadata: function (req, file, cb) {
            cb(null, { fieldName: file.fieldname });
        },
        acl: /* acl param goes here if needed */ '',
        key: function (req, file, cb) {
            cb(null, Date.now().toString());
        },
    }),
});

router.post("/upload", upload.array("photos", 3), function (req, res, next) {
    res.send("Successfully uploaded " + req.files.length + " files!");
});

module.exports = router;
