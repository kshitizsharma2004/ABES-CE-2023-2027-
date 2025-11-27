const express=require('express')
const cors =require('cors')
const app=express()
const port=8080;
app.use(cors())
app.get('/',(req,res)=>{
    res.send("this is my first server")
})
app.get('/api/about',(req,res)=>{
 const students=[
    {
        id:1,
        name:"kshitiz sharma",
        class:"btech"
    },
      {
        id:2,
        name:"harsh sharma",
        class:"mtech"
    },
      {
        id:3,
        name:"harshit sharma",
        class:"mca"
    }
     , {
        id:4,
        name:"kshitiz sharma",
        class:"bsc"
    },
      {
        id:5,
        name:"manish sharma",
        class:"ravish"
    }
 ];
 res.json(students);
})





app.listen(port,()=>{
    console.log(`server is run at :http://localhost:${port}`);

})