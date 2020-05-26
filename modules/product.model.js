const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const productSchema = new Schema({
    barcode:{type: Number, required: true},
    name:{ type: String , required: true},
    price: { type: Number, required: true},
    department:{ type: String, required: true},
    category:{ type: String, required: true},
    image:{ type: String, required: true},
    brand:{ type: String, required: true},
    tags:{ type: String, required: true},
    description:{ type: String, required: true}
},{
    
    timestamps: true,
});

 const Product = mongoose.model('Products',productSchema);

 module.exports = Product;