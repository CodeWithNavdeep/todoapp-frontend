import React from "react";
import Draggable from "react-draggable";

export const Listformat = (props) => {
  return (
    <>
    <br/>
    <Draggable  style={{cursor:"pointer"}} onDrag = {props.ondrag} onStop = {props.ondrop}>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              List 
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <div className="form-floating">
                <small>What to do</small>
                
                <textarea
                  className="form-control"
                  style={{ paddingTop:"10px",height: "30px"}}
                  placeholder="what to do"
                ></textarea>
                <br/>
                <small>Deadline</small>
                <input type="time" className="form-control" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Draggable>
    </>
  );
};
