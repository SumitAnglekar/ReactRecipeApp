import React, {useEffect, useState} from "react";
import "./App.css";

const App = () => {

  const APP_ID = "80c17640";
  const APP_KEY = "3ae3b8ebc50f02035df01fc046f8c0cd";
  const ex = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;
  
  const [counter, setCounter] = useState(0);

  useEffect(() =>{
    //console.log("Effect has been run");
    getRecipes();
  },[]);

  const getRecipes = async () => {
    const response= await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    console.log(data);
  }
  
  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text"/>
        <button
          className="search-button" 
          type="submit">submit</button>
          <h1 onClick={() => setCounter(counter+1)}>{counter}</h1>
      </form>
    </div>
  );
}

export default App;
