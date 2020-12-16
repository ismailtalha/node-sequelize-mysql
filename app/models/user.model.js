const Sequelize = require('sequelize');
const db = require('../config/db.config');

	const User = db.sequelize.define('user', {
	  firstname: {
		  type: Sequelize.STRING
	  },
	  lastname: {
		  type: Sequelize.STRING
	  }
	});

	User.sync().then(() => {
		console.log('table created');
	  });
	
	module.exports= User;
