let add_Notes = document.getElementById("add_note");
update_note();

//add note in localstorage
add_Notes.addEventListener("click", () => {
  let notes = document.getElementById("note");
  if (notes.value == "") {
    document.getElementById("error").textContent = "Please Note Something";
  } else {
    let getNotes = localStorage.getItem("note");
    if (getNotes == null) {
      notes_boj = [];
    } else {
      notes_boj = JSON.parse(getNotes);
    }
    notes_boj.push(notes.value);
    localStorage.setItem("note", JSON.stringify(notes_boj));
    notes.value = "";
    update_note();
  }
});

// Update all Note from localstorage
function update_note() {
  let getNotes = localStorage.getItem("note");
  if (getNotes == null) {
    notes_boj = [];
  } else {
    notes_boj = JSON.parse(getNotes);
  }
  let allNotes = "";
  notes_boj.forEach((val, index) => {
    let notes = document.getElementById("note");
    allNotes += `<div class="card">
          <div class="card-body">
            <p class="card-text">${val}</p>
            <button id="${index}" onclick="delete_note(this.id)" class="mx-auto d-block delete_btn">Delete Note</button>
          </div>
        </div>`;
  });

  if (notes_boj.length != 0) {
    document.getElementById("note_card").innerHTML = allNotes;
  } else {
    document.getElementById("note_card").innerHTML = `<p class="text-center text-white">Not Available Yet</p>`;
  }
}

//delete note from localstorage
function delete_note(index) {
  let getNotes = localStorage.getItem("note");
  if (getNotes == null) {
    notes_boj = [];
  } else {
    notes_boj = JSON.parse(getNotes);
  }
  notes_boj.splice(index, 1);
  localStorage.setItem("note", JSON.stringify(notes_boj));
  update_note();
}
