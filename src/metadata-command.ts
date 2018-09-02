import { IEventHandler } from './interfaces/events/event-handler.interface';
import { COMMAND_HANDLER_METADATA } from './config/constants.config';

export const getMetadata = (target: IEventHandler) => Reflect.getMetadata(COMMAND_HANDLER_METADATA, target);
