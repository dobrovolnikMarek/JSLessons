"use strict";
import "@babel/polyfill";
import "nodelist-foreach-polyfill";
import elementClosest from "element-closest";
elementClosest(window);
import formdataPolyfill from "formdata-polyfill";
formdataPolyfill(window);
import esPromise from "es6-promise";
esPromise(window);
import fetchPolyfill from "fetch-polyfill";
fetchPolyfill(window);
import countTimer from "./modules/countTimer";
import toggleMenu from "./modules/toggleMenu";
import togglePopup from "./modules/togglePopup";
import tabs from "./modules/tabs";
import slider from "./modules/slider";
import imgChange from "./modules/imgChange";
import calc from "./modules/calc";
import sendForm from "./modules/sendForm";

//Timer
countTimer("07 october 2020");
//Menu
toggleMenu();
//popup
togglePopup();
//tabs
tabs();
//slider
slider();
//data-img
imgChange();
//calc
calc(100);
//send-ajax-form
sendForm();