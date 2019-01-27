import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const PoetsListItem = ({ id, name, placeOfBirth }) => (
  <tr>
    <td><Link to={`/Poets/${id}`}>{id}</Link></td>
    <td><Link to={`/Poets/${id}`}>{name}</Link></td>
    <td><Link to={`/Poets/${id}`}>{placeOfBirth}</Link></td>
  </tr>
);

PoetsListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeOfBirth: PropTypes.string.isRequired,
};

export default PoetsListItem;
