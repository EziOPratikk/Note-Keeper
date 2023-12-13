import { Fragment } from 'react';

function Input(props) {
  return (
    <Fragment>
      <form onSubmit={props.onSubmit}>
        <input
          name='title'
          type='text'
          placeholder='Title'
          required
          onChange={props.onChange}
          value={props.value.title}
        />
        <textarea
          name='content'
          placeholder='Take a note...'
          rows='3'
          required
          onChange={props.onChange}
          value={props.value.content}
        />
        <button type='submit'>&#10004;</button>
      </form>
    </Fragment>
  );
}

export default Input;
