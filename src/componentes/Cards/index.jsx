import "./styles.css";

import { Card } from "./../Card";

export const Cards = ({ pokemons }) => (
	<div className="cards">
		{pokemons.map((pokemon,  idx) => (
			<Card
				key={pokemon.name}
				name={pokemon.name}
				cover={pokemon.sprites.front_default}
				id={pokemon.id}
				types={pokemon.types}
				stats={pokemon.stats}
			/>
		))}
	</div>
);
