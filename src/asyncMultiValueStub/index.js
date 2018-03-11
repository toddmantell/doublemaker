export default (stubValues: Array<mixed>): Function => {
	const iterator = returnMultipleValuesEachWrappedInPromise(stubValues);

	return function () {
		return iterator.next().value;
	}
};

function* returnMultipleValuesEachWrappedInPromise(arrayOfValues: Array<mixed>): Iterator {
	for (const item of arrayOfValues) {
		yield Promise.resolve(item);
	}
}