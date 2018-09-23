import { IEvent } from './event.interface';
import { IEventDto } from './event-dto.interface';
import { IHandler } from '../handler.interface';
export interface IEventHandler<T extends IEventDto> extends IHandler<IEvent<T>> {
}
