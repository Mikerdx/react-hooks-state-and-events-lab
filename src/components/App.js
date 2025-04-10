import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  // Create a state variable to track dark mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Set the class name based on state
  const appClass = isDarkMode ? "App dark" : "App light";

  // Toggle handler for the button
  function handleDarkModeClick() {
    setIsDarkMode((prevMode) => !prevMode);
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkModeClick}>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
