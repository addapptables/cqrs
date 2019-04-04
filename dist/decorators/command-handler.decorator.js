"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_config_1 = require("../config/constants.config");
function CommandHandler(options) {
    return (target) => {
        Reflect.defineMetadata(constants_config_1.COMMAND_HANDLER_METADATA, options, target);
    };
}
exports.CommandHandler = CommandHandler;
