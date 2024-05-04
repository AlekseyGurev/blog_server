import { useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
	padding: 20px 40px;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

const Text = styled.p`
	margin: 0 0 2px 0;
	padding: 0;
	font-size: 15px;
	font-weight: bold;
`;

const FooterContainer = ({ className }) => {
	const [weather, setWeather] = useState({
		city: '',
		weather: '',
		temp: '',
	});

	useEffect(() => {
		fetch(
			'https://api.openweathermap.org/data/2.5/weather?q=Moscow&units=metric&lang=ru&appid=ab0c79970d0fa2ee6b73c18f0bac1917',
		).then((res) =>
			res.json().then(({ name, main, weather }) => {
				setWeather({
					...weather,
					city: name,
					temp: Math.round(main.temp),
					weather: weather[0].description,
				});
			}),
		);
	}, []);
	return (
		<footer className={className}>
			<Container>
				<Text>Блог веб-разработчика</Text>
				<a href="mailto:mailwebdeveloper@ya.ru">mailwebdeveloper@ya.ru</a>
			</Container>
			<Container>
				<Text>
					{new Date().toLocaleString('ru', { day: 'numeric', month: 'long' })},{' '}
					{weather.city}
				</Text>
				<div>
					<Text>
						{weather.temp} градусов, {weather.weather}
					</Text>
				</div>
			</Container>
		</footer>
	);
};

export const Footer = styled(FooterContainer)`
	height: 120px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	box-shadow: 0px 2px 13px #000000;
`;
