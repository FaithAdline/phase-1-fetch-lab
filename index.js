function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
   return fetch('https://anapioficeandfire.com/api/books')
  .then(response =>{
    if(!response.ok) {
      error('response not ok');
    }
    return response.json();
    
  }) 
  .then(data => {
    renderBooks(data);
    console.log(data);
  })
  .catch(error => {
    console.error('Error fetching data:',error)
  });
}

function renderBooks(books){
  const bookList = document.getElementById('book-list');
  books.forEach(book =>{
    const listItem = document.createElement('li');
    listItem.innerHTML = book.name;
    bookList.appendChild(listItem);

  });

}
document.addEventListener('DOMContentLoaded',function(){
  fetchBooks();
});
  

    

