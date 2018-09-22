import 'reflect-metadata';

export { AggregateRoot } from './aggregate-root';
export { Command } from './command';
export { Event } from './event';
export { getMetadata as getMetadataEvent, getHandlers as getEventHandlers } from './metadata-event';
export { getMetadata as getMetadataCommand, getHandlers as getCommandHandlers } from './metadata-command';

export * from './decorators';
export * from './interfaces';
