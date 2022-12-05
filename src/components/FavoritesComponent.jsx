import { useSelector, useDispatch } from "react-redux";
import { Col, Row, Button } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import { removeFromFavoritesAction } from "../redux/actions";

const Favorites = () => {
  const favorites = useSelector((state) => state.favorite.content);
  const dispatch = useDispatch();

  return (
    <Row>
      <Col sm={12}>
        <ul style={{ listStyle: "none" }}>
          {favorites.map((element, i) => (
            <li key={i} className="my-4">
              <Button
                variant="danger"
                onClick={() => {
                  dispatch(removeFromFavoritesAction(i));
                }}
              >
                <FaTrash />
              </Button>
              <span className="element-job"> {element.company_name}</span>
              <span className="element-job"> {element.title}</span>
              <span>
                {" "}
                <a href={element.url} target="_blank" rel="noreferrer">
                  More Information
                </a>{" "}
              </span>
            </li>
          ))}
        </ul>
      </Col>
    </Row>
  );
};

export default Favorites;
