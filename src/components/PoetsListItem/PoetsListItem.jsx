import React from 'react';
import { Link } from 'react-router-dom';

const PoetsListItem = ({ id, name, placeOfBirth }) => (
  <tr>
    <td><Link to={`/Poets/${id}`}>{id}</Link></td>
    <td><Link to={`/Poets/${id}`}>{name}</Link></td>
    <td><Link to={`/Poets/${id}`}>{placeOfBirth}</Link></td>
  </tr>
);

export default PoetsListItem;