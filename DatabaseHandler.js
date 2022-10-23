import mongoose from "mongoose";


export class DatabaseHandler {
    static async startDatabase(url) {
        try {
            await mongoose.connect(url);
            console.log("Database started");
          } catch (error) {
            console.log("Error connecting to the database");
            console.log(error);
          }
    }

}