const express = require('express');
const router = express.Router();

// Route to display information about GitHub Actions
router.get('/', (req, res) => {
    res.render('index', { title: 'GitHub Actions Info' });
});

module.exports = router;