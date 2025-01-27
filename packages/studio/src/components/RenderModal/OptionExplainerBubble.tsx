import type {AvailableOptions} from '@remotion/renderer/client';
import {BrowserSafeApis} from '@remotion/renderer/client';
import {InfoBubble} from './InfoBubble';
import {OptionExplainer} from './OptionExplainer';

export const OptionExplainerBubble: React.FC<{
	id: AvailableOptions;
}> = ({id}) => {
	const option = BrowserSafeApis.options[id];
	return (
		<InfoBubble title="Learn more about this option">
			<OptionExplainer option={option} />
		</InfoBubble>
	);
};
