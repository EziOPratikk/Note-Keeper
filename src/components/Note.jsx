import BackspaceIcon from '@mui/icons-material/Backspace';

function Note(props) {
  function deleteNoteHandler() {
    props.onDelete(props.id);
  }

  return (
    <div className='note'>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={deleteNoteHandler}>
        <BackspaceIcon />
      </button>
    </div>
  );
}

export default Note;
