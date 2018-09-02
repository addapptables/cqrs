import { ICommand } from './command.interface';
import { ICommandDto } from './command-dto-interface';
import { IHandler } from '../handler.inteface';

export interface ICommandHandler extends IHandler<ICommand<ICommandDto>> {
}
