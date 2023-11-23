const {fromEvent} = rxjs;

let notes = [];
var colour = '';

const button_input = document.getElementById("button_input");
fromEvent(button_input,'click').subscribe(addNote);

function addNote() {
    const noteInput = document.getElementById("note-input");
    const noteTitleInput = document.getElementById("title-input");
    const noteColourInput = document.getElementById("colour");
    const noteColour = noteColourInput.value.trim();
    const noteText = noteInput.value.trim();
    const noteTitle = noteTitleInput.value.trim();
    const noteConcat = noteTitle +':\n' +noteText;
    const noteList = document.getElementById("note-list");
    if (noteText !== "") {

        const listItem = document.createElement("li");
        listItem.style.backgroundColor=noteColour
        const editbutton = document.createElement('button');
        const deletebutton = document.createElement('button');
        fromEvent(editbutton,'click').subscribe(editNote);
        fromEvent(deletebutton,'click').subscribe(deleteNote);
        listItem.appendChild(document.createTextNode(noteConcat));
        listItem.appendChild(editbutton);
        editbutton.appendChild(document.createTextNode("EditButton"))
        editbutton.setAttribute("class","editButton");
        deletebutton.appendChild(document.createTextNode("DeleteButton"))
        deletebutton.setAttribute("class","deleteButton");
        listItem.appendChild(deletebutton);
        noteList.appendChild(listItem);

    }
}
function deleteNote(event) {
    var et = event.target
    console.log(et)
    event.target.parentElement.remove();
    displayNotes(colour);
}

function editNote(event) {
    var et = event.target
    console.log(et);
    const updatedNote = prompt("Editor");
    et.parentElement.firstChild.nodeValue = updatedNote;
}
