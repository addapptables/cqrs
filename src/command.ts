import { ICommand } from './interfaces/commands/command.interface';

export abstract class Command<T> implements ICommand<T> {
    constructor(
        public readonly data: T,
        public readonly cid?: string
    ) { }
}
