import 'reflect-metadata';

export { AggregateRoot } from './aggregate-root';
export { Command } from './command';
export { Event } from './event';
export { getMetadata as getMetadataEvent } from './metadata-event';
export { getMetadata as getMetadataCommand } from './metadata-command';

export * from './decorators';
export * from './interfaces';
export * from './config';
