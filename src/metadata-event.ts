import { EVENT_HANDLER_METADATA } from './config/constants.config';
import { ICommandHandler } from '.';

export const getMetadata = (target: ICommandHandler) => Reflect.getMetadata(EVENT_HANDLER_METADATA, target);
