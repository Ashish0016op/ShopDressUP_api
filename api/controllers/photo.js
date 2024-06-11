const Photo=require('../model/photos');
exports.postPhoto=async(req,res,next)=>{
    try {
        const photo = new Photo(req.body);
        await photo.save();
        res.status(201).json(photo);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}