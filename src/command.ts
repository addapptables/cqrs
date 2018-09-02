import { ICommand } from './interfaces/commands/command.interface';

export abstract class Command<T> implements ICommand<T> {
    constructor(
        readonly data: T,
        readonly cid?: string
    ) { }
}
