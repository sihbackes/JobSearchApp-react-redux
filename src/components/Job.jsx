import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addToFavoritesAction } from "../redux/actions";

const Job = ({ data }) => {
  const dispatch = useDispatch();

  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive((current) => !current);
  };

  return (
    <Row
      className="mx-0 mt-3 p-3"
      style={{ border: "1px solid #00000033", borderRadius: 4 }}
    >
      <Col xs={3}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={6}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
      <Col
        xs={3}
        className="heart-icon"
        onClick={() => {
          dispatch(addToFavoritesAction(data));
        }}
      >
        <AiFillHeart
          size={30}
          style={{
            color: isActive ? "red" : "",
          }}
          onClick={handleClick}
        />
      </Col>
    </Row>
  );
};

export default Job;
