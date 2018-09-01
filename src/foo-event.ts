import { IEventHandler } from "./interfaces/events/event-handler.interface";
import { EVENT_HANDLER_METADATA } from "./config/constants.config";

export class FooEvent {

    getMetadata(target: IEventHandler) {
        return Reflect.getMetadata(EVENT_HANDLER_METADATA, target);
    }

}
