import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import contactImg from "../assets/img/contact-img.svg";
import { useState } from "react";

const Contact = () => {
  const formIniInfo = {
    name: "",
    age: "",
    email: "",
    phone: "",
    intro: "",
  };
  const [formInfo, setFormInfo] = useState(formIniInfo);
  const [buttonText, setButtonText] = useState("发送");
  const onFormUpdate = (pro, value) => {
    setFormInfo({
      ...formInfo,
      [pro]: value,
    });
  };

  const fetchApi = async () => {
    return new Promise((reslove) => {
      setTimeout(() => {
        reslove(true);
      }, 1000 );
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("发送中...");
    await fetchApi()
    alert('发送成功！')
    setButtonText("发送");
    setFormInfo(formIniInfo);
  };

  return (
    <section className="contact">
      <Container>
        <Row className="flex-center">
          <Col md={6}>
            <img className="w-92%" src={contactImg} alt="Contact Us" />
          </Col>
          <Col md={6}>
            <h2 className="text-45px! font-700 mb-30px">Get In Touch</h2>
            <form onSubmit={handleSubmit}>
              <Row>
                <Col md={6} className="px-1">
                  <input
                    type="text"
                    value={formInfo.name}
                    placeholder="姓名"
                    onChange={(e) => onFormUpdate("name", e.target.value)}
                  />
                </Col>
                <Col md={6} className="px-1">
                  <input
                    type="number"
                    value={formInfo.age}
                    placeholder="年龄"
                    onChange={(e) => onFormUpdate("age", e.target.value)}
                  />
                </Col>
                <Col md={6} className="px-1">
                  <input
                    type="text"
                    value={formInfo.email}
                    placeholder="邮箱"
                    onChange={(e) => onFormUpdate("email", e.target.value)}
                  />
                </Col>

                <Col md={6} className="px-1">
                  <input
                    type="number"
                    value={formInfo.phone}
                    placeholder="手机号"
                    onChange={(e) => onFormUpdate("phone", e.target.value)}
                  />
                </Col>
                <Col md={12} className="px-1">
                  <textarea
                    rows="6"
                    value={formInfo.intro}
                    placeholder="自我介绍"
                    onChange={(e) => onFormUpdate("intro", e.target.value)}
                  ></textarea>
                  <button type="submit">
                    <span>{buttonText}</span>
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
