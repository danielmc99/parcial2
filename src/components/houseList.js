import React, { useState } from "react";
import House from "./house";
import { FormattedMessage } from 'react-intl';

const JobsList = () => {
  const [offers] = useState([
    {
      "name": "Casa Bogotá",
      "address": "Calle 12 No. 7-25",
      "phone": "3104916478",
      "type": "house",
      "isActive": true,
      "id": "H001"
    },
    {
      "name": "Casa Zipaquirá",
      "address": "Carrera 133 No. 18-33",
      "phone": "3176503921",
      "type": "house",
      "isActive": true,
      "id": "H002"
    },
    {
      "name": "Apartamento Cartagena",
      "address": "Avenida Boyacá No. 117-11",
      "phone": "3082106599",
      "type": "loft",
      "isActive": true,
      "id": "A001"
    },
    {
      "name": "Apartamento Cali",
      "address": "Transversal 140 No. 101-23",
      "phone": "3001092520",
      "type": "loft",
      "isActive": false,
      "id": "A002"
    }
  ]);

  return (
    <div>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col"><FormattedMessage id="#"/></th>
            <th scope="col"><FormattedMessage id="Position"/></th>
            <th scope="col"><FormattedMessage id="Company"/></th>
            <th scope="col"><FormattedMessage id="Salary"/></th>
            <th scope="col"><FormattedMessage id="City"/></th>
            <th scope="col"><FormattedMessage id="PublicationDate"/></th>
            <th scope="col"><FormattedMessage id="Views"/></th>
          </tr>
        </thead>
        <tbody>
          {console.log("Offers", offers)}
          {offers.map((e, i) => (
            <House key={i} offer={e} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JobsList;
