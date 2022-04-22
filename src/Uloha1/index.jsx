import React, { useState } from 'react'

import offUrl from './off.svg'
import onUrl from './on.svg'
import './zarovka.css'

// Tvoříš komponentu, ve kteréé jde tlačítkem rozsvítit nebo zhasnout žárovka.

// Zadání 1:
// Po kliknutí na tlačítko `zapnout` zavolej `setJeZapnuta(true)`.

// Zadání 2:
// Po kliknutí na tlačítko `vypnout` žárovku zhasni.

// Prostuduj si kód a zjisti, jak všechno funguje.
// Neboj se a ptej se kouče, když nebudeš vědět.

const Uloha1 = () => {
	const [jeZapnuta, setJeZapnuta] = useState(false)

	return (
		<div className="zarovka">
			<img
				src={jeZapnuta ? onUrl : offUrl}
				width={80}
				height={80}
				alt={jeZapnuta ? 'Zapnutá žárovka' : 'Vypnutá žárovka'}
				className="zarovka__ikona"
			/>
			<div className="zarovka__tlacitka">
				<button onClick = { () => { setJeZapnuta(true) }} className="zarovka__tlacitko" disabled={jeZapnuta}>
					zapnout
				</button>
				<button onClick = { () => { setJeZapnuta(false) }} className="zarovka__tlacitko" disabled={!jeZapnuta}>
					vypnout
				</button>
			</div>
		</div>
	)
}

export default Uloha1;
