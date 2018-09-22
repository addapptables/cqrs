"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_config_1 = require("./config/constants.config");
const event_container_util_1 = require("./utils/event.container.util");
exports.getMetadata = (target) => Reflect.getMetadata(constants_config_1.EVENT_HANDLER_METADATA, target);
exports.getHandlers = () => event_container_util_1.EventContainer.getAll();
