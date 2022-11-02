//used to provide random authors for the quote game easier to keep this seperated
const AUTHOR = [
    "Dan Millman",
    "Ernest Hemingway",
    "Dr. Lauren Fogel Mersy",
    "Noam Shpancer",
    "Nido Quebien",
    "Albus Dumbledore",
    "John Green",
    "Alan Watts",
    "Mahatma Gandi",
    "Simone de Beauvoir",
    "Aristotle",
    "Lao Tzu",
    "Buddha",
    "Carol Burnett",
    "Audrey Hepburn",
    "Michael Altshuler",
    "Winston Churchill",
    "Mother Teresa",
    "Theodore Roosevelt",
    "Echart Tolle",
    "Plato",
    "Aeschylus",
    "Neil Armstrong",
    "Morgan Freeman",
    "Micharl Jordan",
    "F. Scott Fitzgerald",
    "Andre Gide",
    "Walt Whitman",
    "Marcus Aurelius",
    "Peter Diamandis",
    "Nicole Maines",
    "Heraclitus",
    "Mark Twain",
    "Steve Jobs",
    "Socrates",
    "C.S. Lewis",
    "Confucius",
    "Thich Nhat Hanh",
    "Ralph Waldo Emerson",
    "Ayn Rand"
];

export const getAuthorsArray = (author) => {
    let array = [];
    array[0] = AUTHOR[getRandom()];
    array[1] = AUTHOR[getRandom()];
    array[2] = AUTHOR[getRandom()];
    for(let i = 0 ; i < array.length; i++) {
        for(let k = 0; k < array.length; k++) {
            while((array[i] === array[k] && i !== k) || array[i] === author) {
                array[i] = AUTHOR[getRandom()];
            }
        }
    }
    return array;
};

const getRandom = () => {
    return Math.floor(Math.random() * AUTHOR.length);
}