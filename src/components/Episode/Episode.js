import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getEpisodes, setCurrentPage } from "../../redux/episodesReducer";
import style from "./Episode.module.css";
import { Container } from "../Container/Container";
import PaginatedItems from "../PaginatedItems/PaginatedItems";
import { Link } from "react-router-dom";

const Episodes = (props) => {
  const {
    getEpisodes,
    setCurrentPage,
    currentPage,
    episodes: { info, results = [] },
  } = props;

  useEffect(() => {
    getEpisodes(currentPage);
  }, [getEpisodes, currentPage]);

  const episodesItem =
    results &&
    results.map((ep) => {
      const { id, name, air_date, episode, characters } = ep;
      return (
        <Link className={style.episodeItem} key={id} to={`/episode/${id}`}>
          <h2 className={style.episodeName}>{name}</h2>
          <ul className={style.episodeInfo}>
            <li>
              episode: <span>{episode}</span>
            </li>
            <li>
              character: <span>{characters.length}</span>
            </li>
            <li>
              date: <span>{air_date}</span>
            </li>
          </ul>
        </Link>
      );
    });

  return (
    <Container>
      <div className={style.episode}>{episodesItem}</div>
      {info && (
        <PaginatedItems
          itemsPerPage={1}
          items={info.pages}
          setCurrentPage={setCurrentPage}
        />
      )}
    </Container>
  );
};

const mapStateToProps = (state) => ({
  episodes: state.episodesReducer.episodesData,
  currentPage: state.episodesReducer.currentPage,
});

export default connect(mapStateToProps, {
  getEpisodes,
  setCurrentPage,
})(Episodes);
