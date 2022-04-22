import React, {useState} from 'react'

// Tvoříš jednoduchou komponentu, ve které je textové pole,
// do kterého jde psát. V komponentě se bude zobrazovat
// text napsaný do pole a délka textu (počet znaků).

// Zadání 1:
// Pomocí události `change` na vstupním políčku a vlastnosti
// `event.target.value` ukládej do stavu, co uživatel napsal.

// Zadání 2:
// Mezi tagy `<b></b>` vlož napsaný text.

// Zadání 3:
// V dalším odstavci `<p>` zobraz, kolik má text znaků.

// Zadání 4:
// Poslední odstavec zobraz pouze v případě, že je text kratší než 8 znaků.

const ZaverecnyBonus1 = () => {
	const [text, setText] = useState(text)
	const [pocet, setPocet] = useState(0)

	const handleChange = (event) => {
		setText(event.target.value);
		setPocet(text.length);
	}

	return (
		<>
			<label onChange={handleChange}>
				Napiš něco: <input />
			</label>
			<p>
				Do políčka výše uživatel napsal: <b>{text}</b>
			</p>
			<p>Počet znaků: {pocet}</p>
			<p style={{
				display: pocet >= 8 ? "none" : "block"
				//lámala jsem si hlavu, jak to zapsat ten styl přímo do html, nejprve none a block bez uvozovek, nejprve vše v {} atd.
			}}>Jako heslo by text neobstál.</p>
		</>
	)
}

export default ZaverecnyBonus1;