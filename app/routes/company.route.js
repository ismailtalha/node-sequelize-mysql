module.exports = function(app) {

	var router = require("express").Router();
	
    const company = require('../controllers/company.controller.ts');
	
    app.post('/api/company', company.save);
 
    app.get('/api/company', company.findAll);

    app.get('/api/company/:id',company.findOne)

    app.put('/api/company/:id',company.update)

    app.delete('/api/company/:id',company.delete)

    app.delete('/api/company/',company.deleteall)
    
}