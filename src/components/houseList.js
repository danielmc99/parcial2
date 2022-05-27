import React, { useState } from "react";
import House from "./house";
import { FormattedMessage } from 'react-intl';

const houseList = () => {
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
    <div className="container mt-4">
      <h1 ><center><FormattedMessage id="SmartHome" /></center> </h1>
      <h1><FormattedMessage id="MySpaces" /></h1>
      <Spaces />
    </div>
  );
};

export default houseList;
