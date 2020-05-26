const router = require('express').Router();

 let Product = require('../modules/product.model');



 router.route('/').get((req,res )=> {
     Product.find()
     .then(product => res.json(product))
     .catch(err => res.status(400).json('Error:'+ err));
 });


 router.route('/add').post((req,res)=> { 
      
    const barcode = Number(req.body.barcode);
    const name = req.body.name;
    const price = Number(req.body.price);
     const department = req.body.department;
     const category = req.body.category;
     const image= req.body.image;
     const brand = req.body.brand;
  const tags = req.body.tags;
  const description = req.body.description;
     const newProduct = new Product({
        barcode,
     name ,
     price,
     department,
     category,
     image,
    brand,
    tags,
    description
     });

     newProduct.save()
     .then(() => res.json('product added')) 
     .catch(err => res.status(400).json('Error:' + err));
 });




 router.route('/:id').get((req,res)=>{
     Product.findById(req.params.id).then(product => res.json(product))
     .catch(err=>res.status(400).json('Error:'+ err))
 })



 router.route('/:id').delete((req,res)=>{
    Product.findByIdAndDelete(req.params.id).then(() => res.json('product deleted.'))
    .catch(err=>res.status(400).json('Error:'+ err))
})


router.route('/update/:id').post((req,res)=>{
    Product.findById(req.params.id).then(product => {
        product.barcode = Number(req.body.barcode);
        product.name = req.body.name;
        product.price = Number(req.body.price);
        product.department = req.body.department;
        product.category = req.body.category;
        product.image= req.body.image;
        product.brand = req.body.brand;
        product.tags = req.body.tags;
        product.description = req.body.description;

       product.save()
     .then(() => res.json('product updated')) 
     .catch(err => res.status(400).json('Error:' + err));
    })
    .catch(err => res.status(400).json('Error:' + err));  
})

  module.exports = router;