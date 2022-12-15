import React from "react";
import Button from "./Button";
import "../style/ModalDelete.css";
import PropTypes from "prop-types";

export class ModalDelete extends React.Component {
  render() {
    const { del, close, isdelete } = this.props;

    if (isdelete) {
      return (
        <div className="modal-container">
          <div className="modal-box">
            <h3>Are You Sure</h3>
            <div style={butn} className="btn-group">
              {console.log("haiii", del)}
              <Button
                text="Yes"
                variant="primary"
                action={del}
                // action={() => delById(todo.id)}
              />
              <Button text="No" variant="warning" action={close} />
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}
ModalDelete.propTypes = {
  todo: PropTypes.object.isRequired,
  action: PropTypes.func.isRequired,
  del: PropTypes.func,
};

export default ModalDelete;

const butn = {
  display: "flex",
  justifyContent: "space-between",
};
