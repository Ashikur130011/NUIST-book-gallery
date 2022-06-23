
const errorMessage = document.getElementById("error-msg");
errorMessage.style.display='none'
const displayLoading = document.getElementById('loading')
displayLoading.style.display='none'

const bookSearch= () =>{
    displayLoading.style.display = "block";
    const searchBook = document.getElementById('search-book')
    const searchText = searchBook.value
    const url = `https://openlibrary.org/search.json?q=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayBook(data.docs))
    document.getElementById('search-book').value=''
}

const displayBook = names => {
    const bookLength = document.getElementById('book-length')
    if(names.length === 0){
        errorMessage.style.display = "block";
        bookLength.textContent=''
    }
    else{
        errorMessage.style.display = "none";
        bookLength.innerHTML=`Total Book Found: ${names.length}`
    }

    
const bookContainer = document.getElementById('display-book')
    bookContainer.textContent=""
    names.forEach(name=> {
        const makeDiv = document.createElement('div')
        makeDiv.innerHTML = `
            <div class="col">
                <div class="card h-100">
                <img src="https://covers.openlibrary.org/b/id/${name.cover_i}-M.jpg" class="card-img-top" style="height:250px" alt="...">
                <div class="card-body">
                    <h2 class="card-title">${name.title}</h2>
                    <h5 class="card-title">${name.author_name}</h5>
                    <p class="card-text">${name.publisher}</p>
                </div>
                </div>
            </div>
        `;
        bookContainer.appendChild(makeDiv)
        displayLoading.style.display = "none";
    })
}
