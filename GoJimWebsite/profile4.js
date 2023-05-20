 //Document Object Model to add listerners to two elements
 document.addEventListener("DOMContentLoaded", () => {
    const slider = document.getElementById("bgSlider"); //ID of background color slider
    slider.addEventListener("input", () => {
      const value = slider.value;
      //uses the value of the slider, pads the value, and produces a hexademical string
      const hexValue = value.toString(16).padStart(2, '0').toUpperCase();
      document.body.style.backgroundColor = `#${hexValue}${hexValue}${hexValue}`;
      //string formation to get the background color
  });
      const uploadButton = document.getElementById("uploadButton");
    const profilePicInput = document.getElementById("profilePicInput");
  
    uploadButton.addEventListener("click", () => {
      const file = profilePicInput.files[0]; //Retrieves input elements from the input
      const reader = new FileReader(); //FileReader object to read contents of file
      
      reader.onload = (event) => { //Call-back, when a file is read sucessfully
        const imageData = event.target.result; //result of the file that was read
        const profilePic = document.getElementById("profilePic");
        profilePic.setAttribute("src", imageData);
      }; //sets image data as the src for the profile picture
      
      reader.readAsDataURL(file); //file is uploaded using reader object
    });
  });