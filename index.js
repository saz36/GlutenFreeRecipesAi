function displayRecipe(response){
    console.log(response.data);
    console.log("finish");
    new Typewriter('#recipe', {
        strings: response.data.answer,
        autoStart: true,
        delay:1,
        cursor:"",
      });
}




function generateRecipe(event){
    event.preventDefault();
    let userInstructions = document.querySelector("#userInput");
    let apiKey = `ccedafe30c0o08ea49bb7fb493t06576`;
    let prompt = ` user instructions: generate a gluten free recipe about ${userInstructions.value}`;
    let context = `be kind and polite. give list  of ingriedients in <li> and <strong> and then <br /><br /> a paragraph of method maximum 10 lines.Temperature in celcius/farenheit.only suggest non barley vinegars. if user inputs barley,bulgur, wheat, rye, couscous, kamut, farina, spelt, wheat berries, farro suggest a alternative ingredient`;
    let url = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
    
    let recipeElement = document.querySelector("#recipe");
    recipeElement.innerHTML = `Generating a recipe about ${userInstructions.value}`
    console.log("start");
    axios.get(url).then(displayRecipe);
    
}




let recipeElement = document.querySelector("#recipeGenerator");
recipeElement.addEventListener("submit", generateRecipe);