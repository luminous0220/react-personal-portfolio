import { Col } from "react-bootstrap";

const ProjectCard = ({ title, desc, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="card-wrap">
        <img src={imgUrl} />
        <div className="text">
          <h4>{title}</h4>
          <span>{desc}</span>
        </div>
      </div>
    </Col>
  );
};

export default ProjectCard;
