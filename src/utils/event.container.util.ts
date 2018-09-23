import { IHandler } from '../interfaces/handler.interface';
import { IEventDto } from '../interfaces/events/event-dto.interface';

export type TypeEventContainer = IHandler<IEventDto> | any;

export class EventContainer {

    private static bindings: TypeEventContainer[] = [];

    static add(target: TypeEventContainer | any): void {
        EventContainer.bindings.push(target);
    }

    static getAll(): TypeEventContainer[] {
        return EventContainer.bindings;
    }

}
