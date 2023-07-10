import React, { useEffect } from "react";
import style from "./Character.module.css";
import { Link, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { getCharacter, getEpisodes } from "./../../redux/characterReducer";
import { Container } from "../Container/Container";
import { useState } from "react";

const Character = (props) => {
  const { getCharacter, getEpisodes } = props;
  const {
    gender,
    image,
    name,
    species,
    status,
    location: { name: locationName, url } = {},
    origin: { name: originName } = {},
    episode,
  } = props.character;

  const urlLocation = url && url.split("/").pop();

  let episodeCharacters =
    episode &&
    episode.map((episode) => {
      return episode.split("/").pop();
    });

  episodeCharacters = episodeCharacters && episodeCharacters.join();

  const { id } = useParams();
  useEffect(() => {
    getCharacter(id);
    getEpisodes(episodeCharacters);
  }, [id, getCharacter, getEpisodes, episodeCharacters]);

  const [showListEpisodes, setShowListEpisodes] = useState(false);

  const toogleBtnEpisode = () => {
    setShowListEpisodes((showListEpisodes) => !showListEpisodes);
  };

  const episodesInfo =
    props.episodes &&
    props.episodes.map(({ episode, id }) => {
      return (
        <li key={id}>
          <Link to={`/episode/${id}`}>{episode}</Link>
        </li>
      );
    });

  const statusStyle =
    status === "Alive" ? "alive" : status === "Dead" ? "dead" : "unknown";

  return (
    <Container>
      <div className={style.characterBlockInfo}>
        <div className={style.characterIcon}>
          <img src={image} alt="icon name" />
        </div>
        <div className={style.characterInfo}>
          <h2 className={style.characterName}>{name}</h2>
          <ul className={style.characterInfo}>
            <li>
              status: <span className={style[statusStyle]}>{status}</span>
            </li>
            <li>
              gender: <span>{gender}</span>
            </li>
            <li>
              species: <span>{species}</span>
            </li>
            <li>
              origin: <span>{originName}</span>
            </li>
            <li>
              location:{" "}
              <Link to={`/location/${urlLocation}`}>{locationName}</Link>
            </li>
          </ul>
          <button onClick={toogleBtnEpisode} className={style.btnShowEpisode}>
            Episode: {episode && episode.length}{" "}
            <span
              className={`${style.btnShowEpisodeArrow} ${
                showListEpisodes && style.showListActive
              }`}
            >
              ▶
            </span>
          </button>

          <ul
            className={`${style.episodesList} ${
              showListEpisodes && style.showEpisodes
            }`}
          >
            {episodesInfo}
          </ul>
        </div>
      </div>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  character: state.characterReducer.character,
  episodes: state.characterReducer.episodes,
});

export default connect(mapStateToProps, { getCharacter, getEpisodes })(
  Character
);
