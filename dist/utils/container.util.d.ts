import { IHandler } from '../interfaces/handler.inteface';
import { IEventDto } from '../interfaces/events/event-dto.interface';
import { ICommandDto } from '../interfaces/commands/command-dto-interface';
export declare type ContainerHandler = IHandler<IEventDto | ICommandDto>;
export declare class Container {
    private static bindings;
    static add(target: any): void;
    static getAll(): Map<string, ContainerHandler>;
}
