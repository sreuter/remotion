import React from 'react';
import type {PlayerEmitter, ThumbnailEmitter} from './event-emitter';

export const PlayerEventEmitterContext = React.createContext<
	PlayerEmitter | undefined
>(undefined);

export const ThumbnailEmitterContext = React.createContext<
	ThumbnailEmitter | undefined
>(undefined);
