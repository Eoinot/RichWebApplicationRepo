import { useState } from 'react';
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import './App.css';

function App() {
  const libraries = ['places'];
  const mapContainerStyle = {
    width: '25vw',
    height: '25vh',
  };

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: '',
    libraries,
  });


  const [title,setTitle] = useState();
  const [message,setMessage] = useState();
  const [notes ,setNotes] = useState([]);
  const [colour,setColour] = useState("");
  const [count,setCount] = useState(0);
  const [lat,setMarkerslat] = useState(1)
  const [lng,setMarkerslong] = useState(1)

  function deleteNote(noteID){
    setNotes(notes.filter((element) => element.key !== noteID));
  }

  function editNote(noteID){
    var updatedMessage = prompt("Edit Message", notes[noteID]);
    notes[noteID].message = updatedMessage
  }

  function getLocation() {
    if (navigator.geolocation) {
      const test = navigator.geolocation.getCurrentPosition(addMarker);
    } 
  }

  function addMarker(position){
    setMarkerslat(position.coords.latitude)
    setMarkerslong(position.coords.longitude)
  }

  function addNote(){
    setNotes([...notes,{key:count,title:title,message:message,colour:colour}]);
    setCount(count + 1);
    setTitle("");
    setMessage("");
    console.log(notes);
    getLocation()
  }

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  return (
    <><div className="notes">
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
          } }
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
      {notes.map((element, i) => (
        <div className="notes-item" key={i}>
          <div style={{ width: "90%", backgroundColor: element.colour }}>
            <h4>Title: {element.title}</h4>
            <p>Note: {element.message}</p>
            <div>
             <h4>Map:</h4>
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={15}
                center={{lat:lat,lng:lng}}

              >
                {/* <Marker position={center}/> */}
                <Marker position={{lat:lat,lng:lng}}/>
              </GoogleMap>
            </div>
          </div>
          <button type="input" onClick={() => deleteNote(element.key)}> Delete</button>
          <button type="input" onClick={() => editNote(element.key)}> Edit</button>
        </div>
      ))}
    </div>
    </>
  );
}

export default App;
