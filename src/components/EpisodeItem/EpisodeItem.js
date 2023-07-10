import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
  getEpisodeSingle,
  getEpisodeCharacters,
} from "./../../redux/episodeItemReducer";
import style from "./EpisodeItem.module.css";
import { Container } from "../Container/Container";

const EpisodeItem = (props) => {
  const { getEpisodeSingle, getEpisodeCharacters, characters } = props;
  const {
    name,
    air_date,
    episode,
    characters: charactersData,
  } = props.episodeItem;

  let charactersEpisode =
    charactersData &&
    charactersData.map((character) => {
      return character.split("/").pop();
    });

  charactersEpisode = charactersEpisode && charactersEpisode.join();

  const { id } = useParams();
  useEffect(() => {
    getEpisodeSingle(id);
    charactersEpisode && getEpisodeCharacters(charactersEpisode);
  }, [getEpisodeSingle, id, getEpisodeCharacters, charactersEpisode]);

  const charactersEpisodeItems = characters.map(({ image, name, id }) => {
    return (
      <Link key={id} to={`/${id}`}>
        <img src={image} alt={name} />
      </Link>
    );
  });

  return (
    <Container>
      <div>
        <ul className={style.episodeInfo}>
          <li className={style.episodeName}>{name}</li>
          <li>{episode}</li>
          <li>{air_date}</li>
        </ul>
        <h5 className={style.charactersBlockTitle}>Characters:</h5>
        <div className={style.episodeCharacters}>{charactersEpisodeItems}</div>
      </div>
    </Container>
  );
};
const mapStateToProps = (state) => ({
  episodeItem: state.episodeItemReducer.episodeItem,
  characters: state.episodeItemReducer.characters,
});

export default connect(mapStateToProps, {
  getEpisodeSingle: getEpisodeSingle,
  getEpisodeCharacters,
})(EpisodeItem);
