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
const cartData = [];

const featuredList = document.querySelector(".featured-items .card-list");
const cartList = document.querySelector(".cart-items .card-list");

data.forEach((item, index) => {
	featuredList.insertAdjacentHTML(
		"beforeend",
		`
		<div class="card">
			<div class="img">
				<img src="${item.img}" alt="Icon" />
				<div class="add-cart">
					<button class="add-cart-btn" data-id="${index}">
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

const addToCartButtons = document.querySelectorAll(
	".featured-items .card-list .add-cart-btn"
);

addToCartButtons.forEach((btn) => {
	btn.addEventListener("click", (e) => {
		const id = Number(e.target.getAttribute("data-id"));
		const cartDataIndex = cartData.findIndex((val) => val.id === id);
		if (cartDataIndex === -1) {
			cartData.push({
				id: id,
				count: 1,
			});
			cartData.sort((a, b) => a.id - b.id);
		} else {
			cartData[cartDataIndex].count++;
		}

		renderCartItems();
	});
});

function renderCartItems() {
	cartList.innerHTML = "";

	for (let cartItem of cartData) {
		let item = data[cartItem.id];

		cartList.insertAdjacentHTML(
			"beforeend",
			`
				<div class="card">
					<div class="img">
						<img src="${item.img}" alt="Icon" />
					</div>
					<div class="info">
						<div class="remove-item">
							<button class="remove-item-btn" data-id="${cartItem.id}">
								<img src="./img/remove.svg" alt="Remove" />
							</button>
						</div>
						<h3>${item.title}</h3>
						<p>Price: <span class="price">$${item.price.toFixed(2)}</span>
						<p class="count">Quantity: ${cartItem.count}</p>
					</div>
				</div>
				`
		);
	}

	const removeButtons = document.querySelectorAll(
		".cart-items .card-list .remove-item-btn"
	);

	removeButtons.forEach((btn) => {
		btn.addEventListener("click", (e) => {
			const id = Number(btn.getAttribute("data-id"));
			const index = cartData.findIndex((val) => val.id === id);

			if (index !== -1) {
				const item = cartData[index];
				item.count--;

				if (item.count <= 0) {
					cartData.splice(index, 1);
				}

				renderCartItems();
			}
		});
	});
}
