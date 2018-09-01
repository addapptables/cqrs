import { IEventHandler } from "./interfaces/events/event-handler.interface";
import { COMMAND_HANDLER_METADATA } from "./config/constants.config";

export class FooCommand {

    getMetadata(target: IEventHandler) {
        return Reflect.getMetadata(COMMAND_HANDLER_METADATA, target);
    }

}
