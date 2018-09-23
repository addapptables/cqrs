import { IEvent } from './interfaces/events/event.interface';
import { IEventDto } from './interfaces/events/event-dto.interface';
export declare abstract class Event<T extends IEventDto> implements IEvent<T> {
    readonly data: T;
    readonly cid: string;
    context: string;
    action: string;
    constructor(data: T, cid: string);
}
