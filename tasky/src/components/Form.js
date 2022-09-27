import React from "react";

const AddTaskForm = (props) => {

  return (
    <div>
      <form onSubmit={props.submit}>
        <label>
            Task title:
            <input onChange={(event) => props.change(event)} type="text" name="title" required />
        </label>
        <br />
        <label>
            Due date:
            <input onChange={(event) => props.change(event)} type="date" name="deadline" required />
        </label>
        <br />
        <label>
            Details:
            <input onChange={(event) => props.change(event)} type="text" name="description" />
        </label>
        <input type="submit" value="Submit" />
        </form>
    </div>
  )
};

export default AddTaskForm;