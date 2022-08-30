import axios from 'axios';

export function getRandomInteger() {
	const url =
		'https://www.random.org/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new';
	const request = axios.get(url);
	const request2 = axios.get(url);

	return axios
		.all([request, request2])
		.then(
			axios.spread((...responses) => {
				const responseOne: number = responses[0].data;
				const responseTwo: number = responses[1].data;
				return !(responseTwo % 2 === 0 && responseOne % 2 === 0);
			})
		)
		.catch((errors) => {
			console.log(errors);
		});
}
