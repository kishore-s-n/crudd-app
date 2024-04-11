import express from "express"
import mysql from "mysql"

const app = express()

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Snkishore@18",
    database: "test-schema"
})

app.get("/", (req, res) => {
    res.json("this is backend")
})

//ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Snkishore@18'; FLUSH PRIVILEGES;

app.get("/books", (req, res) => {
    const q = "SELECT * FROM `test-schema`.books";
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

app.listen(8800, () => {
    console.log("conntected to backend");
})