var mongoose = require('mongoose');

var shopSchema = new mongoose.Schema({
    shopName : {
        type: String,
        required: true
    },
    shopOpeningHours : {
        type: String,
        required: true
    },
    shopAddress : {
        type: String,
        required: true
    },
    shopLocation : {
        type: String,
        required: true
    },
    shopFeaturedImages : {
        type: [String],
        required: true
    },
    shopAlias : {
        type: String,
        required: true
    },
    shopLogo : {
        type: String,
        required: true
    },
    shopActive : {
        type: Boolean,
        required: true
    },
    shopPhoneNumber : {
        type: Number,
        required: true
    },
    shopRating : {
        type: Number,
        required: true
    },
    dateCreatedAt : {
        type: Date,
        default: Date.now
    },
    categories : {
        type: [Schema.ObjectId],
        ref: 'Category'
    },
});

var ShopModel = mongoose.model('Shop', shopSchema);
module.exports = ShopModel;