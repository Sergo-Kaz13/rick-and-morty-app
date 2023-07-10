import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getCharacters, setCurrentPage } from "../../redux/charactersReducer";
import { Container } from "./../Container/Container";
import style from "./Characters.module.css";
import PaginatedItems from "../PaginatedItems/PaginatedItems";
import { Link } from "react-router-dom";

const Characters = (props) => {
  const { info, characters, currentPage, getCharacters, setCurrentPage } =
    props;

  const { pages } = info;

  useEffect(() => {
    getCharacters(currentPage);
  }, [getCharacters, currentPage]);

  const charactersItems = characters.map((character) => {
    const { id, name, gender, image, status } = character;

    const statusStyle =
      status === "Alive" ? "alive" : status === "Dead" ? "dead" : "unknown";

    return (
      <Link key={id} to={`/${id}`} className={style.character}>
        <div>
          <img className={style.characterIcon} src={image} alt={name} />
        </div>
        <div className={style.characterInfo}>
          <h2 className={style.characterName}>{name}</h2>
          <ul>
            <li className={style.characterInfoItem}>
              Status: <span className={style[statusStyle]}>{status}</span>
            </li>
            <li className={style.characterInfoItem}>
              Gender: <span>{gender}</span>
            </li>
          </ul>
        </div>
      </Link>
    );
  });

  return (
    <Container>
      <div className={style.characters}>
        {props.characters.length === 0 ? "Hello lol" : charactersItems}
      </div>
      <PaginatedItems
        itemsPerPage={1}
        items={pages}
        setCurrentPage={setCurrentPage}
      />
    </Container>
  );
};
const mapStateToProps = (state) => ({
  characters: state.charactersReducer.characters,
  character: state.charactersReducer.character,
  info: state.charactersReducer.info,
  currentPage: state.charactersReducer.currentPage,
  pages: state.charactersReducer.pages,
});

// const mapDispatchToProps = (dispatch) => ({
//   getCharacters: () => dispatch(getCharacters()),
// });
export default connect(mapStateToProps, {
  getCharacters,
  setCurrentPage,
})(Characters);
