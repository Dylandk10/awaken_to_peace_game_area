import express from "express";
import { QUOTES } from "../constants/quotes.js";
import { getAuthorsArray } from "../constants/RandomAuthor.js";
import { HTTP_CODES } from "../constants/StatusCodes.js";

const gameRouter = express.Router();


//get a single random quote
gameRouter.get('/getSingleRandomQuote', (request, response) => {
    const randomInt = Math.floor(Math.random() * QUOTES.length);
    const randomQuote = QUOTES[randomInt];
    response.status(HTTP_CODES.ok).json(randomQuote);
});

gameRouter.get('/getGameQuote', (request, response) => {
    const randomInt = Math.floor(Math.random() * QUOTES.length);
    const randomQuote = QUOTES[randomInt];
    const array = getAuthorsArray(randomQuote.author);
    randomQuote.option1 = array[0];
    randomQuote.option2 = array[1];
    randomQuote.option3 = array[2];
    response.status(HTTP_CODES.ok).json(randomQuote);
});


export default gameRouter;