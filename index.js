const express = require("express");
const cors = require("cors");
const assert = require("assert");
const ObjectId = require("mongodb").ObjectID;
const MongoClient = require("mongodb").MongoClient;
const bodyParser = require("body-parser");

const {password} = require('./auth');

const app = express();

const PORT = 4000;
const user = "dev_academy";


const uri = `mongodb+srv://dev_academy:${password}@kanslodagbok-g1obv.mongodb.net/users?retryWrites=true`;

app.use(express.static("frontend/build"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());





app.get('/econdata', async (req, res, err) => {
    const id = req.query.id;
    console.log(id);
   
      MongoClient.connect(uri,{ useNewUrlParser: true}, async (err, client)=>{
        console.log(client);
        const collection = client.db("budgetApp").collection("econdata");
        collection.findOne({_id:id},(err,result)=>{
          if(result){
            res.send(result);
          }else{
            res.send("error");
          }
          
        });
        
        
        
      })
        
      
  
    
   
});



  app.post('/newecondata', async (req, res, err) => {

    let id = req.body._id;
    let values = req.body.values;

    MongoClient.connect(uri,{ useNewUrlParser: true}, async (err, client)=>{
      const collection = client.db("budgetApp").collection("econdata");
      collection.findOneAndUpdate({_id:id}, {$set:{"data.settings":values}}, { returnOriginal: false }, function(err, result) {
        if (result.lastErrorObject.updatedExisting) {
          res.send(result);
        } else {
          res.send(JSON.stringify("error"))
        }
      });
      
      client.close();
      })



  })




app.listen(PORT);