var Address = require('./lib/node/address.model');
var addr = new Address();
addr.city("Pune");

console.log(addr.city());