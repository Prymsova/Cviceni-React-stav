import React, {useState, useReducer} from 'react'
import './kasicka.css'
import penizeUrl from './penize.svg'

//bonusové zadání od kouče toma
//chceme stav v takovémhle tvaru: {5:1, 10:1} který říká, že mám 1x pětikorunu a 1x desetikorunu
//spočítejte, kolik je celkem v kasičce korun a vypište, kolik je jakých mincí
//s tím, že přidat pětikorunu se bude chovat tak, že když bude v prasátku hodnota peněz směnitelná za větší mince, tak se to přepočítá
//použít useReducer

// !!! když jsem se snažila dostat z objektu {} podle klíče buď hodnotu pětikorun nebo desetikorun, tak chybně mince.5 > musí být mince[5]

//const reducer = (state, action) => {
//	switch (action.type) {
//		case "calculate":
//			
//			return {
//				5: (state[5] ? 0 : 1), 
//				10: (state[5] ? state[10] + 1 : state[10]),
//				20: (state[10] && state[5] ? state[20] + 1 : state[20]),
//				50: (state[20] == 2 && state[5] ? state[50] + 1 : state[50]) 
//			};
//		default:
//			return state;
//	}
//}


const Kasicka = () => {

	const reducer = (state, action) => {
		switch (action.type) {
			case "coin50":
				return {5: 0, 10: state[10], 20: 0, 50: state[50]+1};
			case "coin20":
				return {5: 0, 10: 0, 20: state[20]+1, 50: state[50]};
			case "coin10":
				return {5: 0, 10: state[10]+1, 20: state[20], 50: state[50]};
			case "coin5":
				return {5: state[5]+1, 10: state[10], 20: state[20], 50: state[50]};
			case "reset":
				return {5: 0, 10: 0, 20: 0, 50: 0};
			default:
				return state;
		}
	}

	
	const initMince = {5: 1, 10: 1, 20: 0, 50: 0};
	const[mince, dispatch] = useReducer(reducer, initMince);

	const initCount = initMince[5]*5 + initMince[10]*10 + initMince[20]*20 + initMince[50]*50;
	//záleží na pořadí initMince a initCount
	const[count, setCount] = useState(initCount);

	const handleClick = () => {
		setCount(count+5);
		if (mince[20] == 2 && mince[5]) {
			dispatch({type: "coin50"})
		} else if (mince[10] && mince[5]) {
			dispatch({type: "coin20"})
		} else if (mince[5]) {
			dispatch({type: "coin10"})
		} else {
			dispatch({type: "coin5"})
		}
	}

	return (
		<div className="kasicka">
			<h3>
				<img src={penizeUrl} width={24} height={24} alt="" /> Peníze v kasičce: {count}Kč
			</h3>
			<h4>
				Počet mincí:
				5Kč: {mince[5]} ks,
				10Kč: {mince[10]} ks,
				20Kč: {mince[20]} ks,
				50Kč: {mince[50]} ks
			</h4>
			<button onClick={handleClick}>přihodit pětikorunu</button>
			<button onClick={() => {setCount(0), dispatch({type: "reset"})}}>vysypat kasičku</button>
		</div>
	)
}

const ZaverecnyBonus2 = () => {
	return (
		<>
			<Kasicka />
		</>
	)
}

// Vytváříš virtuální prasátko na střádání peněz.
// Občas máš nákupní horečku a potřebuješ prasátko vysypat.

// Zadání 1:
// Přichystej v komponentě `Kasicka` proměnnou pro počet uložených
// peněz s výchozí hodnotou podle prop proměnné `pocatecniStav`.

// Zadání 2:
// Prvním tlačítkem přidej pět a druhým nastav na nulu.

// Zadání 3:
// Počet peněz vypiš.

//const Kasicka = ({ pocatecniStav }) => {
//	const[obnos, setObnos] = useState(pocatecniStav);
//
//	return (
//		<div className="kasicka">
//			<h3>
//				<img src={penizeUrl} width={24} height={24} alt="" /> Peníze v kasičce:{obnos}
//				 Kč
//			</h3>
//			<button onClick={() => {setObnos(obnos+5)}}>přihodit pětikorunu</button> <button onClick={() => {setObnos(0)}}>vysypat kasičku</button>
//		</div>
//	)
//}

//const ZaverecnyBonus2 = () => {
//	return (
//		<>
//			{[0, 20, 50, 8].map((hodnota, i) => (
//				<Kasicka pocatecniStav={hodnota} key={i} />
//			))}
//		</>
//	)
//}

export default ZaverecnyBonus2;
