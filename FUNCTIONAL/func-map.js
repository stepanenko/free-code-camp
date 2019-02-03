
// Functions are considered First Class Objects in JavaScript, which means they can be used like any other object.

// TASK: The watchList array holds objects with information on several movies. Use map to pull the title and rating from watchList and save the new array in the rating variable.

var watchList = [
  {  
    "Title": "Inception",
    "Year": "2010",
    "Rated": "PG-13",
    "Released": "16 Jul 2010",
    "imdbRating": "8.8",
    "imdbVotes": "1,446,708"
 },
 {  
    "Title": "Interstellar",
    "Year": "2014",
    "Rated": "PG-13",
    "Released": "07 Nov 2014",
    "imdbRating": "8.6",
    "imdbVotes": "910,366"
 },
 {
    "Title": "The Dark Knight",
    "Year": "2008",
    "Rated": "PG-13",
    "Released": "18 Jul 2008",
    "imdbRating": "9.0",
    "imdbVotes": "1,652,832"
 },
 {  
    "Title": "Batman Begins",
    "Year": "2005",
    "Rated": "PG-13",
    "Released": "15 Jun 2005",
    "imdbRating": "8.3",
    "imdbVotes": "972,584"
 },
 {
    "Title": "Avatar",
    "Year": "2009",
    "Rated": "PG-13",
    "Released": "18 Dec 2009",
    "imdbRating": "7.9",
    "imdbVotes": "876,575"
 }
];

var rating = [];
rating = watchList.map(m => {
   return { title: m.Title, rating: m.imdbRating }
});

// before:
// for(var i=0; i < watchList.length; i++){
// rating.push({title: watchList[i]["Title"],  rating: watchList[i]["imdbRating"]});
// }

console.log(rating); 


//  the map method is a way to iterate over each item in an array. It creates a new array (without changing the original one) after applying a callback function to every element.
