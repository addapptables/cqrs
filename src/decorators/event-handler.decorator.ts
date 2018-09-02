import { IEventHandlerOptions } from '../interfaces/events/event-handler-options.interface';
import { EVENT_HANDLER_METADATA } from '../config/constants.config';

export function EventHandler(options: IEventHandlerOptions): (target: object) => void {
    return (target: object) => {
        Reflect.defineMetadata(EVENT_HANDLER_METADATA, options, target);
    };
}
