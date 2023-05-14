function addItem(event) {
  event.preventDefault();
	const food = document.getElementById('food').value;
	const calories =                    document.getElementById('calories').value;
	const itemList = document.getElementById('item-list');
	const listItem = document.createElement('li');
	listItem.innerHTML = `${food}: ${calories} calories`;
	itemList.appendChild(listItem);
	document.getElementById('food').value = '';
	document.getElementById('calories').value = '';

  
}
// array of foods 
let commonFoods = ["Apple", "Banana", "Eggs", "Salad", "Halal", "Kims Dragon"];

// function to show food suggestions based on user input
function showFoodSuggestions(value) {
  let foodSuggestions = document.getElementById("foodSuggestions");
  foodSuggestions.innerHTML = "";

  if (!value) {
    return;
  }

  // filter foods that start with the provided character
  let filteredFoods = commonFoods.filter(food => food.toLowerCase().startsWith(value.toLowerCase()));

  for (let i = 0; i < filteredFoods.length; i++) {
    let div = document.createElement("div");
    div.innerHTML = filteredFoods[i];

    // autofill when clicked 
    div.onclick = function() {
      document.getElementById("food").value = this.innerText;
      foodSuggestions.innerHTML = "";
    };

    foodSuggestions.appendChild(div);
  }
}
