import React, {useState} from 'react'

// Tvoříš komponentu, která zobrazuje vysoce přesnou předpověď
// počasí v Brně.

// Zadání 1:
// Vytvoř stavovou proměnnou s výchozí hodnotou `možná`.

// Zadání 2:
// Proměnnou vypiš místo `ano/ne/možná`.

// Zadání 3:
// Po kliknutí na tlačítko změň `možná` na `ano`, `ano` na `ne`,
// případně `ne` na `možná`.

const Uloha8 = () => {
	const[stav, setStav] = useState("možná");
	const handleClick = () => {
		if (stav == "možná") {
			setStav("ano")
		} else if (stav == "ano") {
			setStav("ne")
		} else if (stav == "ne") {
			setStav("možná")
		} else {
			console.log("Asi je někde chyba.")
		}
	}

	return (
		<>
			<h3>Prší v Brně: {stav}</h3>
			<button onClick={handleClick}>změnit</button>
		</>
	)
}

export default Uloha8;