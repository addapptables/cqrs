"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_config_1 = require("./config/constants.config");
const command_container_util_1 = require("./utils/command.container.util");
exports.getMetadata = (target) => Reflect.getMetadata(constants_config_1.COMMAND_HANDLER_METADATA, target);
exports.getHandlers = () => command_container_util_1.CommandContainer.getAll();
