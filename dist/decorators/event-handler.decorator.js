"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_config_1 = require("../config/constants.config");
function EventHandler(options) {
    return (target) => {
        Reflect.defineMetadata(constants_config_1.EVENT_HANDLER_METADATA, options, target);
    };
}
exports.EventHandler = EventHandler;
