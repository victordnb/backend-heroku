const { Router } = require('express');
const TaskService = require('../services/TaskService');

const router = Router();


router.get("", (req, res) => {
    res.status(200).json({message: 'Its alive'});
});

router.get("/:id", (req, res) => {
    
});

router.post("", async (req, res) => {
    const body  = req.body;
    // console.log(req);
    console.log(body)
    const task = await TaskService.create(body);
    return res.status(204).json(task.toObject())
});

router.put("/:id", (req, res) => {
    
});

router.patch("/:id", (req, res) => {
    
});

router.delete("/:id", (req, res) => {
    
});


module.exports = router;