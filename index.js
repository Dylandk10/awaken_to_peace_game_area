import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { DatabaseHandler } from './DatabaseHandler.js';
import gameRouter from './routes/gameRoute.js';


const PORT = process.env.PORT || 8080;
const app = express();
dotenv.config();



 // ** MIDDLEWARE cors function for production and dev** //
 if(process.env.NODE_ENV === 'production') {
    const whitelist = ['http://localhost:3000', 'http://localhost:8080'];
    const corsOptions = {
        origin: function (origin, callback) {
            console.log("** Origin of request " + origin)
            if (whitelist.indexOf(origin) !== -1 || !origin) {
                console.log("Origin acceptable")
                callback(null, true)
            } else {
                console.log("Origin rejected")
                callback(new Error('Not allowed by CORS'))
            }
        }
    }
    app.use(cors(corsOptions));
} else {
    //allows cors and axios to make request 
 app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
  });
app.use(
    cors({
      origin: ["http://localhost:8080", "http://localhost:3000"],
      //to allow cookies and other credentials from this origin...should see
      //200 ok in network tab and also should see in localhost now from
      //front end and backend having credentials true
      credentials: true,
    })
  ); 
}


//middleware core functions
app.use(express.json()); // for json request
app.use(express.urlencoded({extended:true}));



//routes go here
app.use('/gameRoute', gameRouter);


//for heroku build deployment
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));
if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'awaken_to_peace_game_area_frontend/build')));
// Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'awaken_to_peace_game_area_frontend/build', 'index.html'));
  });
}




app.listen(PORT, () => {
    console.log(`Running server on port ${PORT}`);
    DatabaseHandler.startDatabase(process.env.MONGO_URL);
});