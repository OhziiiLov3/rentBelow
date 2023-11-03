const Listing = require('../models/listing');



const index =  async(req, res)=>{
    const listings = await Listing.find({})
    res.render('listings/index',{
        listings,
        title: "All Lisitings"
    })
}

const newListing = (req, res)=>{
     res.render("listings/new", {
       title: "Add Rental Unit",
     });
}

const show = async(req,res)=>{
    const listing = await Listing.findById(req.params.id);
    console.log(listing);
    res.render('listings/show',{
        listing,
        title: "Detail Page"
    })
}


const create = async(req, res)=>{
req.body.isPetAllowed = !!req.body.isPetAllowed;
try {
    const listing = await Listing.create(req.body);
    res.redirect('/listings');
} catch (error) {
    console.log(error);
    res.render('listings/new');
}
}








module.exports ={
    index,
    new: newListing,
    show,
    create
}