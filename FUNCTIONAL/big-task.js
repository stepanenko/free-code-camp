
// Fill in the urlSlug function so it converts a string title and returns the hyphenated version for the URL. You can use any of the methods covered in this section, and don't use replace. Here are the requirements:

var globalTitle = "Winter    Is Coming";

function urlSlug(title) {
  return title.toLowerCase().trim().split(/\s+/).join('-');
}

var winterComing = urlSlug(globalTitle); // Should be "winter-is-coming"
console.log(winterComing);

// given solution
function urlSlug2(title) {
  return title
    .split(/\W/)
    .filter(el => el !== '')
    .join('-')
    .toLowerCase();
  }

var u = urlSlug2('Hello    world   ');
console.log(u);
