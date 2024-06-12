import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";

const Skill = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill p-0! pb-50px relative mb-50px">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="bg-#151515 rounded-64px text-center py-60px px-50px mt-[-60px]">
              <h2 className="text-45px font-700">技能</h2>
              <p>
                渐进式 JavaScript 框架 易学易用，性能出色，适用场景丰富的 Web
                前端框架。<br/> 基于标准 HTML、CSS 和 JavaScript 构建
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5 className="mt-16px">Vue</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5 className="mt-16px">JavaScript</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5 className="mt-16px">React</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5 className="mt-16px">Node.js</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};

export default Skill;
