import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";

const Project = () => {
  const projectList = [
    {
      title: "商业启动",
      desc: "设计和开发",
      imgUrl: projImg1,
    },
    {
      title: "商业启动",
      desc: "设计和开发",
      imgUrl: projImg2,
    },
    {
      title: "商业启动",
      desc: "设计和开发",
      imgUrl: projImg3,
    },
    {
      title: "商业启动",
      desc: "设计和开发",
      imgUrl: projImg1,
    },
    {
      title: "商业启动",
      desc: "设计和开发",
      imgUrl: projImg2,
    },
    {
      title: "商业启动",
      desc: "设计和开发",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project py-80px mx-0 bg-#000000! relative">
      <Container>
        <Row>
          <Col size={12}>
            <div>
              <h2 className="text-45px font-700 text-center">项目介绍</h2>
              <p className="text-#B8B8B8 text-18px tracking-[0.8px] leading-1.5em mt-14px mb-30px mx-auto text-center w-56%">
                React是一个由Facebook开发的用于构建用户界面的开源JavaScript库。它主要用于创建单页应用程序（SPA），能够高效地更新和渲染用户界面
              </p>
              <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav
                  variant="pills"
                  className="flex-center w-72% my-0 mx-auto rounded-50px bg-[rgba(255,255,255,0.1)] overflow-hidden mb-30px!"
                >
                  <Nav.Item>
                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Tab 3</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <Row>
                      {projectList.map((item, index) => {
                        return <ProjectCard key={index} {...item} />;
                      })}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    Vite 提供了一套原生ESM的HMR API。
                    具有HMR功能的框架可以利用该API提供即时、准确的更新，而无需重新加载页面或清除应用程序状态。Vite
                    内置了HMR到Vue.js单文件组件（SFC）和React Fast Refresh 中
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    webpack 是代码编译工具，有入口、出口、loader 和插件。webpack
                    是一个用于现代 JavaScript 应用程序的静态模块打包工具。当
                    webpack 处理应用程序时，它会在内部构建一个依赖图(dependency
                    graph)，此依赖图对应映射到项目所需的每个模块，并生成一个或多个
                    bundle
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};

export default Project;
