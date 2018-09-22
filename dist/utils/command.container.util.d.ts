import { IHandler } from '../interfaces/handler.inteface';
import { ICommandDto } from '../interfaces/commands/command-dto-interface';
export declare type TypeCommandContainer = IHandler<ICommandDto> | any;
export declare class CommandContainer {
    private static bindings;
    static add(target: TypeCommandContainer): void;
    static getAll(): TypeCommandContainer[];
}
