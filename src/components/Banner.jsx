import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import { useState } from "react";
import { useEffect } from "react";

const Banner = () => {
  // 循环次数
  const [loopNum, setLoopNum] = useState(0);
  // isDeleting为true时表示字符增加、否则表示字符减少
  const [isDeleting, setIsDeleting] = useState(false);
  // 渲染文字的变量
  const [text, setText] = useState("");
  // delta用于控制字符更新时的速度
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  // 文字数组
  const toRotate = ["JavaScript", "Nest.js", "Vue And React"];
  // period是处于删除状态时的delta初始值
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  // 核心处理函数
  const tick = () => {
    // i是当前要显示文字的index
    let i = loopNum % toRotate.length;
    // 当前要渲染到页面的文字
    let fullText = toRotate[i];
    // 待更新的值
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    // 更新
    setText(updatedText);

    // 如果是删除状态
    if (isDeleting) {
      // 让字体更新的速度越来越快
      setDelta((prevDelta) => prevDelta / 2);
    }

    // 如果处于增加状态，当待更新的字符等于fullText时
    if (!isDeleting && updatedText === fullText) {
      // 状态改为删除
      setIsDeleting(true);
      // 重新设置Delta为2000
      setDelta(period);
    }
    // 如果处于文字增加状态，当待更新的字符为空时
    else if (isDeleting && updatedText === "") {
      // 状态改为增加
      setIsDeleting(false);
      // 循环次数+1
      setLoopNum(loopNum + 1);
      // 设置Delta为500，意思让状态为增加时的更新速度一直处于500
      setDelta(500);
    }
  };

  return (
    <section className="banner">
      <Container id="home">
        <Row className="flex ">
          <Col xs={10} md={6} xl={7}>
            <div className="tagline">您好，陌生人！欢迎来到我的主页</div>
            <h1 className="my-20px text-58px font-700 leading-[1] block tracking-[0.8px]">
              <span
                className="wrap"
                style={{ borderRight: "0.08em solid #666" }}
              >
                {text}
              </span>
            </h1>
            <p className="text-#B8B8B8 text-18px leading-[1.5em] tracking-[0.8px]">
              JavaScript（简称"JS"）是一种具有函数优先的轻量级，解释型或即时编译型的编程语言。虽然它是作为开发Web页面的脚本语言而出名，但是它也被用到了很多非浏览器环境中，JavaScript基于原型编程、多范式的动态脚本语言，并且支持面向对象、命令式、声明式、函数式编程范式。
            </p>
            <button onClick={() => console.log(123)}>
              联系我吧
              <ArrowRightCircle size="25" />
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header Img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
