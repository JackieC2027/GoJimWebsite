		// array of common goals
        let commonGoals = ["Lose weight", "Gain muscle", "Eat healthier", "Run faster", "Improve flexibility", "Bench 225", "Squat 315", "Deadlift 405", "1000lb Club"];

        // function to show goal suggestions based on user input
        function showSuggestions(value) {
          let suggestions = document.getElementById("suggestions");
          suggestions.innerHTML = "";
        
          if (!value) {
            return;
          }
        
          // filter goals that start with the provided character
          let filteredGoals = commonGoals.filter(goal => goal.toLowerCase().startsWith(value.toLowerCase()));
        
          for (let i = 0; i < filteredGoals.length; i++) {
            let div = document.createElement("div");
            div.innerHTML = filteredGoals[i];
        
            // fills in box when suggestion clicked on 
            div.onclick = function() {
              document.getElementById("input").value = this.innerHTML;
              document.getElementById("suggestions").innerHTML = "";
            };
        
            suggestions.appendChild(div);
          }
        }
                function addItem() {
                    let input = document.getElementById("input");
                    let list = document.getElementById("list");
                    let newItem = document.createElement("li");
                    let text = document.createTextNode(input.value);
                    newItem.appendChild(text);
                    list.appendChild(newItem);
                    input.value = "";
                    
                    // Save the goal to local storage
                    let goals = JSON.parse(localStorage.getItem("goals")) || [];
                    goals.push(text.textContent);
                    localStorage.setItem("goals", JSON.stringify(goals));
                }
                
                function loadGoals() {
                    // Retrieve the saved goals from local storage
                    let goals = JSON.parse(localStorage.getItem("goals")) || [];
                    
                    // Add the saved goals to the list
                    let list = document.getElementById("list");
                    for (let i = 0; i < goals.length; i++) {
                        let newItem = document.createElement("li");
                        let text = document.createTextNode(goals[i]);
                        newItem.appendChild(text);
                        list.appendChild(newItem);
                    }
                }