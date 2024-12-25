import React from "react";
import flyer from "../Images/FEASTOFESTHERIMAGES/Main2.jpg";
import "./Event.css";
import { Row, Col, Button, Container } from "react-bootstrap";
import flyer2 from "../Images/FEASTOFESTHERIMAGES/flyer.jpg";
import { Link } from "react-router-dom";

const Event = () => {
  return (
    <>
      <div>
        <div className="ame">
          <div className="hame">
            <img
              src={flyer}
              alt=""
              style={{ width: "100%", height: "400px", display: "block" }}
            />
          </div>
          <div className="code text-center ">
            <h4>FEAST OF ESTHER NA 2024 EVENT PROGRAM</h4>
            <p className="text-white ">
              {" "}
              <b>
                Exclusive forum for the first lady in the ministry & Christian
                Organisation
                <br />
                Please endeavour to fill your registration form. For further
                inquiries please use the contact information contained in the
                contact page.
              </b>
            </p>
          </div>
        </div>
        <Container fluid className="bg-light mt-3">
          <Row>
            <Col sm={12} md={6}>
              <img src={flyer2} alt="" className="img-fluid" />
            </Col>
            <Col sm={12} md={6} className="col">
              <h1>FEAST OF ESTHER NA 2024 PROGRAM</h1>
              <p>
                Theme: The Whole For The Whole Gospel Nation – Act. 20:20-21{" "}
                <br /> Date: 24th – 27th July, 2024
                <br /> Venue: Rosen Plaza Hotel Orlando: 9700 international Dr.
                Orlando, FL 32819
              </p>

              <Col
                sm={12}
                md={6}
                lg={4}
                className="d-flex justify-content-center col2"
              >
                <Button className="custom-button">
                  <Link to={"/registration"} className="reg">
                    Click To Register
                  </Link>
                </Button>
              </Col>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Event;
