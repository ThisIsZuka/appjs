var  config = require('../config/db.config');
const  sql = require('mssql');

getOrders()

async  function  getOrders() {
  try {
    let  pool = await  sql.connect(config);
    let  products = await  pool.request().query("SELECT TOP 10 * from dbo.APPLICATION");
    console.log(products.recordsets)
  }
  catch (error) {
    console.log(error);
  }
}