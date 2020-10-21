import React, {createRef} from 'react';
import Axios from 'axios';

import './App.css';
const fileInput = createRef();
const textInput = createRef();

function App() {
  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("text", textInput.current.value);
    formData.append("files", fileInput.current.files);
    Axios.post(
      "http://thomklauke.ddns.net:3000/print",
      formData,
      {
        headers:
          {
            'Content-Type': 'multipart/form-data'
          }
        }
    ).then((res) => {
      alert(res);
    }).catch((err) => {
      alert(err.message);
    });
  }

  return (
    <div className="App">
      <fieldset className="fieldset">
        <legend className="legend">Drucken</legend>
        <form className="form">
          <label className="label" htmlFor="file">Dateien</label>
          <input className="formelement" type="file" id="file" name="file" multiple ref={fileInput} />
          <label className="label" htmlFor="text">Text</label>
          <textarea className="formelement" id="text" name="text" placeholder="Text hier eingeben" ref={textInput} />
          <button className="submit" type="submit" id="submit" name="submit" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </fieldset>
    </div>
  );
}

export default App;
