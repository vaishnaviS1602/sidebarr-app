import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const AddmisionForm = () => {
  return (
    <div>
     
  <Form>
      <Row className="mb-3">
      <h1>Addmision Form</h1>
          <Form.Group as={Col} controlId="formGrid user_id">
            <Form.Label>user_id</Form.Label>
            <Form.Control type="text" placeholder="user-id" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGrid mobile_no">
            <Form.Label>mobile_no</Form.Label>
            <Form.Control type="mobile_no" placeholder="mobile_no" />
          </Form.Group>
        </Row>
        
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="Password" placeholder="Password" />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridFirstname">
            <Form.Label>First_name</Form.Label>
            <Form.Control type="First_Name" placeholder="First name" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridLast_Name">
            <Form.Label>Last_name</Form.Label>
            <Form.Control type="Last_Name" placeholder="Last_Name" />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridgender">
          <Form.Label>Gender</Form.Label>
            <Form.Select defaultValue="Choose...">
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
              </Form.Select>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridList_of_class">
            <Form.Label>List_of_class</Form.Label>
            <Form.Select defaultValue="Choose...">
              <option>DR</option>
              <option>ER</option>
              <option>KG-I</option>
              <option>KG-II</option>
              <option>STD-I</option>
              <option>STD-II</option>
              <option>STD-VIII</option>
              <option>STD-X</option>
              <option>STD-XI</option>
              <option>STD-XII</option>
              <option>STD-XIII</option>
               </Form.Select> 
          </Form.Group>
        </Row>
        

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Select defaultValue="Choose...">
              <option>Choose...</option>
              <option>Nagpur</option>
              <option>Mumbai</option>
              <option>Pune</option>
              <option>Lucknow</option>
              <option>kanpur</option>
              <option> Varanasi</option>
              <option> wardha</option>
              <option> Rajkot</option>
              <option> baroda</option>
              <option> shilong</option>
              <option>shimla</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Select defaultValue="Choose...">
              <option>Choose...</option>
              <option>Maharastra</option>
              <option>Uttarpradesh</option>
              <option>Madhyapradesh</option>
              <option>Jammu & kashmir</option>
              <option> Andhrapradesh</option>
              <option> Chhattisgarh</option>
              <option> Gujarat</option>
              <option> Haryana</option>
              <option> Himachal Pradesh</option>
              <option>Meghalaya</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Select defaultValue="Choose...">
              <option>440006</option>
              <option>440022</option>
              <option>440066</option>
              <option>440096</option>
              <option>440026</option>
              <option>440016</option>
              <option>440046</option>
            </Form.Select>
          </Form.Group>
        </Row>
        <div className="col">
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default AddmisionForm;
