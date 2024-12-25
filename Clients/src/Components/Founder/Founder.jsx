import React from "react";
import { Container, Row, Col, Card, CardBody, CardText } from "react-bootstrap";
import "./Founder.css";
import feast2 from "../Images/FEASTOFESTHERIMAGES/Main.jpg";
import angels from "../Images/FEASTOFESTHERIMAGES/angels.jpg";
import mummy from "../Images/FEASTOFESTHERIMAGES/mummy.jpg";

const Founder = () => {
  return (
    <>
      <div>
        <div className="ome">
          <div className="Home">
            <img className="d-block w-100" src={feast2} alt="First slide" />
          </div>
          <div className="center text-center ">
            <h2> PASTOR MRS. FOLU ADEBOYE </h2>
            <p className="text-white ">
              {" "}
              <p>
                Pastor Mrs Folu Adeboye is the wife of the General Overseer of
                the Redeemed Christian Church of God (RCCG) Worldwide.
              </p>
            </p>
          </div>
        </div>
        <div className="mt-5 mb-5">
          <Container>
            <Row>
              <Col sm={12} md={8}>
                <div style={{ padding: "20px" }} className="founder">
                  <h1>The Founder</h1>
                  <p>
                    Pastor Mrs Folu Adeboye is the wife of the General Overseer
                    of the Redeemed Christian Church of God (RCCG) Worldwide.
                    She’s a Mother, a mentor, a teacher and a woman in the
                    ministry. Over the years she has been noted for efficiency,
                    effectiveness, excellency and balancing of roles.
                  </p>
                  <p>
                    In 1981, Pastor Mrs. Adeboye took up the Children Sunday
                    School with a few teachers. And she wrote the Sunday school
                    manual now know as zeal from 1981-1999. Presently, Teachers’
                    Conferences are hosted annually to give teachers induction
                    course, charge them for the task ahead is waxing stronger
                    and growing higher on a daily basis.
                  </p>
                  <p>
                    In 1981, Pastor E. A. Adeboye set the pace for the
                    establishment of the formal educational arm of CRM. Mummy
                    G.O. armed with her 15 years teaching experience took up the
                    challenge. Today, there are over fifty-eight (58)
                    nursery/primary schools in twenty-three states in Nigeria,
                    over six RCCG Secondary schools, one science academy, and
                    the Redeemers University for Nations (RUN). Pastor (Mrs.)
                    Folu Adeboye is the Vice President of CRM, Education under
                    whose leadership the school of Disciple falls.
                  </p>
                </div>
              </Col>
              <Col sm={12} md={4}>
                <div style={{ padding: "20px" }}>
                  <img src={angels} alt="" className="angels" />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="fluid">
          <Container>
            <div>
              <div className="mummy ">
                <img src={mummy} alt="" />
              </div>

              <div className="container pb-2">
                <Row className="mt-4  mb-5 mc">
                  <Col sm={12} md={4} className="mb-4">
                    <Card>
                      <CardBody>
                        <CardText>
                          <p>
                            The school is well spread in all states of Nigeria
                            and has spread to many countries of the world
                            especially along West Africa, Europe, UK and
                            Ireland, Hong Kong and North America to mention a
                            few.
                          </p>
                          <p>
                            Mummy GO is in charge of Women Affairs. She hosts
                            the annual Women in Ministry program for all female
                            ministers in the RCCG all over the world. She’s the
                            President of a welfare ministry called certain women
                            in Nigeria.
                          </p>
                        </CardText>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col sm={12} md={4} className="mb-4">
                    <Card>
                      <CardBody>
                        <CardText>
                          <p>
                            Her heart of compassion drove her to establish some
                            mission outreaches. She established African missions
                            which seek to promote the spread of the gospel all
                            over the world; promote the development of
                            sustainable holistic programs all over the world;
                            and also to promote services that will improve the
                            quality of life of children, youth, and families all
                            over the world. Past Mrs Folu Adeboye is in charge
                            of Hospitality, Housekeeping and the Protocol Units
                            at the Redemption Camp in Nigeria.
                          </p>
                        </CardText>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col sm={12} md={4} className="mb-4">
                    <Card>
                      <CardBody>
                        <CardText>
                          <p>
                            She established the habitation of hope which is the
                            home for rehabilitation of boys taken off the
                            streets and to give them a future and a hope in
                            Christ. These children, who lived and slept on the
                            beach, were involved in petty armed robbery, sale
                            and use of drugs. In addition to the academic
                            education, the school also gives vocational training
                            in basket weaving, artwork, and music. Having
                            achieved all these for God, no wonder God gave her
                            the mandate to establish the Feast of Esther.
                          </p>
                        </CardText>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Founder;
