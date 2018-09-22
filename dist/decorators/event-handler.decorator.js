"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_config_1 = require("../config/constants.config");
const event_container_util_1 = require("../utils/event.container.util");
function EventHandler(options) {
    return (target) => {
        Reflect.defineMetadata(constants_config_1.EVENT_HANDLER_METADATA, options, target);
        event_container_util_1.EventContainer.add(target);
    };
}
exports.EventHandler = EventHandler;
