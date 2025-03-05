require("dotenv").config();
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Configuración de la base de datos MySQL
const db = mysql.createConnection({
    host: process.env.DB_HOST || "localhost",       
    user: process.env.DB_USER || "root",            
    password: process.env.DB_PASS || "",            
    database: process.env.DB_NAME || "investigacion" 
});


// Conectar a la BD
db.connect(err => {
    if (err) {
        console.error("Error conectando a la BD:", err);
        return;
    }
    console.log("Conexión a MySQL exitosa.");
});

// Ruta de prueba
app.get("/", (req, res) => {
    res.send("API funcionando");
});

const tablasPermitidas = ['articulos', 'carreras', 'detart', 'detheramientas', 'detlineas', 'detproy', 'estudiantes', 'herramientas', 'investigador', 'lineasinvestigacion', 'proyectos', 'usuarios']; //tablas permitidas

// Ruta dinámica para obtener datos de cualquier tabla
app.get("/tabla/:nombreTabla", (req, res) => {
    const { nombreTabla } = req.params;

    // Verificar si la tabla está permitida
    if (!tablasPermitidas.includes(nombreTabla)) {
        return res.status(400).send({ error: "Tabla no permitida" });
    }

    const sql = `SELECT * FROM ${nombreTabla}`; // Ahora está seguro

    db.query(sql, (err, results) => {
        if (err) {
            res.status(500).send({ error: `Error al obtener datos de ${nombreTabla}`, details: err });
        } else {
            res.json(results);
        }
    });
});
