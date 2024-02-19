const express = require('express');
const router = express.Router();

array=[
{id:1,name:'post1'},
{id:2,name:'post2'},
{id:3,name:'post3'}]

router.get('/all',(req,res)=>{
    res.send(array)
})

router.get('/:id',(req,res)=>{
    // for(let i=0;i<=array.length;i++){
    //     if (req.params.id == array[i].id){
    //         res.send(`post ${array[i].name} with id ${req.params.id}`)
   
    //     }else res.send('not found')
    // }
    res.send(`post with id ${req.params.id}`)
})



module.exports = router;