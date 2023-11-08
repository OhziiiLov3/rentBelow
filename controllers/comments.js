const listing = require('../models/listing');
const Listing = require('../models/listing');





const create = async (req,res)=>{
    const listing = await Listing.findById(req.params.id);
    const { content, rating } = req.body;
    if (!content || !rating) {
        // If content or rating is missing, return an error response
        return res
        .status(400)
        .json({ error: "Content and rating are required fields" });
    }
    
    //  Add user information to the comment object
        const comment = {
            content,
            rating,
            user: req.user._id,
            userName: req.user.name,
            userAvatar: req.user.avatar
        };
        try {
console.log(comment);
    listing.comments.push(comment);
    await listing.save();
    } catch (error) {
        console.log(error.message);
    }
    res.redirect(`/listings/${listing._id}`);
}

const edit = async (req,res)=>{
    const listing = await Listing.findOne({'comments._id': req.params.id});
    const comment = listing.comments.id(req.params.id)
    res.render('comments/edit',{
        title: "Edit Page",
        comment
    });
}



const deleteComment = async(req,res)=>{
const listing = await Listing.findOne({
    "comments._id": req.params.id,
    "comments.user": req.user._id
});
console.log(listing);
if(!listing) return res.redirect(`/lisitings/${listing._id}`)
listing.comments.remove(req.params.id)
await listing.save();
res.redirect(`/listings/${listing._id}`);
}





module.exports  = {
    create,
    delete: deleteComment,
    edit
}