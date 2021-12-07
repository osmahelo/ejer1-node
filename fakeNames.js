const fs = require("fs");
const faker = require("faker");

fs.writeFile("names.txt", fakeNames(), error => {
  if (error) 
    return console.log(error);
   else 
    console.log("Proceso completado con exito");
  });

function fakeNames() {
  names = "";
  for (let i = 0; i < 1000; i++) {
    names += `${faker.name.findName()} \n`;
  }
  return names;
}