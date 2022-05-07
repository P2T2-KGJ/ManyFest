const router = require("express").Router();
const multer = require("multer");
const multerS3 = require("multer-s3");
const aws = require("aws-sdk");
const { nanoid } = require("nanoid");
const {Item, Image} = require('../../models')

const s3 = new aws.S3({
    accesKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccesKey: process.env.AWS_SECRET_ACCESS_KEY,
});


const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: process.env.AWS_S3_BUCKET_NAME,
        metadata: function (req, file, cb) {
            cb(null, { fieldname: file.fieldname });
        },
        key: function (req, file, cb) {
            cb(null, `${Date.now().toString()}${file.originalname}`);
        },
    }),
});




router.post("/", upload.single('uploaded_image'), async function (req, res, next) {
    console.log("FILE", req.file)
    res.send("Successfully uploaded " + req.file + "!");


    try{
        const imageData = await Image.create({
            
        })
    } catch(err){}
});

module.exports = router;
