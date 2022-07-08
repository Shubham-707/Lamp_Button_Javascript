const express = require('express');
const router = new express.Router();


router.get('/', (req, res) => {
    res.sendFile('index.html');
});

router.get('/', (req, res) => {
    res.send('Welcome to website');
});

router.get('/contact', (req, res) => {
    let params = {
        name: 'dynamic_content_using_ejs',
        id: 2,
        blogs: [
            'Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly'
        ]
    }
    res.render('contact', params);
});

module.exports = router;