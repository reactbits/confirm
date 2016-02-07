import confirm from '../src';

confirm('Are you sure?').then(
	() => confirm('Really?'),
	() => console.log('no'),
).then(
	() => console.log('ok, got it'),
	() => console.log('no'),
);
