import express from "express";
import { QUOTES } from "../constants/quotes.js";
import { HTTP_CODES } from "../constants/StatusCodes.js";

const gameRouter = express.Router();


//get a single random quote
gameRouter.get('/getSingleRandomQuote', async (request, response) => {
    const randomInt = Math.floor(Math.random() * QUOTES.length);
    const randomQuote = QUOTES[randomInt];
    response.status(HTTP_CODES.ok).json(randomQuote);
});


export default gameRouter;