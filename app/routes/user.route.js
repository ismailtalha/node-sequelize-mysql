module.exports = function(app) {
	var express = require("express");

    const user = require('../controllers/user.controller.js');
	
	
    app.post('/api/user', user.save);
 
    app.get('/api/user', user.findAll);

    app.get('/api/user/:id',user.findOne)

    app.put('/api/user/:id',user.update)

    app.delete('/api/user/:id',user.delete)

    app.delete('/api/user/',user.deleteall)
	
}