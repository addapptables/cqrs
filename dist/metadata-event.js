"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_config_1 = require("./config/constants.config");
exports.getMetadata = (target) => Reflect.getMetadata(constants_config_1.EVENT_HANDLER_METADATA, target);
