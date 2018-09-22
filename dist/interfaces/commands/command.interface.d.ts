import { ICommandDto } from './command-dto-interface';
export interface ICommand<T extends ICommandDto> {
    cid?: string;
    data: T;
}
