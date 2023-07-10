import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  getLocationSingle,
  getResidentLocation,
} from "../../redux/locationItemRedux";
import { Link, useParams } from "react-router-dom";
import { Container } from "../Container/Container";
import style from "./LocationItem.module.css";

const LocationItem = (props) => {
  const {
    getLocationSingle,
    getResidentLocation,
    residents: residentsItems,
    locationItem: { name, dimension, type, residents } = {},
  } = props;

  let residentsLocation =
    residents &&
    residents.map((resident) => {
      return resident.split("/").pop();
    });

  residentsLocation = residentsLocation && residentsLocation.join();

  const { id } = useParams();
  useEffect(() => {
    getLocationSingle(id);
    residentsLocation && getResidentLocation(residentsLocation);
  }, [getLocationSingle, id, getResidentLocation, residentsLocation]);

  const residentsLocationItems =
    residentsLocation &&
    residentsItems.map(({ image, name, id }) => {
      return (
        <Link key={id} to={`/${id}`}>
          <img src={image} alt={name} />
        </Link>
      );
    });

  const locationSingleItem = (
    <div>
      <h4 className={style.locationName}>{name}</h4>
      <ul className={style.locationInfo}>
        <li>
          dimension: <span>{dimension}</span>
        </li>
        <li>
          type: <span>{type}</span>
        </li>
      </ul>
      <div className={style.residentsLocation}>{residentsLocationItems}</div>
    </div>
  );

  return <Container>{locationSingleItem}</Container>;
};

const mapStateToProps = (state) => ({
  locationItem: state.locationItemReducer.locationItem,
  residents: state.locationItemReducer.residents,
});

export default connect(mapStateToProps, {
  getLocationSingle,
  getResidentLocation,
})(LocationItem);
