"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Container {
    // target: IHandler<IEventDto | ICommandDto>
    static add(target) {
        Container.bindings.set(target.name, target);
    }
    static getAll() {
        return Container.bindings;
    }
}
Container.bindings = new Map();
exports.Container = Container;
