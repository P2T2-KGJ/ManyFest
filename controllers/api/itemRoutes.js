const router = require("express").Router();
const { Item } = require("../../models");
const { withAuth } = require("../../utils/auth");

// create new item
router.post("/", withAuth, async (req, res) => {
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
router.put("/:id", withAuth, async (req, res) => {
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
router.delete("/:id", withAuth, async (req, res) => {
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
