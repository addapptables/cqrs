import 'reflect-metadata';
import { expect } from 'chai';

import { CommandHandler } from '../../../src/decorators/command-handler.decorator';
import { COMMAND_HANDLER_METADATA } from '../../../src/config/constants.config';
import { CommandContainer } from '../../../src/utils/command.container.util';

describe('CommandHandler', () => {
    const options = { action: 'createTest', context: 'text' };
    @CommandHandler(options)
    class Test { }

    it('should save metadata', () => {
        const metadata = Reflect.getMetadata(COMMAND_HANDLER_METADATA, Test);
        expect(metadata).to.deep.equal(options);
    });

    it('should save prototype', () => {
        const prototype = CommandContainer.get('Test');
        expect(prototype).to.deep.equal(Test);
    });

});
