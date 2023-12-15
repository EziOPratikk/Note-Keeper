import { useState } from 'react';

import Header from './components/Header';
import Input from './components/Input.jsx';
import Note from './components/Note';
import Footer from './components/Footer';

import icon from './images/sleeping.png';

import Snackbar from '@mui/material/Snackbar';

function App() {
  const [noteList, setNoteList] = useState([]);
  const [note, setNote] = useState({
    title: '',
    content: '',
  });
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);

  function inputNoteHandler(event) {
    const newValue = event.target.value;
    const inputName = event.target.name;

    setNote((prevValue) => {
      return {
        ...prevValue,
        [inputName]: newValue,
      };
    });
  }

  function addNoteHandler(event) {
    event.preventDefault();

    setNoteList([...noteList, note]);

    setNote({
      title: '',
      content: '',
    });
  }

  function deleteNoteHandler(id) {
    const filteredNotes = noteList.filter((_, index) => {
      return index !== id;
    });

    setIsSnackbarOpen(true);

    setTimeout(() => {
      setIsSnackbarOpen(false);
    }, 3000);

    setNoteList(filteredNotes);
  }
  return (
    <div>
      <Header />
      <Input
        onChange={inputNoteHandler}
        onSubmit={addNoteHandler}
        value={note}
      />
      {noteList.length === 0 ? (
        <div className='empty-icon-container'>
          <img src={icon} alt='empty-icon' className='empty-icon' />
          <p>No note kept yet!</p>
        </div>
      ) : (
        noteList.map((noteItem, index) => {
          return (
            <Note
              key={index}
              id={index}
              title={noteItem.title}
              content={noteItem.content}
              onDelete={deleteNoteHandler}
            />
          );
        })
      )}
      <Snackbar
        open={isSnackbarOpen}
        message='Note removed'
        ContentProps={{
          sx: {
            background: '#f5ba13;',
            fontFamily: 'Montserrat',
            fontWeight: 'bold',
          },
        }}
      />
      <Footer />
    </div>
  );
}

export default App;
