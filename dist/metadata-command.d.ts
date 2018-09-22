import { IEventHandler } from './interfaces/events/event-handler.interface';
import { ICommandHandlerOptions } from './interfaces/commands/command-handler-options.interface';
export declare const getMetadata: (target: IEventHandler<any>) => ICommandHandlerOptions;
export declare const getHandlers: () => any[];
