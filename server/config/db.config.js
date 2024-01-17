const mongoose = require('mongoose')
const db = require("../models");
require('dotenv').config();
const Role = db.role;
const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URI, connectionParams)
    .then(() => {
        console.log('Connected to the database')
        // initial();
    })
    .catch((err) => {
        console.error(`Error connecting to the database. n${err}`);
    })


// function initial() {
//     Role.estimatedDocumentCount((err, count) => {
//         if (!err && count === 0) {
//             new Role({
//                 name: "user"
//             }).save(err => {
//                 if (err) {
//                     console.log("error", err);
//                 }

//                 console.log("added 'user' to roles collection");
//             });

//             new Role({
//                 name: "moderator"
//             }).save(err => {
//                 if (err) {
//                     console.log("error", err);
//                 }

//                 console.log("added 'moderator' to roles collection");
//             });

//             new Role({
//                 name: "admin"
//             }).save(err => {
//                 if (err) {
//                     console.log("error", err);
//                 }

//                 console.log("added 'admin' to roles collection");
//             });
//         }
//     });
// }
