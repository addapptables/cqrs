"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CommandContainer {
    static add(target) {
        CommandContainer.bindings.push(target);
    }
    static getAll() {
        return CommandContainer.bindings;
    }
}
CommandContainer.bindings = [];
exports.CommandContainer = CommandContainer;
