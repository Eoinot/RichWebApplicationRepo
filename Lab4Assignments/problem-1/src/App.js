
import { useState } from 'react';
import './App.css';

function App() {

  const [title,setTitle] = useState();
  const [message,setMessage] = useState();
  const [notes ,setNotes] = useState([]);
  const [colour,setColour] = useState("");
  const [count,setCount] = useState(0);
  // const [editcount,seteditCount] = useState(0);
  // const [editedMessage,setEditedMessage] = useState("");

  function deleteNote(noteID){
    setNotes(notes.filter((element) => element.key !== noteID));
  }

  function editNote(noteID){
    var updatedMessage = prompt("Edit Message", notes[noteID]);
    notes[noteID].message = updatedMessage
  }

  function addNote(){
    setNotes([...notes,{key:count,title:title,message:message,colour:colour}]);
    setCount(count + 1);
    setTitle("");
    setMessage("");
    console.log(notes);
  }

  return (
    <div className="notes">
      <div className="add">
          <h3>Add Notes</h3>
          
          <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
          ></input>
          <input
              type="text"
              id="description"
              value={message}
              onChange={(e) => {
                  setMessage(e.target.value);
              }}
          ></input>
          <select
            onBeforeInput={(e) => setColour(e.target.value)}
            onChange={(e) => setColour(e.target.value)}
            >
                    <option value="red">Red</option>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                    <option value="yellow">Yellow</option>
                    <option value="orange">Orange</option>
                    <option value="pink">Pink</option>
              </select>
          <button type="submit" onClick={addNote}>
              Submit
          </button>
      </div>
      {notes.map((element,i) => (
          <div className="notes-item" key={i}>
              <div style={{ width: "90%",backgroundColor:element.colour }}>
                  <h4>Title: {element.title}</h4>
                  <p>Note: {element.message}</p>
              </div>
              <button type="input" onClick={() => deleteNote(element.key)}> Delete</button>
              <button type="input" onClick={() => editNote(element.key)}> Edit</button>
          </div>
      ))}
  </div>
  );
}

export default App;
