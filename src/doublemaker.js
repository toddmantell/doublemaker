export default values => {
	const iterator = myGenerator(values);

	return function () {
		return iterator.next().value;
	}
}

function* myGenerator(arrayOfValues) {
	for (const item of arrayOfValues) {
		yield Promise.resolve(item);
	}
}
