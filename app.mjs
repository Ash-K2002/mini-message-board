import express from 'express';
import path from 'node:path';
import indexRouter from './routes/indexRouter.mjs';
import newMessageRouter from './routes/newMessagesRouter.mjs';
const app = express();
const PORT = 3000;

app.set("views", path.join(path.dirname(""), "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({extended:true}));
app.use("/",indexRouter);
app.use("/new", newMessageRouter);


app.listen(PORT, ()=>console.log("App listening at ",PORT));
