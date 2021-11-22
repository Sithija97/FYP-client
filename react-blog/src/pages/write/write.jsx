import React from "react";
import "./write.css";

const Write = () => {
  return (
    <div className="write">
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileinput">
            <i class="fas fa-plus"></i>
          </label>
          <input type="file" id="fileinput" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Tell your story..."
            className="writeInput writeText"
          ></textarea>
        </div>
        <button className="writeSubmit">Publish</button>
      </form>
    </div>
  );
};

export default Write;
