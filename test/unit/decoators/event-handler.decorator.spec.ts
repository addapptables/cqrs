import 'reflect-metadata';
import { expect } from 'chai';

import { EventHandler } from '../../../src/decorators/event-handler.decorator';
import { EVENT_HANDLER_METADATA } from '../../../src/config/constants.config';
import { EventContainer } from '../../../src/utils/event.container.util';

describe('EventHandler', () => {
    const options = { action: 'testCreated', context: 'text' };
    @EventHandler(options)
    class Test { }

    it('should save metadata', () => {
        const metadata = Reflect.getMetadata(EVENT_HANDLER_METADATA, Test);
        expect(metadata).to.deep.equal(options);
    });

    it('should save prototype', () => {
        const prototype = EventContainer.get('Test');
        expect(prototype).to.deep.equal(Test);
    });

});
