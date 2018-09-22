import { IEventDto } from './event-dto.interface';
export interface IEvent<T extends IEventDto> {
    cid?: string;
    data: T;
}
