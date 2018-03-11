import doublemaker from "../src/doublemaker";

describe('doublemaker tests', () => {
	it('should return multiple values', async () => {
		const values = [false, 'Hello', {value: 'This is my object'}]; 

		const maker = doublemaker.asyncMultiValueStub(values);

		const result2 = await maker();
		const result3 = await maker();

		expect(result2).toBe(false);
		expect(result3).toBe('Hello');
	});

	it('should return 5 values when given 5 values', async () => {
		const values = [1, 2, 3, true, {}];

		const maker = doublemaker.asyncMultiValueStub(values);

		const result1 = await maker();
		const result2 = await maker();
		const result3 = await maker();
		const result4 = await maker();
		const result5 = await maker();
		
		expect(result2).toBe(2);
		expect(result4).toBe(true);
		expect(result5).toMatchObject({});
	});
});