import { ICommand } from './interfaces/commands/command.interface';
import { ICommandDto } from './interfaces/commands/command-dto-interface';
export declare abstract class Command<T extends ICommandDto> implements ICommand<T> {
    readonly data: T;
    readonly cid?: string;
    context: string;
    action: string;
    constructor(data: T, cid?: string);
}
