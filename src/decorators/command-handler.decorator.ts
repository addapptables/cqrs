import { ICommandHandlerOptions } from '../interfaces/commands/command-handler-options.interface';
import { COMMAND_HANDLER_METADATA } from '../config/constants.config';
import { CommandContainer } from '../utils/command.container.util';

export function CommandHandler(options: ICommandHandlerOptions): (target: any) => void {
    return (target: any) => {
        Reflect.defineMetadata(COMMAND_HANDLER_METADATA, options, target);
        CommandContainer.add(target);
    };
}
