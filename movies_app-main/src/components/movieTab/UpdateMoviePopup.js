import React, { useState, useEffect } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { toast } from 'react-toastify';

function UpdateMoviePopup(props) {
  const { modal, toggle, originalData, setMovieData } = props;
  const [formData, setFormData] = useState(null);
  useEffect(() => {
    if (originalData) {
      setFormData(originalData);
    }
  }, [originalData]);

  const updateButtonHandle = () => {
    setMovieData(formData);
    toast.success("Data updated successfully!")
  };
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} {...props}>
        <ModalHeader toggle={toggle}>Update Movie Details</ModalHeader>
        {formData && (
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for="title">Title</Label>
                <Input
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
              </FormGroup>
              <FormGroup>
                <Label for="simplePlot">Plot</Label>
                <Input
                  id="simplePlot"
                  name="simplePlot"
                  value={formData.simplePlot}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
              </FormGroup>
              <FormGroup>
                <Label for="rating">Rating</Label>
                <Input
                  id="rating"
                  name="rating"
                  value={formData.rating}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
              </FormGroup>
              <FormGroup>
                <Label for="votes">Votes</Label>
                <Input
                  id="votes"
                  name="votes"
                  value={formData.votes}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
              </FormGroup>
            </Form>
          </ModalBody>
        )}
        <ModalFooter>
          <Button
            color="primary"
            onClick={() => {
              updateButtonHandle();
              toggle();
            }}
          >
            Update
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default UpdateMoviePopup;
