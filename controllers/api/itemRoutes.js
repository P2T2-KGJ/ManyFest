const router = require("express").Router();
const multer = require("multer");
const multerS3 = require("multer-s3");
const aws = require("aws-sdk");
const { Item, Image } = require("../../models");
const { withAuth } = require("../../utils/auth");

// establish connection to AWS S3 account
const s3 = new aws.S3({
    accesKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccesKey: process.env.AWS_SECRET_ACCESS_KEY,
});

// create container for image uploading
const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: process.env.AWS_S3_BUCKET_NAME,
        metadata: function (req, file, cb) {
            cb(null, { fieldname: file.fieldname });
        },
        contentType: function (req, file, cb) {
            cb(null, file.mimetype);
        },
        key: function (req, file, cb) {
            cb(null, `${Date.now().toString()}${file.originalname}`);
        },
    }),
});

// // create new item
router.post(
    "/",
    withAuth,
    upload.single("uploaded_image"),
    async (req, res) => {
        console.log("================================")
        console.log("REQUEST BODY", req.body);
        console.log("================================")
        try {
            const item = await Item.create({
                name: req.body.iname,
                description: req.body.itemDescription,
                collection_id: req.body.collectionId
            });

            const image = await Image.create({
                name: req.file.originalname,
                description: req.body.itemDescription,
                link: req.file.location,
                AWS_key: req.key,
                item_id: item.id,
            });
            res.redirect(`/${req.session.userName}/collections/${req.body.collectionId}`)
        } catch (err) {
            res.status(400).json(err);
        }

    }
);

// edit existing item by id
// router.put("/:id", withAuth, async (req, res) => {
//     try {
//         const itemData = await Item.update(req.body, {
//             where: {
//                 id: req.params.id,
//             },
//         });
//         if (!itemData[0]) {
//             res.status(404).json({ message: "No item with this id!" });
//             return;
//         }
//         res.status(200).json(itemData);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

// // delete an item by id
// router.delete("/:id", withAuth, userAuth, async (req, res) => {
//     try {
//         const itemData = await Item.destroy({
//             where: {
//                 id: req.params.id,
//             },
//         });
//         if (!itemData) {
//             res.status(404).json({ message: "No item with this id!" });
//             return;
//         }
//         res.status(200).json(itemData);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

module.exports = router;
