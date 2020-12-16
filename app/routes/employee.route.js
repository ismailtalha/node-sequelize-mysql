module.exports = function(app) {

	var router = require("express").Router();
	
    const employee = require('../controllers/employee.controller.js');
	
    app.post('/api/employee', employee.save);
 
    app.get('/api/employee', employee.findAll);

    app.get('/api/employee/:id',employee.findOne)

    app.put('/api/employee/:id',employee.update)

    app.delete('/api/employee/:id',employee.delete)

    app.delete('/api/employee/',employee.deleteall)
	
	
}