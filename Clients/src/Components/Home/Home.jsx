import React from "react";
// import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Pix from "../Images/FEASTOFESTHERIMAGES/new.jpg";
import "./Home.css";
import { Container, Card, Row, Col } from "react-bootstrap";
import zip from "../Images/FEASTOFESTHERIMAGES/esther.JPG";
import mummy from "../Images/FEASTOFESTHERIMAGES/all.jpg";
import save from "../Images/FEASTOFESTHERIMAGES/save.jpg";
import pg from "../Images/FEASTOFESTHERIMAGES/homepage.jpg";

const Home = () => {
  return (
    <>
      <div className="ome">
        <div className="home">
          <img
            src={Pix}
            alt=""
            style={{ width: "100%", height: "600px", display: "block" }}
            className="img-fluid"
          />
        </div>
        <div className="enter text-center ">
          <h1 className="welcome">Welcome To Feast Of Esther</h1>
          <p className="text-black ">
            {" "}
            <b>...the kingdom for such is a time as this, Esther4:14b</b>
          </p>
        </div>
      </div>
      <div>
        <div className="bg">
          <Container className="pt-5 pb-5 save">
            <Row>
              <Col sm={12} md={4}>
                <Card className="shadow">
                  <img src={zip} alt="" />
                  <Card.Body>
                    <Card.Title className="title">About Us</Card.Title>
                    <Card.Text className="text">
                      Feast of Esther is an annual Feast organized by the wife
                      of the General Overseer of the Redeemed Christian church
                      of God Pastor (Mrs.) Folu Adeboye.
                      <br />
                      <div className="div">
                        <button type="button">
                          <a href="/about"> Read More {">"} </a>
                        </button>
                      </div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={12} md={4}>
                <Card className="shadow">
                  <img src={mummy} alt="" />
                  <Card.Body>
                    <Card.Title className="title">The Visioner</Card.Title>
                    <Card.Text className="text">
                      Pastor Mrs Folu Adeboye is the wife of the General
                      Overseer of the Redeemed Christian Church of God (RCCG)
                      Worldwide.
                      <div className="div">
                        <button type="button">
                          <a href="/founder"> Read More {">"} </a>
                        </button>
                      </div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={12} md={4}>
                <Card className="shadow">
                  <img src={save} alt="" />
                  <Card.Body>
                    <Card.Title className="title">
                      Feast Of Esther 2024
                    </Card.Title>
                    <Card.Text className="text">
                      Feast of Esther Annual Conefrence
                      <br />
                      Date: 24th – 27th July, 2024 Venue: Rosen Hotel, Orlando,
                      Florida,
                      <br />
                      Disney trip: Wednesday July 2024
                      <div className="div">
                        <button type="button">
                          <a href="/events"> Read More {">"} </a>
                        </button>
                      </div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="pg2">
          <div className="pg">
            <img
              src={pg}
              alt=""
              className="feast2"
              style={{ width: "100%", height: "600px", display: "block" }}
            />
          </div>
          <div className="cent text-center ">
            <h1 className="welcome">Our Vision</h1>
            <p className="text-white">
              {" "}
              <b>
                To develop excellent Ministry Skills in women who are called to
                support and impact the church of God for nation building and
                stand as pillars in the house of God to accomplish great things
                for the kingdom.
              </b>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
