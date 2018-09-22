import { IHandler } from '../interfaces/handler.inteface';
import { ICommandDto } from '../interfaces/commands/command-dto-interface';

export type TypeCommandContainer = IHandler<ICommandDto> | any;

export class CommandContainer {

    private static bindings: TypeCommandContainer[] = [];

    static add(target: TypeCommandContainer): void {
        CommandContainer.bindings.push(target);
    }

    static getAll(): TypeCommandContainer[] {
        return CommandContainer.bindings;
    }

}
