import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";

class AddMovie extends Component {
  render() {
    return (
      <div className="addMovie">
        <Modal
          {...this.props}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Add a new movie
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form className="form-row align-items-center">
              <input
                value={this.props.state.name}
                name="description"
                type="text"
                placeholder="Title"
                onChange={(e) => {
                  this.props.addfilmName(e.target.value);
                }}
                className="form-control mb-2"
              />
              <input
                value={this.props.state.description}
                type="text"
                name="name"
                placeholder="Description"
                onChange={(e) => {
                  this.props.addfilmDescription(e.target.value);
                }}
                className="form-control mb-2"
              />
              <input
                value={this.props.state.rating}
                name="description"
                type="text"
                placeholder="Rate"
                onChange={(e) => {
                  this.props.addfilmRate(e.target.value);
                }}
                className="form-control mb-2"
              />
              <input
                type="text"
                src={this.props.state.image}
                alt="movie poster "
                placeholder="Poster  "
                onChange={(e) => {
                  this.props.addfilmImage(e.target.value);
                }}
                className="form-control mb-2"
              />
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={this.props.onHide}>
              Close
            </Button>
            <Button variant="danger" onClick={this.props.addNew}>
              Add Movie
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
export default AddMovie;
