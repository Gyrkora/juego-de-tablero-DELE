import React, { useState } from 'react';
import { InputContainer, InputMainContainer } from '../styles.css/Input.styles';
import { ButtonAdd, ButtonAddBlockInput } from '../styles.css/Buttonadd.styles';

function InputScore() {
	// Initialize state to manage multiple players
	const [players, setPlayers] = useState([
		{ id: 1, name: '', money: '', article: '' }, // Initial player template
	]);

	// Function to handle changes in any player input
	const handlePlayerChange = (playerIndex, field) => (event) => {
		const updatedPlayers = players.map((player, index) => {
			if (index === playerIndex) {
				return { ...player, [field]: event.target.value };
			}
			return player;
		});
		setPlayers(updatedPlayers);
	};

	// Function to add a new player block
	const addNewPlayer = () => {
		const newPlayer = {
			id: players.length + 1,
			name: '',
			money: '',
			article: '',
		};
		setPlayers([...players, newPlayer]);
	};

	return (
		<div>
			{players.map((player, index) => (
				<InputMainContainer key={player.id}>
					<InputContainer
						placeholder="Nombre"
						value={player.name}
						onChange={handlePlayerChange(index, 'name')}
					/>
					<InputContainer
						placeholder="Billetera"
						value={player.money}
						onChange={handlePlayerChange(index, 'money')}
					/>
					<InputContainer
						placeholder="Articulo"
						value={player.article}
						onChange={handlePlayerChange(index, 'article')}
					/>
				</InputMainContainer>
			))}
			<ButtonAddBlockInput onClick={addNewPlayer}> + </ButtonAddBlockInput>
		</div>
	);
}

export default InputScore;
