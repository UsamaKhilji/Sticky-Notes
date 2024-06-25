// if user add a note
showNotes();
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
  let addTxt = document.getElementById("addTxt");
  let notes = localStorage.getItem("notes");
  let notesObj = [];
  if (notes == null) {
    notesObj = [];
  } else {
    // console.log('JSON.parse(notes)', JSON.parse(notes));
    notesObj = JSON.parse(notes);
  }

  notesObj.push(addTxt.value);

  localStorage.setItem("notes", JSON.stringify(notesObj));

  addTxt.value = "";

  showNotes();
});
//  function to show elemwnt to local storage
function showNotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    // console.log('JSON.parse(notes)', JSON.parse(notes));
    notesObj = JSON.parse(notes);
  }
  let html = "";
  notesObj.forEach(function (element, index) {
    html += `
        <div class="Notecard my-2 mx-2" style="width: 18rem;">  
        <div class="card-body">
          <h5 class="card-title"  style="color: blue;">Note ${index + 1}</h5>
          <p class="card-text"  style="color: blue;">${element}</p>
          <button id="${index}"onclick="deleteNote(this.id)"  class="btn btn-primary">Delete Note</button>
        </div>
      </div>`;
  });
  let notesElm = document.getElementById("notes");
  if (notesObj.length != 0) {
    notesElm.innerHTML = html;
  } else {
    // notes.innerHTML  = `Nothing Show Use "Adda Notes" sextion above to add notes. `;
  }
}
// functioon to delete a note
function deleteNote(index) {
  console.log("delete", index);
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    // console.log('JSON.parse(notes)', JSON.parse(notes));
    notesObj = JSON.parse(notes);
  }
  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();
}
let search = document.getElementById("searchTxt");
search.addEventListener("input", function () {
  let inputVal = search.value.toLowerCase();
  // console.log('Input event !', inputval);
  let noteCards = document.getElementsByClassName("Notecard");
  Array.from(noteCards).forEach(function (element) {
    let cardTxt = element.getElementsByTagName("p")[0].innerText;
    // console.log(cardTxt);
    if (cardTxt.includes(inputVal)) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
});
