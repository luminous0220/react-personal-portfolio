import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const clearFields = (e) => {
    e.preventDefault()
    setEmail("");
  };

  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3>
              订阅Newsletter，不会错过最新的消息更新哦！！！
            </h3>
          </Col>
          <Col md={6} xl={7}>
            <form onSubmit={clearFields}>
              <div className="new-email-bx">
                <input
                  value={email}
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                />
                <button type="submit">提交</button>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </Col>
  );
};

export default Newsletter;
