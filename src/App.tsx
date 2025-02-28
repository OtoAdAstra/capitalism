import { useState, useEffect } from "react";
import "./styles/App.sass";
import LibertyToggler from "./pages/LibertyToggler";
import Loader from "./pages/Loader";

function App() {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  useEffect(() => {
    const img = new Image();
    img.src = "../usa-flag.jpg";
    img.onload = () => setIsLoaded(true);
  }, []);

  return (
    <div className="App">{isLoaded ? <LibertyToggler /> : <Loader />}</div>
  );
}

export default App;
