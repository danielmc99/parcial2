import React from "react";
import { FormattedDate } from 'react-intl';
import { FormattedPlural } from 'react-intl';
import { FormattedNumber } from 'react-intl';
import { FormattedMessage } from 'react-intl';

const House = (props) => {
  return (
    <tr>
      <td>{props.offer.name}</td>
      <td>{props.offer.address}</td>
      <td>{props.offer.address}</td>
      <td>{props.offer.phone}</td>
      <td>{props.offer.type}</td>
      <th scope="row">{props.offer.id}</th>
    </tr>
  );
};

export default House;
