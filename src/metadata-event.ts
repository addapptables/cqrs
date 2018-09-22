import { EVENT_HANDLER_METADATA } from './config/constants.config';
import { IEventHandler } from './interfaces/events/event-handler.interface';
import { EventContainer } from './utils/event.container.util';
import { IEventHandlerOptions } from './interfaces/events/event-handler-options.interface';

export const getMetadata = (target: IEventHandler<any>): IEventHandlerOptions => Reflect.getMetadata(EVENT_HANDLER_METADATA, target);

export const getHandlers = () => EventContainer.getAll();
