conn = new Mongo();
db = conn.getDB("myappdb");


db.usuarios.insert(
    [
        { nombre: 'bjr', 
        apellido: 'code', 
        email: 'bjrcode@abc.com', 
        estado: 'A', 
        created_at: new Date('01/23/2020') }
    ]
);

db.productos.insert([
    { 
        nombre: 'Manzana',
        descripcion: 'Color verde y jugosa',
        precio: 19.99,
        stock: 100
    },
    { 
        nombre: 'zapatilla',
        descripcion: 'Color verde claro',
        precio: 29.99,
        stock: 50
    }
]);


db.empleados.insert([
    { 
        nombre: 'Bob',
        apellido: 'Start',
        email: 'bobstart@abcd.com',
        estado: 'Activo',
        created_at: new Date('01/23/2020')
    },
    { 
        nombre: 'Martin',
        apellido: 'Smit',
        email: 'martinsmit@empresa.com',
        estado: 'Inactivo',
        created_at: new Date('02/15/2021')
    }
]);
