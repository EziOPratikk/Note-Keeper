import { Fragment, useState } from 'react';

import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import Zoom from '@mui/material/Zoom';

function Input(props) {
  const [isExpanded, setIsExpanded] = useState(false);

  function expandInputAreaHandler() {
    setIsExpanded(true);
  }

  return (
    <Fragment>
      <form onSubmit={props.onSubmit}>
        {isExpanded && (
          <input
            name='title'
            type='text'
            placeholder='Title'
            required
            onChange={props.onChange}
            value={props.value.title}
          />
        )}
        <textarea
          name='content'
          placeholder='Take a note...'
          rows={isExpanded ? '3' : '1'}
          required
          onChange={props.onChange}
          value={props.value.content}
          onClick={expandInputAreaHandler}
        />
        <Zoom in={isExpanded}>
          <button type='submit'>
            <LibraryAddIcon sx={{ fontSize: 30 }} />
          </button>
        </Zoom>
      </form>
    </Fragment>
  );
}

export default Input;
