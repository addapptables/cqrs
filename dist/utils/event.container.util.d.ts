import { IHandler } from '../interfaces/handler.interface';
import { IEventDto } from '../interfaces/events/event-dto.interface';
export declare type TypeEventContainer = IHandler<IEventDto> | any;
export declare class EventContainer {
    private static bindings;
    static add(target: TypeEventContainer | any): void;
    static getAll(): TypeEventContainer[];
}
