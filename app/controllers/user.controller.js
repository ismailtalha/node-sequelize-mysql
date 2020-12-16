const db = require('../config/db.config.js');
const User = require('../models/user.model');
 
// Save FormData - User to MySQL
exports.save = (req, res) => {
	console.log('Post a User: ' + JSON.stringify(req.body));
	var data = req.body;
	User.create(
		data
	).then(User => {
		res.send(User);
	}).catch(err => res.send(err))
};

 
// Fetch all Users
exports.findAll = (req, res) => {
	console.log("Get All Users");
	User.findAll(
	).then(Users => {
	   res.send(Users);
	});
};

// Fetch all Users
exports.findOne = (req, res) => {
	console.log("Get one Users");
    User.findById(req.params.id).then(User => res.json({ "code": 200, "data": User }));
};

exports.update = (req, res) => {
	console.log("Get one Users");
    User.update(
        {
            firstname: req.body.firstname,
            lastname:req.body.lastname,
        },
    
        {
            where: { id: req.params.id },
            returning: true,
            plain: true
        }
    ).then(User => res.json({ code: 200, msg: "data updated" , "data": User}));
};

exports.delete = (req, res) => {
	console.log("Get one Users");
    User.destroy({where:{id : req.params.id}}).then(User => res.send({ code: 200, msg: "Deleted"}));
};

exports.deleteall = (req, res) => {
	console.log("delete all");
    User.destroy({where:{},truncate:true}).then(User => res.send({ code: 200, msg: "Delete all"}));
};