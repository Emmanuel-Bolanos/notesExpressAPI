import React from 'react';

export const NotesFilter = () => {
  // gotta add the query in the form action I guess + method="GET" !
  // more info here: https://developer.mozilla.org/en-US/docs/Learn/Forms/Sending_and_retrieving_form_data
  return (
    <React.Fragment>
      <form action="#">
        <label for="queries"> Filter notes by: </label>
        <select name="queries" id="queries">
          <option value="title name"> Title name (A to Z) </option>
          <option value="priority level"> Priority Level </option>
          <option value="completion state"> Completion State </option>
          <option value="deadline"> Deadline </option>
        </select>
        <input type="submit" value="Submit" />
      </form>
    </React.Fragment>
  )
}
