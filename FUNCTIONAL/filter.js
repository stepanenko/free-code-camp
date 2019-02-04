
// TASK: Use a combination of filter and map to return a new array of objects with only title and rating keys, but where imdbRating is greater than or equal to 8.0. Note that the rating values are saved as strings in the object and you may want to convert them into numbers to perform mathematical operations on them.

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

var filteredList;

filteredList = watchList
  .filter(m => Number(m.imdbRating) >= 8)
  .map(m => {
    return {
      title: m.Title,
      rating: m.imdbRating
    }
  });

console.log(filteredList);

// Given solution:
var filteredList2 = watchList.map(function(e) {
  return {title: e["Title"], rating: e["imdbRating"]}
}).filter((e) => e.rating >= 8);

console.log([1, 2] === [1, 2]); // ??
