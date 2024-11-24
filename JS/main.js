var bookmarkNameValue = document.getElementById('bookmarkName');
var bookmarkURLValue = document.getElementById('bookmarkURL');
var errorMessageValue = document.getElementById('errorMessage');
var bookmarkArr ;
var index ;
var URLRegex = /^https?:\/\//;

if (localStorage.getItem('bookmarks') != null) {
    bookmarkArr = JSON.parse(localStorage.getItem('bookmarks')) ;
    readBookmarks();
    index = ( bookmarkArr.length - 1 ) ;
}
else {
    bookmarkArr  = [] ;
    index = 0 ;
}

function createBookmark(){
    URLValidatation();
    var bookmark = {
        name : bookmarkNameValue.value ,
        URL : bookmarkURLValue.value 
    }
    bookmarkArr.push(bookmark) ;
    // console.log(bookmarkArr);
    localStorage.setItem('bookmarks' , JSON.stringify(bookmarkArr))
    clearInputs();
    readBookmarks();
}

function clearInputs() {
    bookmarkNameValue.value = null ;
    bookmarkURLValue.value = null ;
}

function readBookmarks() {
    var dataCollecter = `` ;
    for (var i = 0 ; i < bookmarkArr.length ; i++) 
    {
    dataCollecter += 
    `
    <tr>
        <td>${i + 1}</td>
            <td>${bookmarkArr[i].name}</td>              
            <td>
                <button class="btn " onclick="visitURL(${i})">
                <i class="fa-solid fa-eye pe-2"></i>Visit
            </button>
        </td>
        <td>
            <button class="btn  pe-2" onclick="deleteBookmark(${i})">
                <i class="fa-solid fa-trash-can"></i>
                Delete
             </button>
        </td>
    </tr>
    `
    }
    tableContent.innerHTML = dataCollecter ;
}

function URLValidatation(){
    if (URLRegex.test(bookmarkURLValue.value)){
        bookmarkURLValue.classList.add('is-valid');
        errorMessageValue.classList.remove('d-none');
        bookmarkURLValue.classList.remove('is-invalid');
    }
    else {
        bookmarkURLValue.classList.add('is-invalid');
        bookmarkURLValue.classList.remove('is-valid');
        errorMessageValue.classList.add('d-none');
    }
}

function deleteBookmark(deleteIndex){
    bookmarkArr.splice(deleteIndex , 1) ;
    localStorage.setItem('bookmarks' , JSON.stringify(bookmarkArr))
    readBookmarks();
}

function visitURL() {

}