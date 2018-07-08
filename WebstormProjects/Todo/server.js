const express=require('express');
const app=express();
const bodyParser=require('body-parser');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
//app.post('/getPost',function (req,res) {
  //  res.send(req.body);
//});
app.listen(5000,function(){
    console.log("Server running on port 5000")
});
let todoList=[];
app.post('/add',function(req,res){
    todoList.push(req.body.todo);
    res.send(req.body.todo);
    console.log(todoList);
});
app.post('/update',function (req,res) {

});
app.post('/delete',function (req,res) {

});
app.get('/display',function(req,res){

});