import express from 'express';
import path from 'node:path';

const app = express();
const PORT = 3000;
const messages = [
    {
        text: "Hi there!",
        user: "Amando", 
        added: new Date(),
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: new Date(),
    }
]


app.set("views", path.join(path.dirname(""), "views"));
app.set("view engine", "ejs");

app.get("/");
app.get("/new");



app.listen(PORT, ()=>console.log("App listening at ",PORT));
