import { ICommandHandlerOptions } from '../interfaces/commands/command-handler-options.interface';
import { COMMAND_HANDLER_METADATA } from '../config/constants.config';

export function CommandHandler(options: ICommandHandlerOptions) {
    return (target: any) => {
        Reflect.defineMetadata(COMMAND_HANDLER_METADATA, options, target);
    };
}
