import React, { Component } from "react";
class ModalWindow extends Component {
  render() {
    const { modalClass, noteId, noteText, inputText } = this.props;
    return (
      <div className={modalClass}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Your note text</h5>
              <button
                type="button"
                className="close"
                onClick={this.props.closeModal}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p>{noteText}</p>
              <form onSubmit={e => this.props.handleSubmit(e, noteId)}>
                <div className="form-group text-left">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Note text"
                    value={inputText}
                    onChange={this.props.handleChange}
                  />
                </div>
                <div className="modal-footer">
                  <button type="submit" className="btn btn-primary">
                    Save
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={this.props.closeModal}
                  >
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ModalWindow;
