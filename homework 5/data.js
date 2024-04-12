"use strict";

// Я использовала [SWAPI](https://swapi.dev/)

async function getStarships() {
	return (await fetch("https://swapi.dev/api/starships")).json();
}

getStarships().then((starships) => {
	console.log(starships);

	const content = document.querySelector(".content");
	for (let starship of starships.results) {
		content.insertAdjacentHTML(
			"beforeend",
			`<div class="card" style="width: 18rem">
				<div class="card-body">
					<h5 class="card-title">${starship.name}</h5>
					<p class="card-text">Created At: ${starship.created}</p>
					<p class="card-text">Hyperdrive: ${starship.hyperdrive_rating}</p>
				</div>
			</div>`
		);
	}
});
