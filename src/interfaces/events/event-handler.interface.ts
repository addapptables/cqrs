import { IEvent } from './event.interface';
import { IEventDto } from './event-dto.interface';

export interface IEventHandler {
    handle(event: IEvent<IEventDto>): void;
}
