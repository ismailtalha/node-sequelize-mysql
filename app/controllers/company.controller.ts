const db = require('../config/db.config.js');
const Company = require('../models/company.model');
 
// Save FormData - Company to MySQL
exports.save = (req, res) => {
	console.log('Post a Company: ' + JSON.stringify(req.body));
	var data = req.body;
	Company.create(
		data
	).then(company => {
		res.send(company);
	}).catch(err => res.send(err))
};
 
// Fetch all Companies
exports.findAll = (req, res) => {
	console.log("Get All Companies");
	Company.findAll(
	).then(Companies => {
	   res.send(Companies);
	});
};

// Fetch all Companies
exports.findOne = (req, res) => {
	console.log("Get one Companies");
    Company.findById(req.params.id).then(Company => res.json({ "code": 200, "data": Company }));
};

exports.update = (req, res) => {
	console.log("Get one Companies");
    Company.update(
        {
            name: req.body.name,
            address:req.body.address,
            contact:req.body.contact
        },
    
        {
            where: { id: req.params.id },
            returning: true,
            plain: true
        }
    ).then(Company => res.json({ code: 200, msg: "data updated" , "data": Company}));
};

exports.delete = (req, res) => {
	console.log("Get one Companies");
    Company.destroy({where:{id : req.params.id}}).then(Company => res.send({ code: 200, msg: "Deleted"}));
};

exports.deleteall = (req, res) => {
	console.log("delete all");
    Company.destroy({where:{},truncate:true}).then(Company => res.send({ code: 200, msg: "Delete all"}));
};