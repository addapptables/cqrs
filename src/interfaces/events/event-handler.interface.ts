import { IEvent } from './event.interface';
import { IEventDto } from './event-dto.interface';
import { IHandler } from '../handler.inteface';

export interface IEventHandler extends IHandler<IEvent<IEventDto>> {
}
