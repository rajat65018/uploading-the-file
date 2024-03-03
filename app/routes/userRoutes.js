const multer = require('multer');
const express = require('express');

// const upload = multer({ dest: "./uploads" });
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const userRoutes = express.Router();

userRoutes.post('/signup', upload.single('avatar'), (req, res) => {
    console.log(req.file,'file file');
    res.status(200).json({ message: req.file });
})

module.exports = userRoutes;