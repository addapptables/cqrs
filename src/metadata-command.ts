import { IEventHandler } from './interfaces/events/event-handler.interface';
import { COMMAND_HANDLER_METADATA } from './config/constants.config';
import { ICommandHandlerOptions } from './interfaces/commands/command-handler-options.interface';

export const getMetadata = (target: IEventHandler<any>): ICommandHandlerOptions => Reflect.getMetadata(COMMAND_HANDLER_METADATA, target);
