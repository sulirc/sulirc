import * as sample from "./sample";
import * as util from "./util";
import { compile, interpret } from "./interpret";

const debug = require("debug")("uglify");
const stringify = (o: any) => JSON.stringify(o);

// debug(sample);
const code = Object.keys(sample).map(key => {
  return compile(sample[key]);
});
debug('event => code', code);

const event = code.filter(Boolean).map(c => {
  return interpret(c);
});
debug('code => event', event);