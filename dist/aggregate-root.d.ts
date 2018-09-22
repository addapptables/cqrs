import { IEvent } from './interfaces/events/event.interface';
import { IEventDto } from './interfaces/events/event-dto.interface';
export declare abstract class AggregateRoot {
    private readonly events;
    getUncommittedEvents(): IEvent<IEventDto>[];
    loadFromHistory(history: IEvent<IEventDto>[]): void;
    apply(event: IEvent<IEventDto>, isFromHistory?: boolean): void;
    private getEventHandler;
    private getEventName;
}
