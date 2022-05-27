import React from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from 'react-intl';
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";
import houseList from "./components/houseList.js";

const getLocale = () => {
    return navigator.language || navigator.userLanguage;
}

getLocale();

ReactDOM.render(
    <IntlProvider locale={getLocale()} messages={getLocale() === "es-ES" ? localeEsMessages : localeEnMessages}>
        <houseList/>
    </IntlProvider>, document.getElementById("root")
);