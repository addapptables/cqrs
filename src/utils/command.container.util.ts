import { IHandler } from '../interfaces/handler.interface';
import { ICommandDto } from '../interfaces/commands/command-dto-interface';

export type TypeCommandContainer = IHandler<ICommandDto> | any;

export class CommandContainer {

    private static bindings: TypeCommandContainer[] = [];

    static add(target: TypeCommandContainer): void {
        CommandContainer.bindings.push(target);
    }

    static get(targetName: string): TypeCommandContainer {
        return CommandContainer.bindings.find(target => target.name === targetName);
    }

    static getAll(): TypeCommandContainer[] {
        return CommandContainer.bindings;
    }

}
