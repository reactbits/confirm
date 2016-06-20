import confirm from '../src';

confirm('Are you sure?', {
	done: () => {
		console.log('ok, got it');
	},
});

confirm('Are you sure?', () => {
	console.log('done');
});
