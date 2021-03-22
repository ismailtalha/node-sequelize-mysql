const env = {
  database: 'test',
  username: 'sa',
  password: '123',
  host: 'HP_LT1031',
  dialect: 'mssql',
  pool: {
	  max: 5,
	  min: 0,
	  acquire: 30000,
	  idle: 10000
  }
};
 
module.exports = env;