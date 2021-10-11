import React from "react";
import { Typography } from "@material-ui/core";

// const Backdrop = (props) => {
//   return (
//     <div className={classes.backdrop} onClick={props.onClickCloseCart}></div>
//   );
// };

const Modal = (props) => {
  return (
    <div>
      <h4>{props.title}</h4>
      <label for="free">Free</label>
      <input type="radio" name="course-type" id="free" />
      <label for="free">Paid</label>
      <input type="radio" name="course-type" id="paid" />
      <ul>
        <li>
          <Typography>FreeCodeCamp</Typography>
          <Typography>Responsive Web Design</Typography>
          <button>Start Course</button>
        </li>
        <li>
          <Typography>FreeCodeCamp</Typography>
          <Typography>Responsive Web Design</Typography>
          <button>Start Course</button>
        </li>
      </ul>
      <button>Close</button>
    </div>
  );
};

export default Modal;
