
let notes = [];
var colour = '';

function addNote() {
    const noteInput = document.getElementById("note-input");
    const noteTitleInput = document.getElementById("title-input");
    const noteColourInput = document.getElementById("colour");
    const noteColour = noteColourInput.value.trim();
    const noteText = noteInput.value.trim();
    const noteTitle = noteTitleInput.value.trim();
    const noteConcat = noteTitle +':\n' +noteText;
    if (noteText !== "") {
        notes.push(noteConcat);
        noteInput.value = "";
        noteTitleInput.value = "";
        displayNotes(noteColour);
    }
}

function displayNotes(noteColour) {
    const noteList = document.getElementById("note-list");
    colour = noteColour
    noteList.innerHTML = "";
    notes.forEach((note, index) => {
        const listItem = document.createElement("li");
        listItem.style.backgroundColor=colour
        listItem.innerHTML = `

            ${note}
            <button onclick="editNote(${index})" class="edit">Edit</button>
            <button onclick="deleteNote(${index})">Delete</button>
        `;
        noteList.appendChild(listItem);
    });
}

function deleteNote(index) {
    notes.splice(index, 1);
    displayNotes(colour);
}

function editNote(index) {
    const updatedNote = prompt("Editor", notes[index]);
    if (updatedNote !== null) {
        notes[index] = updatedNote;
        displayNotes(colour);
    }
}
