"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_config_1 = require("../config/constants.config");
const command_container_util_1 = require("../utils/command.container.util");
function CommandHandler(options) {
    return (target) => {
        Reflect.defineMetadata(constants_config_1.COMMAND_HANDLER_METADATA, options, target);
        command_container_util_1.CommandContainer.add(target);
    };
}
exports.CommandHandler = CommandHandler;
