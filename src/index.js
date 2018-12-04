// React
import React from "react";
import { render } from "react-dom";

// Components
import Router from "./components/Router";

// Styles
import '@fortawesome/fontawesome-free/css/all.css';
import "./scss/style.scss";


render(<Router />, document.querySelector("#main"));