import React, { useEffect } from "react";
import style from "./Location.module.css";
import { getLocations, setCurrentPage } from "../../redux/locationsReducer";
import { connect } from "react-redux";
import { Container } from "../Container/Container";
import PaginatedItems from "../PaginatedItems/PaginatedItems";
import { Link } from "react-router-dom";

const Location = (props) => {
  const {
    getLocations,
    setCurrentPage,
    currentPage,
    locationsData: { info, results = [] },
  } = props;

  useEffect(() => {
    getLocations(currentPage);
  }, [getLocations, currentPage]);

  const locationsItem =
    results &&
    results.map((location) => {
      const { id, name, type, residents, dimension } = location;
      return (
        <Link className={style.locationItem} key={id} to={`/location/${id}`}>
          <h2 className={style.locationName}>{name}</h2>
          <ul className={style.locationInfo}>
            <li>
              type: <span>{type}</span>
            </li>
            <li>
              residents: <span>{residents.length}</span>
            </li>
            <li>
              dimension: <span>{dimension}</span>
            </li>
          </ul>
        </Link>
      );
    });

  return (
    <Container>
      <div className={style.location}>{locationsItem}</div>
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
  locationsData: state.locationsReducer.locationsData,
  currentPage: state.locationsReducer.currentPage,
});

export default connect(mapStateToProps, { getLocations, setCurrentPage })(
  Location
);
