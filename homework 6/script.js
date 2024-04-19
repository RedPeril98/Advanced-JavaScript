const menuSelector = document.querySelector(".menu_selector");
const menu = document.querySelector(".menu");

menuSelector.addEventListener("click", function () {
	menu.classList.toggle("hidden");
});

async function fetchData(url) {
	try {
		const resp = await fetch(url);
		return await resp.json();
	} catch (error) {
		console.error(`ошибка - ${error}`);
	}
}

const data = await fetchData("./data.json");
console.log(data);

const featuredList = document.querySelector(".featured-items .card-list");

data.forEach((item) => {
	featuredList.insertAdjacentHTML(
		"beforeend",
		`
		<div class="card">
			<div class="img">
				<img src="${item.img}" alt="Icon" />
				<div class="add-cart">
					<button>
						<img src="./img/cart.png" alt="Cart" />Add to Cart
					</button>
				</div>
			</div>
			<div class="info">
				<h3>${item.title}</h3>
				<p>${item.description}</p>
				<span class="price">$${item.price.toFixed(2)}</span>
			</div>
		</div>
		`
	);
});
