var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
        res.render('drinks');
    // perform actions on the collection object
    //client.close();
});
module.exports = router;