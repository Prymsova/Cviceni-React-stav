import React, {useState} from 'react'
import './carousel.css'

// Tvoříš jednoduchou galerii, kde se jde klikáním
// na tlačítka přesouvat na další nebo předchozí obrázky.

// Zadání 1:
// Nachystej si adresy obrázků uvedené níže do pole.

/*
Adresy obrázků:
https://source.unsplash.com/WLUHO9A_xik/880x500
https://source.unsplash.com/DA1eGglMmlg/880x500
https://source.unsplash.com/kTxL6le0Wgk/880x500
https://source.unsplash.com/7go5UASxmDY/880x500
https://source.unsplash.com/YmATDIFsCmQ/880x500
*/

const images = [
	"https://source.unsplash.com/WLUHO9A_xik/880x500",
	"https://source.unsplash.com/DA1eGglMmlg/880x500",
	"https://source.unsplash.com/kTxL6le0Wgk/880x500",
	"https://source.unsplash.com/7go5UASxmDY/880x500",
	"https://source.unsplash.com/YmATDIFsCmQ/880x500",
];

// Zadání 2:
// Přidej komponentě stavovou proměnnou, ve které bude index
// právě aktivního obrázku. Na začátku to bude 0.

// Zadání 3:
// Pro `src` v tagu `img` použij adresu z pole pod správným indexem.

// Zadání 4:
// Tlačítky ← a → měň index.

// Bonus:
// Pozor na krajní hodnoty. Pokud dojdeš na konec nebo začátek pole,
// tak už v daném směru neměň index, aby ti neutekl mimo položky v poli.
// Nastav tlačítkům atribut `disabled`, pokud v jejich směru už není
// žádný obrázek.


const Uloha4 = () => {

	const [indexImage, setIndexImage] = useState(0);
	//měla jsem mimo const Uloha4 a divila se, že mi to nefunguje!!!

	const handleClick = (plusminus) => {
		setIndexImage(
			indexImage + plusminus
		);
	}

	return (
		<div className="carousel">
			<button onClick={ () => handleClick(-1) } className="carousel__predchozi" aria-label="předchozí" disabled={(indexImage == 0) ? true : false}>
				←
			</button>
			<div className="carousel__media">
				<img
					className="carousel__image"
					src={images[indexImage]}
					alt=""
				/>
			</div>
			<button onClick={ () => handleClick(1) } className="carousel__dalsi" aria-label="další" disabled={(indexImage == images.length - 1) ? true : false}>
				→
			</button>
		</div>
	)
}

export default Uloha4;