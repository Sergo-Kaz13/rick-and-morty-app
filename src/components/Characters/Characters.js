import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getCharacters, setCurrentPage } from "../../redux/charactersReducer";
import { Container } from "./../Container/Container";
import style from "./Characters.module.css";
import PaginatedItems from "../PaginatedItems/PaginatedItems";

const Characters = (props) => {
  const { info, characters, currentPage, getCharacters, setCurrentPage } =
    props;

  const { pages } = info;

  useEffect(() => {
    getCharacters(currentPage);
  }, [getCharacters, currentPage]);

  const charactersItems = characters.map((character) => {
    const {
      id,
      name,
      gender,
      image,
      species,
      status,
      location: { name: locName },
    } = character;

    return (
      <div key={id} className={style.character}>
        <div>
          <img className={style.characterIcon} src={image} alt={name} />
        </div>
        <div className={style.characterInfo}>
          <h2 className={style.characterName}>{name}</h2>
          <ul>
            <li className={style.characterInfoItem}>
              Status: <span>{status}</span>
            </li>
            <li className={style.characterInfoItem}>
              Gender: <span>{gender}</span>
            </li>
            <li className={style.characterInfoItem}>
              Species: <span>{species}</span>
            </li>
            <li className={style.characterInfoItem}>
              Location: <span>{locName}</span>
            </li>
          </ul>
        </div>
      </div>
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
