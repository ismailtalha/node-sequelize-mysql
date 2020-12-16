const Sequelize = require('sequelize');
const db = require('../config/db.config');
const Employee = require('./employee.model');
	const Company = db.sequelize.define('company', {
	  name: {
		  type: Sequelize.STRING
	  },
	  address: {
		  type: Sequelize.STRING
      },
      contact:{
		  type: Sequelize.INTEGER,
		  validate:{
			  isNumeric:true,
			  len:11
			  
		  },
		},
		  email:
		  {
			type: Sequelize.STRING,
			validate:{
				isEmail:true
			}
			
		  },
		  status:{
			  type:Sequelize.INTEGER,
			  defaultValue:1
		  }
	},
	
	);

	Company.sync().then(() => {
		console.log('table created');
	  });
    
module.exports = Company