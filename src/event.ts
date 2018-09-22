import { IEvent } from './interfaces/events/event.interface';
import { IEventDto } from './interfaces/events/event-dto.interface';

export abstract class Event<T extends IEventDto> implements IEvent<T> {
    constructor(
        readonly data: T,
        readonly cid: string
    ) { }
}
