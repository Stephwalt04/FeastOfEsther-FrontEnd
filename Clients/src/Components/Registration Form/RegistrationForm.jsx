import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./RegistrationForm.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import axios from "axios";

const countries = [
  "USA",
  "Canada",
  "Australia",
  "United Kingdom",
  "Germany",
  "France",
  "Japan",
  "China",
  "India",
  "Brazil",
  "Europe",
  "England",
  "South Korea",
  "Taiwan",
  "Vietnam",
  "Thailand",
  "Philippines",
  "Indonesia",
  "Malaysia",
  "Singapore",
  "Hong Kong",
  "Russia",
  "Mexico",
  "South Africa",
  "Nigeria",
  "Other",
];
const tshirt = ["S", "M", "L", "XL", "XXL", "XXXL", "XXXXL", "XXXXXL"];
const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phonenumber: "",
    streetaddress: "",
    apartment: "",
    city: "",
    zippostalcode: "",
    country: "",
    nameofchurch: "",
    positioninminstry: "",
    titleofoffice: "",
    husbandname: "",
    tshirtsize: "",
    eventId: "",
  });

  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const handleButtonClick = () => {
    setIsButtonClicked(!isButtonClicked);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    registerUser(formData);
    setFormData({
      firstname: "",
      lastname: "",
      email: "",
      phonenumber: "",
      streetaddress: "",
      apartment: "",
      city: "",
      zippostalcode: "",
      country: "",
      nameofchurch: "",
      positioninminstry: "",
      titleofoffice: "",
      husbandname: "",
      tshirtSize: "",
      eventId: "",
    });
  };

  const registerUser = async (formData) => {
    try {
      let res = await axios.post(
        "https://nodejs.feastofestherna.com/api/v1/create-registartation",
        formData
      );
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="registration-form-container form">
      <h2 className="text-center" color="pink">
        Registration Form
      </h2>

      <Container className="mt-4 text pb-5">
        <Form
          onSubmit={handleSubmit}
          method="post"
          className="text-white"
          target="_blank"
        >
          <Row>
            <Col sm={12} md={6}>
              <Form.Group controlId="formfirstname" className="pick">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  style={{ width: "100%" }}
                  name="firstname"
                  value={formData.firstname}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col sm={12} md={6} className="pick">
              <Form.Group controlId="formlastname">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  name="lastname"
                  style={{ width: "100%" }}
                  value={formData.lastname}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col sm={12} md={6} className="pick">
              <Form.Group controlId="formemail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  style={{ width: "100%" }}
                  value={formData.email}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col sm={12} md={6} className="pick">
              <Form.Group controlId="formphonenumber">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="text"
                  name="phonenumber"
                  style={{ width: "100%" }}
                  value={formData.phonenumber}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={6} className="pick">
              <Form.Group controlId="formaddress">
                <Form.Label>Street Address</Form.Label>
                <Form.Control
                  type="text"
                  name="streetaddress"
                  style={{ width: "100%" }}
                  value={formData.streetaddress}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col sm={12} md={6} className="pick">
              <Form.Group controlId="formapartment">
                <Form.Label>Apartment</Form.Label>
                <Form.Control
                  type="text"
                  name="apartment"
                  style={{ width: "100%" }}
                  value={formData.apartment}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col sm={12} md={6} className="pick">
              <Form.Group controlId="formcity">
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  name="city"
                  style={{ width: "100%" }}
                  value={formData.city}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col sm={12} md={6} className="pick">
              <Form.Group controlId="formzipcode">
                <Form.Label>ZIP/Postal Code</Form.Label>
                <Form.Control
                  type="text"
                  name="zippostalcode"
                  style={{ width: "100%" }}
                  value={formData.zippostalcode}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col sm={12} md={6} className="pick">
              <Form.Group controlId="formcountry">
                <Form.Label>Country</Form.Label>
                <Form.Control
                  as="select"
                  style={{ width: "100%" }}
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                >
                  <option>Select Country</option>
                  {countries.map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Col>
            <Col sm={12} md={6} className="pick">
              <Form.Group controlId="formchurchname">
                <Form.Label>Name of Church</Form.Label>
                <Form.Control
                  type="text"
                  name="nameofchurch"
                  style={{ width: "100%" }}
                  value={formData.nameofchurch}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col sm={12} md={6} className="pick">
              <Form.Group controlId="formministryposition">
                <Form.Label>Position in Ministry</Form.Label>
                <Form.Control
                  type="text"
                  name="positioninminstry"
                  style={{ width: "100%" }}
                  value={formData.positioninminstry}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col sm={12} md={6} className="pick">
              <Form.Group controlId="formofficetitle">
                <Form.Label>Title of Office</Form.Label>
                <Form.Control
                  type="text"
                  name="titleofoffice"
                  style={{ width: "100%" }}
                  value={formData.titleofoffice}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={6} className="pick">
              <Form.Group controlId="formHusbandname">
                <Form.Label>Husband's Name</Form.Label>
                <Form.Control
                  type="text"
                  name="husbandname"
                  style={{ width: "100%" }}
                  value={formData.husbandname}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>

            <Col sm={12} md={6} className="pick">
              <Form.Group controlId="formtshirtsize">
                <Form.Label>T-Shirt Size</Form.Label>
                <Form.Control
                  as="select"
                  style={{ width: "100%" }}
                  name="tshirtsize"
                  value={formData.tshirtsize}
                  onChange={handleChange}
                >
                  <option>Select TShirt size</option>
                  {tshirt.map((tshirtsize, index) => (
                    <option key={index} value={tshirtsize}>
                      {tshirtsize}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Col>
            <Col sm={12} md={6} className="pick">
              <Form.Group controlId="eventId">
                <Form.Label>Event Id</Form.Label>
                <Form.Control
                  type="text"
                  name="eventId"
                  style={{ width: "100%" }}
                  value={formData.eventId}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>
          <Button
            type="submit"
            className="btn"
            onClick={handleButtonClick}
            style={{
              color: isButtonClicked
                ? "rgb(209, 33, 153)"
                : " rgb(255, 253, 255)",
              backgroundColor: isButtonClicked
                ? "rgb(255, 253, 255)"
                : "rgb(209, 33, 153)",
              ":hover": {
                backgroundColor: "white",
                color: "rgb(240, 96, 223)",
              },
              transition: "background-color 0.3s ease, color 0.3s ease",
            }}
          >
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default RegistrationForm;
