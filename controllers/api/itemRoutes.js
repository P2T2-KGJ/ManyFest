const router = require("express").Router();
const { Item } = require("../../models");

// get all items by user id
// THIS IS NOT DONE
// router.get("/:user_id", async (req, res) => {
//     // including all associated items
//     try {
//         const itemData = await Item.findAll({where: {user_id: req.params.user_id}});
//         res.status(200).json(itemData);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

// find item by id
router.get("/:id", async (req, res) => {
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

// create new item
router.post("/", async (req, res) => {
    try {
        const itemData = await Item.create({
            name: req.body.name,
            description: req.body.description,
        });
        res.status(200).json(itemData);
    } catch (err) {
        res.status(400).json(err);
    }
});

// edit existing item by id
router.put("/:id", async (req, res) => {
    try {
        const itemData = await Item.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        if (!itemData[0]) {
            res.status(404).json({ message: "No item with this id!" });
            return;
        }
        res.status(200).json(itemData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// delete an item by id
router.delete("/:id", async (req, res) => {
    try {
        const itemData = await Item.destroy({
            where: {
                id: req.params.id,
            },
        });
        if (!itemData) {
            res.status(404).json({ message: "No item with this id!" });
            return;
        }
        res.status(200).json(itemData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
