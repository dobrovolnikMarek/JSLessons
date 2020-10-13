// const moduleOne = require("./moduleOne");
//const moduleTwo = require("./moduleTwo");

// moduleOne();
//moduleTwo();

import {one , two} from "./moduleOne";
import * as obj from "./moduleOne";

console.log(one, two);
console.log(obj);

import moduleTwo from "./moduleTwo";
moduleTwo();