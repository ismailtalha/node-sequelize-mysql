const db = require('../config/db.config.js');
const Employee = require('../models/employee.model');
 
// Save FormData - Employee to MySQL
exports.save = (req, res) => {
	console.log('Post a Employee: ' + JSON.stringify(req.body));
	var data = req.body;
	Employee.create(
		data
	).then(Employee => {
		res.send(Employee);
	}).catch(err => res.send(err))
};
 
// Fetch all Employees
exports.findAll = (req, res) => {
	console.log("Get All Employees");
	Employee.findAll(
	).then(Employees => {
	   res.send(Employees);
	});
};

// Fetch all Employees
exports.findOne = (req, res) => {
	console.log("Get one Employees");
    Employee.findById(req.params.id).then(Employee => res.json({ "code": 200, "data": Employee }));
};

exports.update = (req, res) => {
	console.log("Get one Employees");
    Employee.update(
        {
            firstname: req.body.firstname,
            lastname:req.body.lastname,
            age:req.body.age
        },
    
        {
            where: { id: req.params.id },
            returning: true,
            plain: true
        }
    ).then(Employee => res.json({ code: 200, msg: "data updated" , "data": Employee}));
};

exports.delete = (req, res) => {
	console.log("Get one Employees");
    Employee.destroy({where:{id : req.params.id}}).then(Employee => res.send({ code: 200, msg: "Deleted"}));
};

exports.deleteall = (req, res) => {
	console.log("delete all");
    Employee.destroy({where:{},truncate:true}).then(Employee => res.send({ code: 200, msg: "Delete all"}));
};