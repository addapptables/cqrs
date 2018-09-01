import { IEvent } from './interfaces/events/event.interface';

export abstract class Event<T> implements IEvent<T> {
    constructor(
        public readonly data: T,
        public readonly cid: string
    ) { }
}
