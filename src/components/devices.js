import React, { useState } from "react";
import { FormattedMessage } from 'react-intl';

const roomsList = () => {
  const [offers] = useState([
    {
      "name": "Living room",
      "homeId": "H001",
      "devices": [
        {
          "name": "temperature",
          "desired": { "value": "26", "unit": "C" },
          "id": "T01"
        },
        {
          "name": "light01",
          "id": "L01",
          "desired": { "value": "off", "unit": "boolean" }
        }
      ],
      "type": "room",
      "powerUsage": { "unit": "KwH", "value": 0.2 }
    },
    {
      "name": "Kitchen",
      "homeId": "H001",
      "devices": [
        {
          "name": "temperature",
          "desired": { "value": "20", "unit": "C" },
          "id": "T01"
        },
        {
          "name": "light1",
          "id": "L01",
          "desired": { "value": "on", "unit": "boolean" }
        }
      ],
      "type": "kitcken",
      "powerUsage": { "unit": "KwH", "value": 0.4 }
    },
    {
      "name": "Dinner room",
      "homeId": "H001",
      "devices": [
        {
          "name": "temperature",
          "desired": { "value": "19", "unit": "C" },
          "id": "T01"
        },
        {
          "name": "light1",
          "id": "L01",
          "desired": { "value": "on", "unit": "boolean" }
        }
      ],
      "type": "room",
      "powerUsage": { "unit": "KwH", "value": 0.1 }
    },
    {
      "name": "Living room",
      "homeId": "H002",
      "devices": [
        {
          "name": "temperature",
          "desired": { "value": "22", "unit": "C" },
          "id": "T01"
        },
        {
          "name": "light01",
          "id": "L01",
          "desired": { "value": "on", "unit": "boolean" }
        }
      ],
      "type": "room",
      "powerUsage": { "unit": "KwH", "value": 0.5 }
    },
    {
      "name": "Kitchen",
      "homeId": "H002",
      "devices": [
        {
          "name": "temperature",
          "desired": { "value": "15", "unit": "C" },
          "id": "T04"
        },
        {
          "name": "light1",
          "id": "L05",
          "desired": { "value": "off", "unit": "boolean" }
        },
        {
          "name": "door",
          "desired": { "value": "open", "unit": "boolean" }
        }
      ],
      "type": "kitcken",
      "powerUsage": { "unit": "KwH", "value": 0.6 }
    },
    {
      "name": "Living room",
      "homeId": "A001",
      "devices": [
        {
          "name": "temperature",
          "desired": { "value": "24", "unit": "C" },
          "id": "T01"
        },
        {
          "name": "light01",
          "id": "L01",
          "desired": { "value": "on", "unit": "boolean" }
        },
        {
          "name": "humidity",
          "id": "HU01",
          "desired": { "value": "70", "unit": "g/m3" }
        }
      ],
      "type": "room",
      "powerUsage": { "unit": "KwH", "value": 1.2 }
    },
    {
      "name": "Kitchen",
      "homeId": "A001",
      "devices": [
        {
          "name": "temperature",
          "desired": { "value": "20", "unit": "C" },
          "id": "T06"
        },
        {
          "name": "light1",
          "id": "L05",
          "desired": { "value": "off", "unit": "boolean" }
        },
        {
          "name": "door",
          "desired": { "value": "open", "unit": "boolean" },
          "id": "D01"
        },
        {
          "name": "Gas",
          "desired": { "value": false, "unit": "boolean" },
          "id": "G02"
        }
      ],
      "type": "kitcken",
      "powerUsage": { "unit": "KwH", "value": 0.5 }
    },
    {
      "name": "Kitchen",
      "homeId": "A002",
      "devices": [
        {
          "name": "temperature",
          "desired": { "value": "18", "unit": "C" },
          "id": "T09"
        },
        {
          "name": "light1",
          "id": "L05",
          "desired": { "value": "on", "unit": "boolean" }
        },
        {
          "name": "Gas",
          "desired": { "value": false, "unit": "boolean" },
          "id": "G01"
        }
      ],
      "type": "kitcken",
      "powerUsage": { "unit": "KwH", "value": 0.8 }
    },
    {
      "name": "Dinner room",
      "homeId": "A002",
      "devices": [
        {
          "name": "temperature",
          "desired": { "value": "21", "unit": "C" },
          "id": "T01"
        },
        {
          "name": "light1",
          "id": "L07",
          "desired": { "value": "on", "unit": "boolean" }
        }
      ],
      "type": "room",
      "powerUsage": { "unit": "KwH", "value": 0.5 }
    }
  ]);

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col"><FormattedMessage id="Name" /></th>
          <th scope="col"><FormattedMessage id="Devices" /></th>
          <th scope="col"><FormattedMessage id="Value" /></th>
        </tr>
      </thead>
      <tbody>
        
      </tbody>
    </table>
  );
};

export default roomsList;
