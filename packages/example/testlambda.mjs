import {execSync} from 'child_process';

execSync('pnpm run buildlambda', {
	cwd: '../lambda',
});

execSync('pnpm exec remotion lambda functions rmall -f', {
	stdio: 'inherit',
});

execSync(
	'pnpm exec remotion lambda sites create --site-name=testbed-v6 --log=verbose',
	{
		stdio: 'inherit',
	}
);

execSync('pnpm exec remotion lambda functions deploy --memory=3000', {
	stdio: 'inherit',
});

execSync(
	'pnpm exec remotion lambda render testbed-v6 react-svg --log=verbose',
	{
		stdio: 'inherit',
	}
);

execSync(
	'pnpm exec remotion lambda render testbed-v6 huge-payload --log=verbose ',
	{
		stdio: 'inherit',
	}
);
