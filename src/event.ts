import { IEvent } from './interfaces/events/event.interface';

export abstract class Event<T> implements IEvent<T> {
    constructor(
        readonly data: T,
        readonly cid: string
    ) { }
}
