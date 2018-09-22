import 'reflect-metadata';

import { CommandHandler } from '../../src/decorators/command-handler.decorator';
import { ICommandHandler } from '../../src/interfaces/commands/command-handler.interface';
import { ICommand } from '../../src/interfaces/commands/command.interface';
import { CommandContainer } from '../../src/utils/command.container.util';

describe('handlers', () => {

    it('handler', () => {

        @CommandHandler({ context: 'test', action: 'createTest' })
        class Foo implements ICommandHandler<any> {
            handle(event: ICommand<any>): void {
                throw new Error('Method not implemented.');
            }
        }

        @CommandHandler({ context: 'test2', action: 'createTest2' })
        class Foo2 implements ICommandHandler<any> {
            handle(event: ICommand<any>): void {
                throw new Error('Method not implemented.');
            }
        }

        CommandContainer.getAll().forEach(cn => console.log(cn.name));
    });

});
