import express from "express"
const app = express();

app.get('/',(req,res)=>{
    console.log("Serve is listen yeeeeeeeeee")
    res.send("Welcome to Coding World")
})
app.listen(8000,()=>{
console.log(
    "Server is listen on the PORT 8000"
)
})