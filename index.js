const express = require("express");
const cors = require("cors");
const assert = require("assert");
const ObjectId = require("mongodb").ObjectID;
const MongoClient = require("mongodb").MongoClient;
const bodyParser = require("body-parser");

import {password} from './auth';

const app = express();

const PORT = 4000;
const user = "dev_academy";


const uri = `mongodb+srv://dev_academy:${password}@kanslodagbok-g1obv.mongodb.net/users?retryWrites=true`;

app.use(express.static("frontend/build"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

app.get('/', async (req, res, err) => {
    //todo
});




app.listen(PORT);