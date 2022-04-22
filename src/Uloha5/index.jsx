import React, {useState} from 'react'
import './hamburger.css'

// Tvoříš rozbalovací hamburger menu.

// Zadání 1:
// Přichystej si stavovou proměnnou s výchozí hodnotou `false`,
// ve které bude uloženo, zda je menu otevřené nebo nikoliv.

// Zadání 2:
// Po kliknutí na button změň stav z `true` na `false` nebo obráceně.

// Zadání 3:
// Nerenderuj `ul`, pokud je stav `false`.

// Zadání 4:
// Pokud je menu zavřené nech mu jen třídu `hamburger`.
// Pro otevřené přidej navíc `hamburger--otevrene`.

const Uloha5 = () => {

	const [opened, setOpened] = useState(false);

	const handleClick = () => {
		setOpened(!opened)
	}

	return (
		<>
			<button onClick={handleClick} className={opened ? "hamburger hamburger--otevrene" : "hamburger"} aria-label="menu">
				<span></span>
				<span></span>
				<span></span>
			</button>
			{opened ? 
				<ul>
					<li>
						<a href="#o-nas">O nás</a>
					</li>
					<li>
						<a href="#co-delame">Co děláme</a>
					</li>
					<li>
						<a href="#kontakty">Kontakty</a>
					</li>
					<li>
						<a href="#cenik">Ceník</a>
					</li>
				</ul>
				: null
			}
		</>
	)
}

export default Uloha5;