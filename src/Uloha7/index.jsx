import React, {useState} from 'react'
import './ukazatel-uspechu.css'

// Děláš jednoduchou komponentu, která ukazuje "progress bar",
// proužek, který ukazuje pokrok v nějakém procesu.

// Zadání 1:
// Použij prop `barva` ve style atributu, aby bal proužek barvou
// předanou jako prop do komponenty.

// Zadání 2:
// Přidej komponentě číselný stav od nuly do sta,
// který bude reprezentovat postup.

// Zadání 3:
// Po kliknutí na tlačítko zvětši stav o deset. Nejvýše ale do sta.

// Zadání 4:
// Nastav prvku `ukazatel-uspechu__postup` šířku podle stavové proměnné.

const UkazatelPokroku = ({ barva }) => {
	const [postup, setPostup10] = useState(0);

	return (
		<div className="ukazatel-uspechu">
			<div className="ukazatel-uspechu__ramecek">
				<div
					className="ukazatel-uspechu__postup"
					style={{
						//width: '40%',
						width: `${postup}%`,
						//aby fungovalo, musí být za číslem z hodnoty postup ještě procenta, a ty nešlo připojit stylem postup"%", ale do backsticků
						
						//maxWidth: "100%",
						//bacha, nemůže bát max-width
						//toto omezení, aby barevný proužek nevyjel z rámečku, je nadbytečné jakmile se uplatní podmínka, aby stav nikdy nebyl vyšší než 100
						backgroundColor: barva,
						//bacha, dát barvu bez {}
					}}
				></div>
			</div>
			<button onClick = { () => {(postup < 100) ? setPostup10(postup+10) : none} }>postoupit o 10 %</button>
		</div>
	)
	//tady bacha v té podmínce, že kdyby počáteční stav byl třeba 3, tak při 93 by se ještě pořád splnila podmínka <100 a tím pádem by konečný stav byl 103 a ne 100%, proto si to pohlídat zase nějakou podmínkou, že jeli konečný stav >100, tak přepsat na 100
}

const Uloha7 = () => {
	return (
		<>
			<UkazatelPokroku barva="blue" />
			<UkazatelPokroku barva="green" />
			<UkazatelPokroku barva="purple" />
		</>
	)
}

export default Uloha7;