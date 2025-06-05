import React from "react";

function ToDo() {
  return (
    <div className="flex justify-center">
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <h1 className="card-title">My ToDo</h1>
        <input
          type="text"
          name="taskName"
          className="input"
          placeholder="new task"
          onChange={hdlChange}
        />
      </fieldset>
    </div>
  );
}

export default ToDo;
