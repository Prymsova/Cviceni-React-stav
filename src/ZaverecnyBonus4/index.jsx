import React, {useState} from 'react'

// Zadání:
// Pomocí dvou stavových proměnných s výchozí hodnotou 0,
// které se budou měnit podle vstupních políček,
// vypiš do `<output></output>` jejich součet.

const ZaverecnyBonus4 = () => {
	const[a, setA] = useState(0);
	const[b, setB] = useState(0);
	const[soucet, setSoucet] = useState(a+b);
	
	return (
		<>
			<input onChange={(event) => {setA(Number(event.target.value)); setSoucet(a+b)}} type="number" defaultValue="0" /> +{' '}
			<input onChange={(event) => {setB(Number(event.target.value)); setSoucet(a+b)}} type="number" defaultValue="0" /> = <output>{soucet}</output>
		</>
	)
}

export default ZaverecnyBonus4;