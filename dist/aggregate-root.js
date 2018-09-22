"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AggregateRoot {
    constructor() {
        this.events = [];
    }
    getUncommittedEvents() {
        return this.events;
    }
    loadFromHistory(history) {
        history.forEach(event => this.apply(event, true));
    }
    apply(event, isFromHistory = false) {
        !isFromHistory && this.events.push(event);
        const handler = this.getEventHandler(event);
        handler && handler.call(this, event);
    }
    getEventHandler(event) {
        const handler = `on${this.getEventName(event)}`;
        return this[handler];
    }
    getEventName(event) {
        const { constructor } = Object.getPrototypeOf(event);
        return constructor.name;
    }
}
exports.AggregateRoot = AggregateRoot;
