const books = [{
  title :"Eat That Frog!: 21 Great Ways to Stop Procrastinating and Get More Done in Less Time",
  authorName : "Brian Tracy",
  releaseYear :2001
},
{
  title :"101 Essays That Will Change the Way You Think",
  authorName : " Brianna Wiest",
  releaseYear :2016
},
{
  title :"No More Mr. Nice Guy",
  authorName : "Dr Robert Glover and Robert A. Glover",
  releaseYear :2000
}];

function sortByYear (book1, book2){
 if(book1.releaseYear < book2.releaseYear ){
   return -1;
 }
 else if(book1.releaseYear > book2.releaseYear){
   return 1;
 }
  else{
    return 0;
  }
}
const filteredBooks = books.filter(book => book.releaseYear <= 1950);

filteredBooks.sort(sortByYear);

console.log(filteredBooks)