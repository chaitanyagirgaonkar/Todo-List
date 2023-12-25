// redirect to addnote page
function addnote() {
  location.replace("addnote.html")
}

// to clear inputbox
function cleared() {
  console.log('clear...')
  document.getElementById('title').value = null;
  document.getElementById('description').value = null;
}
// redirect ot your list
function yournote() {
  location.replace("yourlist.html")
}
// function editlist() {
//   location.replace("editlist.html")
// }

// menu 
var menu =document.getElementById('menu')
var nav =document.getElementById('nav')
menu.addEventListener('click',function(){
  nav.classList.toggle("menuadd")
})

