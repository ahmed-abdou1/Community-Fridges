let fridgeA = {
	name: "Parkdale fridge", // name of the fridge
	capacity: 45,
	contact_person: "Jane Doe",
	contact_phone: " (613) 722-8019",

	// Location of the fridge
	address: {
		street: "30 Rosemount Ave #2",
		postal_code: "K1Y 1P4",
		city: "Ottawa",
		province: "Ontario",
		country: "Canada",
	},

	items: {
		"almond_milk": {
				name: "Almond milk",
				quantity: 1,
				type: "dairy",
				img: "images/dairy/almond_milk.jpeg"
			},
			"whole_milk": {
					name: "Whole milk",
					quantity: 2,
					type: "dairy",
					img: "images/dairy/whole_milk.jpeg"
				},
			"salted_butter": {
					name: "Salted butter",
					quantity: 1,
					type: "dairy",
					img: "images/dairy/salted_butter.jpeg"
					},
			"grapes": {
					name: "Grapes",
					quantity: 2,
					type: "produce",
					img: "images/produce/grapes.jpeg"
					},
			"apples": {
					name: "Apples",
					quantity: 1,
					type: "produce",
					img: "images/produce/apples.jpeg"
				},
			"bananas": {
					name: "Bananas",
					quantity: 2,
					type: "produce",
					img: "images/produce/bananas.jpeg"
					},
			"spinach": {
					name: "Spinach",
					quantity: 1,
					type: "produce",
					img: "images/produce/spinach.jpeg"
					},
			"lettuce": {
					name: "Lettuce",
					quantity: 1,
					type: "produce",
					img: "images/produce/lettuce.jpeg"
					},
			"cauliflower": {
					name: "Cauliflower",
					quantity: 1,
					type: "produce",
					img: "images/produce/cauliflower.jpeg"
					},
			"cheerios": {
					name: "Cheerios",
					quantity: 1,
					type: "pantry",
					img: "images/pantry/cheerios.jpeg"
					},
			"crackers": {
					name: "Crackers",
					quantity: 4,
					type: "pantry",
					img: "images/pantry/crackers.jpeg"
					},
	}
};

let fridgeB = {
	name: "Morrison fridge", // name of the fridge
	capacity: 80,
	contact_person: "John Doe",
	contact_phone: "(613) 596-6229",

	// Location of the fridge
	address: {
		street: "3985-A Morrison Drive",
		postal_code: "K2H 7L1",
		city: "Ottawa",
		province: "Ontario",
		country: "Canada",
	},

	items: {
		"almond_milk": {
				name: "Almond milk",
				quantity: 1,
				type: "dairy",
				img: "images/dairy/almond_milk.jpeg"
			},
			"whole_milk": {
					name: "Whole milk",
					quantity: 2,
					type: "dairy",
					img: "images/dairy/whole_milk.jpeg"
				},
			"salted_butter": {
					name: "Salted butter",
					quantity: 1,
					type: "dairy",
					img: "images/dairy/salted_butter.jpeg"
					},
			"grapes": {
					name: "Grapes",
					quantity: 2,
					type: "produce",
					img: "images/produce/grapes.jpeg"
					},
			"apples": {
					name: "Apples",
					quantity: 1,
					type: "produce",
					img: "images/produce/apples.jpeg"
				},
			"bananas": {
					name: "Bananas",
					quantity: 2,
					type: "produce",
					img: "images/produce/bananas.jpeg"
					},
			"spinach": {
					name: "Spinach",
					quantity: 1,
					type: "produce",
					img: "images/produce/spinach.jpeg"
					},
			"lettuce": {
					name: "Lettuce",
					quantity: 1,
					type: "produce",
					img: "images/produce/lettuce.jpeg"
					},
			"cauliflower": {
					name: "Cauliflower",
					quantity: 1,
					type: "produce",
					img: "images/produce/cauliflower.jpeg"
					},
			"cheerios": {
					name: "Cheerios",
					quantity: 1,
					type: "pantry",
					img: "images/pantry/cheerios.jpeg"
					},
			"crackers": {
					name: "Crackers",
					quantity: 4,
					type: "pantry",
					img: "images/pantry/crackers.jpeg"
					},
	}
};

let fridgeC = {
	name: "Somerset fridge", // name of the fridge
	capacity: 65,
	contact_person: "Mary Doe",
	contact_phone: "(613) 238-8210",

	// Location of the fridge
	address: {
		street: "55 Eccles Street",
		postal_code: "K1R 6S3",
		city: "Ottawa",
		province: "Ontario",
		country: "Canada",
	},

	items: {
		"almond_milk": {
				name: "Almond milk",
				quantity: 1,
				type: "dairy",
				img: "images/dairy/almond_milk.jpeg"
			},
			"whole_milk": {
					name: "Whole milk",
					quantity: 2,
					type: "dairy",
					img: "images/dairy/whole_milk.jpeg"
				},
			"salted_butter": {
					name: "Salted butter",
					quantity: 1,
					type: "dairy",
					img: "images/dairy/salted_butter.jpeg"
					},
			"grapes": {
					name: "Grapes",
					quantity: 2,
					type: "produce",
					img: "images/produce/grapes.jpeg"
					},
			"apples": {
					name: "Apples",
					quantity: 1,
					type: "produce",
					img: "images/produce/apples.jpeg"
				},
			"bananas": {
					name: "Bananas",
					quantity: 2,
					type: "produce",
					img: "images/produce/bananas.jpeg"
					},
			"spinach": {
					name: "Spinach",
					quantity: 1,
					type: "produce",
					img: "images/produce/spinach.jpeg"
					},
			"lettuce": {
					name: "Lettuce",
					quantity: 1,
					type: "produce",
					img: "images/produce/lettuce.jpeg"
					},
			"cauliflower": {
					name: "Cauliflower",
					quantity: 1,
					type: "produce",
					img: "images/produce/cauliflower.jpeg"
					},
			"cheerios": {
					name: "Cheerios",
					quantity: 1,
					type: "pantry",
					img: "images/pantry/cheerios.jpeg"
					},
			"crackers": {
					name: "Crackers",
					quantity: 4,
					type: "pantry",
					img: "images/pantry/crackers.jpeg"
					},
	}
};
let fridges = [fridgeA, fridgeB, fridgeC];

// categories: dairy, pantry, meat and seafood, produce, bakery, frozen
let body = document.querySelector("body");

let newDiv = document.createElement("div");
newDiv.setAttribute("id", "container-pg2");
let seperateDivs = [];
let fridgeDiv = [];
let fridgeImages = [];

let fridgeName = "";
let fridgeAddress = "";
let fridgeContact = "";


for (let i = 0; i < fridges.length; i++) {
	let fridgeImagesLi = document.createElement('LI');

	fridgeImages[i] = document.createElement("img");
	fridgeImages[i].setAttribute("id", "fridge-img")
	fridgeImages[i].src = "provided_code/images/fridge.svg"
	fridgeImagesLi.appendChild(fridgeImages[i]);


	let ul = document.createElement('ul');
	ul.setAttribute("id", "ul-pg2");
	fridgeName = document.createTextNode(fridges[i].name);
	fridgeAddress = document.createTextNode(fridges[i].address.street);
	fridgeContact = document.createTextNode(fridges[i].contact_phone);
	let fridgeNameLi = document.createElement('LI');
	let fridgeAddressLi = document.createElement('LI');
	let fridgeContactLi = document.createElement('LI');
	fridgeNameLi.appendChild(fridgeName);
	fridgeAddressLi.appendChild(fridgeAddress);
	fridgeContactLi.appendChild(fridgeContact);

	ul.appendChild(fridgeImagesLi);

	ul.appendChild(fridgeNameLi);
	ul.appendChild(fridgeAddressLi);
	ul.appendChild(fridgeContactLi);

	seperateDivs[i] = document.createElement("div");
	seperateDivs[i].setAttribute("class", "container-pg2");

	seperateDivs[i].appendChild(ul);

	document.getElementById("outer-div-pg2").appendChild(seperateDivs[i]);

}

let availableFridges = document.querySelectorAll(".container-pg2");

let chosenFridge = 0;

let pg2Div = document.querySelector("#available-fridges-pg2");

let pg3Div = document.querySelector("#fridges-shown-pg3");

for (let i = 0; i < availableFridges.length; i++) {
	availableFridges[i].addEventListener("click", function() {
		
		let overallContainer = document.createElement("div");
		overallContainer.setAttribute("id", "over-all-container");

		document.getElementById("fridges-shown-pg3").innerHTML = "";
		let h1 = document.createElement("h1");
		h1.setAttribute("id", "h1-pg3");
		h1.appendChild(document.createTextNode("Items in the " + fridges[i].name))
		pg3Div.appendChild(h1);
		pg2Div.style.display = "none";

		let category = document.createElement("div");
		category.setAttribute("id", "category-pg3");
		overallContainer.appendChild(category);
		pg3Div.appendChild(overallContainer);

		let h2 = document.createElement("h2");
		h2.setAttribute("class", "h2-pg3");
		h2.appendChild(document.createTextNode(fridges[i].name));
		category.appendChild(h2);
		console.log(fridges[i].address.street);

		let basicInfoUl = document.createElement("ul");
		basicInfoUl.setAttribute("class", "basic-info-pg3");
		let streetAddressLi = createLi();
		let phoneNumberLi = createLi();
		let streetAddress = document.createTextNode(fridges[i].address.street);
		let phoneNumber = document.createTextNode(fridges[i].contact_phone);
		streetAddressLi.appendChild(streetAddress);
		phoneNumberLi.appendChild(phoneNumber);
		basicInfoUl.append(streetAddressLi, phoneNumberLi);
		category.appendChild(basicInfoUl);

		//Progress Bar Capacity
		let progress = document.createElement("div");
		progress.setAttribute("class", "progress");
		let capacity = document.createElement("div");
		capacity.setAttribute("class", "capacity");
		capacity.style.width = fridges[i].capacity + "%";
		let innerCapacityText = document.createTextNode(fridges[i].capacity + "%");
		capacity.appendChild(innerCapacityText);
		progress.appendChild(capacity);
		category.appendChild(progress);

		//Number of products
		let productsUl = document.createElement("ul");
		productsUl.setAttribute("class", "product-left-col");
		let produceLi = createLi("li");
		let dairyLi = createLi("li");
		let bakeryLi = createLi("li");
		let frozenLi = createLi("li");
		let pantryLi = createLi("li");

		produceLi.appendChild(document.createTextNode("Produce (6)"));
		dairyLi.appendChild(document.createTextNode("Dairy (3)"));
		bakeryLi.appendChild(document.createTextNode("Bakery (0)"));
		frozenLi.appendChild(document.createTextNode("Frozen (0)"));
		pantryLi.appendChild(document.createTextNode("Pantry (2)"));

		produceLi.setAttribute("class", "product-category");
		dairyLi.setAttribute("class", "product-category");
		bakeryLi.setAttribute("class", "product-category");
		frozenLi.setAttribute("class", "product-category");
		pantryLi.setAttribute("class", "product-category");

		console.log(productsUl);
		
		// for(let j = 0; j < productsUl.length; j++) {
		// 	console.log
		// }

		productsUl.append(produceLi, dairyLi, bakeryLi, frozenLi, pantryLi);
		category.appendChild(productsUl);

		//New Div thats on the third page thats in the middle
		let container2pg3 = document.createElement("div");
		container2pg3.setAttribute("id", "container-2-pg3");
		overallContainer.appendChild(container2pg3);
		pg3Div.appendChild(overallContainer);

		//all products

		// let itemCount = 0;

		let productObjectPg3 = {

		}

		for (let property in fridges[i].items) {
			
			// if (fridges[i].items[property].type == "pantry") {



			createProductPage(i, property);

			let productSelector = document.querySelectorAll(".product-category");
			for (let j = 0; j < productSelector.length; j++) {
				productSelector[j].addEventListener("click", function() {
					let number = j;
					let itemCategory = "";
					if (number == 0) {
						itemCategory = "produce";
						if (fridges[i].items[property].type == "produce") {
							// for (let object in fridges[i].items) {
							// 	console.log(object[type]);
							// 	// if (object.type != "produce") {
							// 	// 	console.log(object.type);
							// 	// 	object.style.display = "none";
							// 	// }
							// }
							//-------------------------------------------
							// if (itemCount == 3) {
							// 	container2pg3.innerHTML = "";
							// 	createProductPage(i, property);
							// } else if (itemCount >= 4 && itemCount <= 8) {
							// 	createProductPage(i, property);
							// }
							//-------------------------------------------
							// let dairyDiv = document.getElementsByClassName("dairy-div");
							// dairyDiv.style.display = "none";
							// document.querySelector("#dairy-div").style.display = "none";

							// This works:
							// let innerDiv = document.getElementById("inner-product-div");
							// innerDiv.style
							let dairyDiv = document.getElementsByClassName("dairy-div");
							let dairyBreakLine = document.getElementsByClassName("break-line-dairy");
							let pantryDiv = document.getElementsByClassName("pantry-div");
							let pantryBreakLine = document.getElementsByClassName("break-line-pantry");
							let produceDiv = document.getElementsByClassName("produce-div");
							let produceBreakLine = document.getElementsByClassName("break-line-produce");
							for (let k = 0; k < dairyDiv.length; k++) {
								dairyDiv[k].style.display = "none";
								dairyBreakLine[k].style.display = "none";
							}
							for (let k = 0; k < pantryDiv.length; k++) {
								pantryDiv[k].style.display = "none";
								pantryBreakLine[k].style.display = "none";
							}
							for (let k = 0; k < produceDiv.length; k++) {
								produceDiv[k].style.display = "flex";
								produceBreakLine[k].style.display = "block";
							}
							
						}
					} else if (number == 1) {
						itemCategory = "dairy";
						if (fridges[i].items[property].type == "dairy") {
							// container2pg3.innerHTML = "";
							// let produceDiv = document.querySelectorAll(".produce-div");
							// produceDiv.style.display = "none";


							// if(itemCount == 0) {
							// 	container2pg3.innerHTML = "";
							// 	createProductPage(i, property);
							// } else if (itemCount == 1 || itemCount == 2) {
							// 	createProductPage(i, property);
							// }
							let produceDiv = document.getElementsByClassName("produce-div");
							let produceBreakLine = document.getElementsByClassName("break-line-produce");
							let pantryDiv = document.getElementsByClassName("pantry-div");
							let pantryBreakLine = document.getElementsByClassName("break-line-pantry");
							let dairyDiv = document.getElementsByClassName("dairy-div");
							let dairyBreakLine = document.getElementsByClassName("break-line-dairy");
							for (let k = 0; k < produceDiv.length; k++) {
								produceDiv[k].style.display = "none";
								produceBreakLine[k].style.display = "none";
							}
							for (let k = 0; k < pantryDiv.length; k++) {
								pantryDiv[k].style.display = "none";
								pantryBreakLine[k].style.display = "none";
							}
							for (let k = 0; k < dairyDiv.length; k++) {
								dairyDiv[k].style.display = "flex";
								dairyBreakLine[k].style.display = "block";
							}
						}
					} else if (number == 4) {
						itemCategory = "pantry";
						if (fridges[i].items[property].type == "pantry") {
							// if (itemCount == 9) {
							// 	container2pg3.innerHTML = "";
							// 	createProductPage(i, property);
							// } else if (itemCount == 10) {
							// 	createProductPage(i, property);
							// }
							let produceDiv = document.getElementsByClassName("produce-div");
							let produceBreakLine = document.getElementsByClassName("break-line-produce");
							let dairyDiv = document.getElementsByClassName("dairy-div");
							let dairyBreakLine = document.getElementsByClassName("break-line-dairy");
							let pantryDiv = document.getElementsByClassName("pantry-div");
							let pantryBreakLine = document.getElementsByClassName("break-line-pantry");
							for (let k = 0; k < produceDiv.length; k++) {
								produceDiv[k].style.display = "none";
								produceBreakLine[k].style.display = "none";
							}
							for (let k = 0; k < dairyDiv.length; k++) {
								dairyDiv[k].style.display = "none";
								dairyBreakLine[k].style.display = "none";
							}
							for (let k = 0; k < pantryDiv.length; k++) {
								pantryDiv[k].style.display = "flex";
								pantryBreakLine[k].style.display = "block";
							}
						}
					}

					// itemCount++;
					// if (itemCount == 11) {
					// 	itemCount = 0;
					// }
					// console.log(itemCount);
				});
			}

		}

		//final Container Page 3


		let finalContainter = document.createElement("div");
		finalContainter.setAttribute("id", "final-container");
		overallContainer.appendChild(finalContainter);

		let pickedUpItemsDiv = document.createElement("div");
		pickedUpItemsDiv.setAttribute("class", "picked-up-items");
		finalContainter.appendChild(pickedUpItemsDiv);

		let h2PickedUpItems = document.createElement("h2");
		h2PickedUpItems.setAttribute("class", "h2-picked-up-items");
		h2PickedUpItems.appendChild(document.createTextNode("You have picked up the following items:"));
		pickedUpItemsDiv.appendChild(h2PickedUpItems);

		let finalUl = document.createElement("ul");
		
		// let testText1 = document.createElement("li");
		// // let testText2 = document.createElement("li");
		// testText1.setAttribute("class", "final-li");
		// testText2.setAttribute("class", "final-li");

		// let basket = document.createTextNode(productObjectPg3);
		// for (let property in productObjectPg3) {
		// 	console.log("testing");
		// 	console.log(productObjectPg3[property]);
		// }



		
		// for (let key in productObjectPg3) {
		// 	testText1.appendChild(document.createTextNode(`${productObjectPg3[key]} x ${key}`));
		// }
		// testText2.appendChild(document.createTextNode("5 x milk"));

		// finalUl.append(testText1, testText2);
		// finalContainter.appendChild(finalUl);

		// setInterval(function () {
		// 	// basket.innerText = `${productObjectPg3}`;
		// 	console.log(productObjectPg3);
		// }, 100)


		function appendToObject (item) {

			// testText1.innerHTML = "";
			finalUl.innerHTML = "";
			finalUl.setAttribute("id","final-ul");

			console.log(item);
			if (productObjectPg3[item]) {
				productObjectPg3[item]++;
			} else {
				productObjectPg3[item] = 1;
			}
			// testText1.appendChild(document.createTextNode(""));
			// finalUl.append(testText1);
			// finalContainter.appendChild(finalUl);
			for (let key in productObjectPg3) {
				if (productObjectPg3[key] >=1) {

					let newListItem = document.createElement("li");
					newListItem.setAttribute("class", "final-li");
					newListItem.append(document.createTextNode(`${productObjectPg3[key]} x ${key} `));
					finalUl.append(newListItem);
				}
			}
			// testText2.appendChild(document.createTextNode("5 x milk"));
			console.log(productObjectPg3);
			finalContainter.appendChild(finalUl);
		}

		function removeObject (item) {
			finalUl.innerHTML = "";
			finalUl.setAttribute("id","final-ul");
			productObjectPg3[item]--;
			for (let key in productObjectPg3) {
				if (productObjectPg3[key] >= 1) {
					let newListItem = document.createElement("li");
					newListItem.setAttribute("class", "final-li");
					newListItem.append(document.createTextNode(`${productObjectPg3[key]} x ${key} `));
					finalUl.append(newListItem);
				}
			}
			console.log(productObjectPg3);
			finalContainter.appendChild(finalUl);
		}


		function createProductPage(i, property) {

			productObjectPg3 = {
				
			}
			console.log(productObjectPg3);
			// container2pg3.innerHTML = "";
			// let innerProductDiv = document.createElement("div");
			// innerProductDiv.setAttribute("id", "inner-product-div");

			
			let innerProductDiv = document.createElement("div");
			let breakLine = document.createElement("hr");
			if (fridges[i].items[property].type == "dairy") {
				innerProductDiv.setAttribute("class","dairy-div");
				breakLine.setAttribute("class", "break-line-dairy");
			} else if (fridges[i].items[property].type == "produce") {
				innerProductDiv.setAttribute("class","produce-div");
				breakLine.setAttribute("class", "break-line-produce");
			} else if (fridges[i].items[property].type == "pantry") {
				innerProductDiv.setAttribute("class","pantry-div");
				breakLine.setAttribute("class", "break-line-pantry");
			}

		
			let product2Ulpg3 = document.createElement("ul");
			product2Ulpg3.setAttribute("class", "product-container2-ul");
		
			productImage = document.createElement("img");
			productImage.setAttribute("class", "all-products");
			productImage.src = "provided_code/" + fridges[i].items[property].img;
		
			let productNameli = document.createElement("li");
			let productQuantityli = document.createElement("li");
			let productPickUpli = document.createElement("li");
		
			productNameli.setAttribute("class", "product-container2-pg3");
			productQuantityli.setAttribute("class", "product-container2-pg3");
			productPickUpli.setAttribute("class", "product-container2-pg3");
		
			productNameli.appendChild(document.createTextNode(fridges[i].items[property].name));
			productQuantityli.appendChild(document.createTextNode("Quantity: " + fridges[i].items[property].quantity));
			productPickUpli.appendChild(document.createTextNode("Pickup item: "));
		
			let incrementDiv = document.createElement("div");
			incrementDiv.setAttribute("class", "wrapper");
			let minusSpan = document.createElement("span");
			let numberSpan = document.createElement("span");
			let addSpan = document.createElement("span");
		
			minusSpan.setAttribute("class", "minus");
			numberSpan.setAttribute("class", "number");
			addSpan.setAttribute("class", "add");
		
			minusSpan.appendChild(document.createTextNode("-"));
			// numberSpan.appendChild(document.createTextNode(`${productObjectPg3[fridges[i].items[property].name]}`));
			numberSpan.appendChild(document.createTextNode("0"));
			addSpan.appendChild(document.createTextNode("+"));
		
			incrementDiv.append(addSpan, numberSpan, minusSpan);
			let count = 0;
			addSpan.addEventListener("click", function () {
				console.log("added");
				if (count < fridges[i].items[property].quantity) {
					count++;
					appendToObject(fridges[i].items[property].name);
				}
				numberSpan.innerHTML = count;



			});
			minusSpan.addEventListener("click", function () {
				if (count > 0) {
					count--;
					removeObject(fridges[i].items[property].name)
					numberSpan.innerHTML = count;
				}
		
			});

		
			product2Ulpg3.append(productNameli, productQuantityli, productPickUpli);

			innerProductDiv.append(productImage, product2Ulpg3, incrementDiv);
		
			container2pg3.append(innerProductDiv, breakLine);
		}


	});

}






function createLi() {
	return document.createElement("li");
}

function createUlLiElements(numberOfLis) {
	let newUL = document.createElement("ul");
	for(let i = 0; i < numberOfLis; i++) {
		newUL.appendChild(document.createElement("li"));
	}
	return newUL;
}

