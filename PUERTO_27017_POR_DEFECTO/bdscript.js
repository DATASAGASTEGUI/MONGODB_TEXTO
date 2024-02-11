print("START");

conexion = new Mongo("localhost");// Host donde esta nuestra base de datos
db = conexion.getDB("fabrica");// Nombre de la base de datos que vamos a utilizar
db.dropDatabase();// Limpiamos la base de datos por si existe algo antes
db.createCollection("trabajador");// Colección que tendrá nuestra base de datos
db.empleado.createIndex({"idTrabajador": 1}, {unique: true})// Clave primaria para nuestra colección

print("CREANDO TRABAJADORES");

trabajador1 = {
    "idTrabajador": 1,
    "nombre": "Miguel",
    "edad": 22,
    "sueldo": 1200.54,
    "direcciones": [{"Calle": "De La Sierva", "numero": 123, "ciudad": "Trujillo"}, {"Calle": "Alberto Guzman", "numero": 894, "ciudad": "Trujillo"}],
    "telefonos": ["634649847", "645234123"],
    "emails": ["miguel.a@hotmail.com", "miguel.b@gmail.com"],
    "jobis": ["Futbol", "Televisión"]
};
/*
trabajador2 = {
    "idTrabajador": 2,
    "nombre": "Carlos",
    "edad": 24,
    "sueldo": 1100.78,
    "direcciones": [{"Calle": "Juan Cipriani", "numero": 534, "ciudad": "Piura"}],
    "telefonos": ["635645557"],
    "emails": ["carlos.a@hotmail.com", "carlos.b@gmail.com"],
    "jobis": ["Video Juegos", "Cartas", "Televisión"]
};

trabajador3 = {
    "idTrabajador": 3,
    "nombre": "Carmen",
    "edad": 21,
    "sueldo": 1000.00,
    "direcciones": [{"Calle": "Guillermo Marconi", "numero": 353, "ciudad": "Tumbes"}],
    "telefonos": ["635645333", "634749293"],
    "emails": ["carmen.a@hotmail.com", "carmen.b@gmail.com"],
    "jobis": ["Peliculas", "Televisión", "Lectura"]
};

trabajador4 = {
    "idTrabajador": 4,
    "nombre": "Arturo",
    "edad": 20,
    "sueldo": 1000.34,
    "direcciones": [{"Calle": "Mendez Pelayo", "numero": 343, "ciudad": "Trujillo"}, {"Calle": "América", "numero": 452, "ciudad": "Trujillo"}],
    "telefonos": ["635645222","634834999","634123888"],
    "emails": ["arturo.a@hotmail.com", "arturo.b@gmail.com", "arturo.c@yahoo.es"],
    "jobis": ["Lectura", "Baile", "Tenis", "Televisión"]
};

trabajador5 = {
    "idTrabajador": 5,
    "nombre": "Ismael",
    "edad": 20,
    "sueldo": 1000.28,
    "direcciones": [{"Calle": "Guzman Velarde", "numero": 245, "ciudad": "Trujillo"}, {"Calle": "Ejercito", "numero": 345, "ciudad": "Tumbes"}],
    "telefonos": ["635645111","633434003","634312967"],
    "emails": ["ismael.a@hotmail.com", "ismael.b@gmail.com", "ismael.c@yahoo.es"],
    "jobis": ["Lectura", "Baile", "Conciertos Playa", "Televisión"]
};

trabajador6 = {
    "idTrabajador": 6,
    "nombre": "Vanessa",
    "edad": 21,
    "sueldo": 1050.00,
    "direcciones": [{"Calle": "Santa", "numero": 456, "ciudad": "Trujillo"}, {"Calle": "Cipriani", "numero": 430, "ciudad": "Tumbes"}],
    "telefonos": ["635645456","634834390","634123283"],
    "emails": ["vanessa.a@hotmail.com", "vanessa.b@gmail.com", "vanessa.c@yahoo.es"],
    "jobis": ["Escribir", "Baile", "Conciertos Playa", "Televisión"]
};
*/
print("GRABANDO TRABAJADORES");

db.empleado.insert(trabajador1);
/*
db.empleado.insert(trabajador2);
db.empleado.insert(trabajador3);
db.empleado.insert(trabajador4);
db.empleado.insert(trabajador5);
db.empleado.insert(trabajador6);
*/
print("END");

