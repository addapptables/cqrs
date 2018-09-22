"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EventContainer {
    static add(target) {
        EventContainer.bindings.push(target);
    }
    static getAll() {
        return EventContainer.bindings;
    }
}
EventContainer.bindings = [];
exports.EventContainer = EventContainer;
