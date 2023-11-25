const {fromEvent,Observable} = rxjs;

class Note{

    constructor() {
        this.parentNote = null;
        this.childNotes = [];
        this.Element = null; 
    }

    addNote() {
        const noteTitle = document.getElementById('title-input').value;
        const noteText = document.getElementById('note-input').value;
        const noteColour = document.getElementById('colour').value;

        document.getElementById('note-input').value = '';
        document.getElementById('title-input').value = '';
        
        const note = document.createElement('div');
        note.className = 'note';
        note.style.backgroundColor = noteColour;
        this.Element = note;
    
        const body = document.createElement('p');
        body.textContent = noteTitle + ": " + noteText;
        this.Element.appendChild(body);
        note.appendChild(body);

        const childNoteButton = document.createElement('button');
        const editButton = document.createElement('button');
        const deleteButton = document.createElement('button');

        childNoteButton.appendChild(document.createTextNode("Add Child Note"))
        fromEvent(childNoteButton, 'click').subscribe(() => this.addChildNote(this));
        note.appendChild(childNoteButton);
            
        editButton.appendChild(document.createTextNode("Edit"))
        fromEvent(editButton, 'click').subscribe(() => this.editNote(body));
        note.appendChild(editButton);

        deleteButton.appendChild(document.createTextNode("Delete"))
        fromEvent(deleteButton, 'click').subscribe(() => this.deleteNote());
        note.appendChild(deleteButton);

        const notesList = document.getElementById('note-list');
        notesList.appendChild(note);

    }

    addChildNote(parentNote,event) {
        const newChildNote = new Note(); 
        newChildNote.parentNote = parentNote; 
        parentNote.childNotes.push(newChildNote);
        newChildNote.addNote();
    }

    deleteNote() {
        const noteList = document.getElementById('note-list');
        noteList.removeChild(this.Element);

        for (const childNote of this.childNotes) {
            childNote.deleteNote();
        }
        // Remove this note after all children have been removed
        if (this.Element && this.Element.parentNode) {
            this.Element.parentNode.removeChild(this.Element);
        }
    }
    
    editNote(bodyText) {
        const ChangedTitle = prompt('Change Title', bodyText.textContent);
        const ChangedBody = prompt('Change Body', bodyText.textContent);
        bodyText.textContent = ChangedTitle + ": " + ChangedBody;
    }
    
}

    const note = new Note();
    const button_input = document.getElementById("button_input");
    fromEvent(button_input,'click').subscribe(() => note.addNote());