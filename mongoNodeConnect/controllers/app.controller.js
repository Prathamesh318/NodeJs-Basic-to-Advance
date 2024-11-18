const App = require("../models/app.model.js");

exports.findAll = (req, res) => {
    App.find()
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            console.error(err.stack);
            res.status(500).send({
                message: err.message || "Some error occured",
            });
        });
};

exports.findOne = (req, res) => {
    App.findById(req.params.messageId).then((data) => {
        if (!data) {
            return res.status(404).send({
                message: "Not found with id : " + req.params.messageId,
            });
        }
        res.send(data);
    });
};

exports.create = (req, res) => {
    if (!req.body.name) {
        res.status(400).send({ message: "content cannot be empty" });
        return;
    }
    const messages = new App({
        name: req.body.name,
        price: req.body.price,
        rating: req.body.rating,
        difficulty: req.body.difficulty,
    });
    messages
        .save(messages)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "some error occured while creating",
            });
        });
};

exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update cannot be empty",
        });
    }
    const id = req.params.messageId;
    App.findByIdAndUpdate(id, req.body, {
        new: true,
        runvalidators: true,
        useFindAndModify: false,
    })
        .then((data) => {
            if (!data) {
                return res.status(404).send({
                    message: "Data not found with Id : " + id,
                });
            } else {
                res.send({
                    message: " Updated successfully!!!",
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: "Error while updating, " + err,
            });
        });
};


exports.delete=async(req,res)=>{

    try {
        const {messageId}=req.params;

        if(!messageId){
            return res.status(400).json({
                success:false,
                message:"Id not found"
            })
        }

        const data=await App.findByIdAndDelete(messageId,{new:true});

        res.status(200).json({
            message:"Record deleted",
            success:true
        })

    } catch (error) {
        return res.status(500).json({
            success:false,
            message:error.message
        }
        )
    }

}