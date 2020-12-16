const Sequelize = require('sequelize');
const db = require('../config/db.config');
	const Employee = db.sequelize.define('employee', {
	  firstname: {
		  type: Sequelize.STRING
	  },
	  lastname: {
		  type: Sequelize.STRING
      },
      age:{
          type: Sequelize.INTEGER
      }
	});
	Employee.sync().then(() => {
		console.log('table created');
	  });
    
module.exports = Employee