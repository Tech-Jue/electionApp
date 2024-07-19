const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, "public"))) 

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');

db.serialize(() => {
    db.run("CREATE TABLE lorem (info TEXT)");

    const stmt = db.prepare("INSERT INTO lorem VALUES (?)");
    for (let i = 0; i < 10; i++) {
        stmt.run("Ipsum " + i);
    }
    stmt.finalize();

    db.each("SELECT rowid AS id, info FROM lorem", (err, row) => {
        console.log(row.id + ": " + row.info);
    });
});

db.close();

app.get('/', (req,  res) =>  {

    res.send("send file ")

}    ) 

app.get('/home', (req,  res) =>  {

    res.sendFile(path.join(__dirname, "pudlic", "index.html"))

})            



console.log(path.join(__dirname, "public" ));
app.listen(3000, () => {

    console.log("server is listening on port 3000")
})