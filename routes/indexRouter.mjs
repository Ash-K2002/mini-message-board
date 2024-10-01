import { Router } from 'express';

const indexRouter = Router();

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
];

const links =[
    {
        link: "/new",
        text: "Create new message"
    }
];

indexRouter.post("/new", (req, res)=>{
    const {authorName, messageText}= req.body;
    console.log(req.body);
    messages.push({user:authorName, text:messageText,added: new Date()});
    res.redirect("/");
});

indexRouter.get("/", (req, res)=>{
    res.render("index", {title: "Mini Messageboard",messages: messages,links:links});
});

indexRouter.get("/detail/:id", (req, res)=>{
    const id= req.params.id;

    if(id>=0 && id<messages.length){
        const message=messages[id];
        res.render("detail", {message:message});
    }
    else{
        res.status(404).send("message not found");
    }
})


export default indexRouter;