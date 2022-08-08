var dbConfig = {
  server: 'localhost\SQLEXPRESS', 
  database: 'Pymes',
  //port: <db_port>,
  user: 'sa',
  password: 'claveabierta',
  
  driver: "msnodesqlv8",
  options: {
    trustedConnection: true
  }
}
module.export = dbConfig