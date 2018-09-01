import { ICommand } from './command.interface';
import { ICommandDto } from './command-dto-interface';

export interface ICommandHandler {
    handle(event: ICommand<ICommandDto>): void;
}
