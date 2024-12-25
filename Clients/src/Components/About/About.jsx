import React from "react";
import "./About.css";
import imag from "../Images/FEASTOFESTHERIMAGES/about.jpg";
import { Container, Row, Col } from "react-bootstrap";

function About() {
  return (
    <>
      <div>
        <div className="ome">
          <div className="home">
            <img
              src={imag}
              alt=""
              style={{ width: "100%", height: "600px", display: "block" }}
              className="img-fluid"
            />
          </div>
          <div className="center text-center ">
            <h1>About Us</h1>
            <p className="text-white ">
              {" "}
              <b>
                Feast of Esther is an annual Feast organized by the wife of the
                General Overseer of the Redeemed Christian Church of God Pastor
                (Mrs.) Folu Adeboye. 
              </b>
            </p>
          </div>
        </div>
        <div className="bg pt-5 pb-5">
          <Container>
            <Row className="row">
              <Col sm={12} md={6}>
                <div className="us mt-3">
                  <h3>About Us</h3>
                  <p>
                    Feast of Esther is an annual Feast organized by the wife of
                    the General Overseer of the Redeemed Christian church of God
                    Pastor (Mrs.) Folu Adeboye. It is a vision and a divine
                    assignment given by God.
                  </p>
                  <p>
                    {" "}
                    Feast of Esther is the gathering of women who are General
                    Overseers or heads of ministries and women who are wives of
                    General overseers/Prelates/Arch Bishops/Head of Ministries,
                    and Women Leaders of Ministries to interact for the purpose
                    of fellowship, prayer, renewal, growth and development and
                    to stand in gap for their churches, ministries and the
                    nation. The Feast is to be a time set aside by these women
                    to share experiences and learn from each other.
                  </p>
                  <p>
                    The first Feast of Esther was held in February 2002 and as
                    then become an annual event held at the Redemption Camp
                    Nigeria. Since then, it has been organized in other African
                    and European countries. The Feast of Esther currently holds
                    also in Nigeria Ghana, Cote D’Ivoire, Zambia, Kenya, Malawi,
                    Togo, Republic of Benin, South Africa, Cameron, United
                    Kingdom, Germany and Mainland Europe.
                  </p>
                </div>
              </Col>
              <Col sm={12} md={6}>
                <div className="us">
                  <h3>Our Vision</h3>
                  <p>
                    To develop excellent Ministry Skills in women who are called
                    to support and impact the church of God for nation building
                    and stand as pillars in the house of God to accomplish great
                    things for the kingdom.
                  </p>
                  <h3>Our Mission</h3>
                  <p>
                    A forum where female General Overseers/Bishops or wives of
                    General Overseers/Bishops, Head of Ministries,and Women
                    Leaders of Ministries learn to:
                  </p>
                  <p>1.Accomplish their goal and calling in ministry.</p>
                  <p>
                    2.Stand in gap for their churches, ministries and nation.
                  </p>
                  <p>3.Interact and share fellowship.</p>
                  <p>
                    4. Impact the church maximally to effect revival in the
                    nation.
                  </p>
                  <p>5.Ensure that as many people as possible make heaven</p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default About;
