import React, {useEffect, useMemo, useState} from 'react';
import {Internals} from 'remotion';
import {BACKGROUND, LIGHT_TEXT} from '../helpers/colors';
import {Canvas} from './Canvas';
import {Spacing} from './layout';
import {inlineCodeSnippet} from './Menu/styles';
import {Spinner} from './Spinner';

const container: React.CSSProperties = {
	color: 'white',
	flex: 1,
	justifyContent: 'center',
	alignItems: 'center',
	display: 'flex',
	backgroundColor: BACKGROUND,
	flexDirection: 'column',
};

export const CanvasOrLoading: React.FC = () => {
	const resolved = Internals.useResolvedVideoConfig(null);
	const [takesALongTime, setTakesALongTime] = useState(false);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setTakesALongTime(true);
		}, 500);
		return () => {
			clearTimeout(timeout);
		};
	}, []);

	const style = useMemo(() => {
		return {
			...loaderLabel,
			opacity: takesALongTime ? 1 : 0,
			transition: 'opacity 0.3s',
		};
	}, [takesALongTime]);

	if (!resolved) {
		return (
			<div style={container} className="css-reset">
				<Spinner size={30} duration={1} />
				<Spacing y={2} />
				<div style={style}>
					Running <code style={inlineCodeSnippet}>calculateMetadata()</code>...
				</div>
			</div>
		);
	}

	return <Canvas />;
};

const loaderLabel: React.CSSProperties = {
	fontSize: 14,
	color: LIGHT_TEXT,
	fontFamily: 'sans-serif',
	lineHeight: 1.5,
};
