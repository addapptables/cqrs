import { ICommand } from './command.interface';
import { ICommandDto } from './command-dto-interface';
import { IHandler } from '../handler.interface';

export interface ICommandHandler<T extends ICommandDto> extends IHandler<ICommand<T>> { }
