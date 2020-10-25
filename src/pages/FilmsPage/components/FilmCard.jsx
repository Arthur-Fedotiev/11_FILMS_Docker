import React, {memo, useContext} from "react";
import PropTypes from "prop-types";
import Featured from "components/Featured";
import FilmCardButtons from "pages/FilmsPage/components/FilmCardButtons";
import {useUser} from "contexts/UserContext";

const FilmCard = ({film}) => {
  const [user] = useUser();

  const actionUser = (
    <div className="extra content">
      <span className="ui green basic button">Films</span>
    </div>
  );

  return (
    <div className="ui card">
      <Featured featured={film.featured} id={film._id} />
      <div className="image">
        <span className="ui green label ribbon">$ {film.price} </span>
        <img src={film.img} alt="" />
      </div>

      <div className="content">
        <span className="header">{film.title}</span>
        <div className="meta">
          <i className="icon users"></i> {film.director}
          <span className="right floated">
            <i className="icon wait right"></i> {film.duration} min
          </span>
        </div>
      </div>
      {user.token && user.role === "admin" && <FilmCardButtons film={film} />}
      {user.token && user.role === "user" && actionUser}
    </div>
  );
};

FilmCard.propTypes = {
  film: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    featured: PropTypes.bool.isRequired,
  }).isRequired,
};

FilmCard.defaultProps = {
  film: {},
};

export default memo(FilmCard);
