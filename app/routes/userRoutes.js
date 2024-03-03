const multer = require('multer');
const express = require('express');

const upload = multer({ dest: "./uploads" });

const userRoutes = express.Router();

userRoutes.post('/signup', upload.single('avatar'), (req, res) => {
    console.log(req.files,'file file');
    res.status(200).json({ message: 'Data submitted successfully' });
})

module.exports = userRoutes;