import { useState } from "react";
import { InputGroup, Container, Row, Col, Form } from "react-bootstrap";

export default function SignUp() {
  const [selectedOption, setSelectedOption] = useState("Option 1");
  const [reasonForContact, setReasonForContact] = useState("");

  return (
    <section id="subscribe" className="subscribes mt-5 py-5">
      <Container>
        <Row className="justify-content-center align-items-center py-5 ">
          <Col md={6}>
            <div className="mb-3 mt-4">
              <h1 className="mb-5 text-center subscribe-h1 ">
                What can we do for you?
              </h1>
              <h3 className="mb-5 text-center subscribe-h3">
                We are ready to work on a project of any complexity, whether
                it’s commercial or residential.
              </h3>
              <Form className="mx-auto">
                <Row className="mb-3">
                  <Col className="mb-3">
                    <Form.Control
                      className="rounded-0"
                      type="text"
                      placeholder="Your full name"
                    />
                  </Col>

                  <Col className="mb-3">
                    <Form.Control
                      className="rounded-0"
                      placeholder="Phone Number"
                      required
                    />
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col className="mb-3">
                    <InputGroup>
                      <Form.Select
                        className="rounded-0"
                        onChange={(event) =>
                          setSelectedOption(event.target.value)
                        }
                        value={selectedOption}
                      >
                        <option value="Option 1">Reason for Contacting*</option>
                        <option value="Option 2">Option 2</option>
                        <option value="Option 3">Option 3</option>
                      </Form.Select>
                    </InputGroup>
                  </Col>

                  <Col className="mb-3">
                    <Form.Control
                      className="rounded-0"
                      type="email"
                      placeholder="Email"
                    />
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col className="mb-3">
                    <Form.Control
                      className="rounded-0"
                      as="textarea"
                      rows={5}
                      placeholder="Message"
                      value={reasonForContact}
                      onChange={(event) =>
                        setReasonForContact(event.target.value)
                      }
                    />
                  </Col>
                </Row>
                <div className="text-center">
                  <button
                    className="btn btn-primary rounded-0 px-5"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
