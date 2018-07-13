
const _ = require('lodash');

var shop = require('../Shop/shop');

// get all Shop
exports.getListShop = function (req, res) {
    shop.find({}, function (err, results) {
        if (err)
            res.send(err);
        res.send(results);
        res.end();
    });
};

// get shop via key_search(shopAddress)
exports.getListShopByAddress = function (req, res) {
    var key = req.params.key;
    shop.find({ shopAddress: new RegExp(key, "i") }, function (err, results) {
        if (err)
            res.send(err);
        res.send(results);
        res.end();
    });
};

//get shop via key_search(sub key in shopName)
exports.getListShopBySubKeyName = function (req, res) {
    var key = req.params.key;
    shop.find({ shopName: new RegExp(key, "i") }, function (err, results) {
        if (err)
            res.send(err);
        res.send(results);
        res.end();
    });
};

// get favorited Shop
exports.getFavoriteShop = function (req, res) {
    shop.find({ favorited: true }, function (err, favoritedshops) {
        if (err)
            res.send(err);
        res.send(favoritedshops);
        res.end();
    });
    shop.find({}, function (err, results) {
        if (err)
            res.send(err);
        res.send(results);
        res.end();
    });
};

// update favorited shop (!favorited or favorited)
// exports.updateFavoritedshop = function (req, res) {

//     shop.update({ _id: req.params.id }, {$set: {favorited: req.params.favorited}} , function (err, shop) {
//         if (err)
//             res.send(err);
//         res.json({'msg': 'SUCCESS'}); 

//         res.end()

//     });
// }
