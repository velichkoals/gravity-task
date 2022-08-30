import axios from 'axios';

export function getRandomInteger() {
	const url =
		'https://www.random.org/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new';
	const request = axios.get(url);
	const requestTwo = axios.get(url);

	return axios
		.all([request, requestTwo])
		.then(
			axios.spread((...responses) => {
				const response: number = responses[0].data;
				const responseTwo: number = responses[1].data;
				return !(response % 2 === 0 && responseTwo % 2 === 0);
			})
		)
		.catch((errors) => {
			console.log(errors);
		});
}
