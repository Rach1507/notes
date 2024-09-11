import "./App.css";
import BlogOverview from "./components/BlogOverview";
import AOS from "aos"; 
import { useEffect } from "react";
function App() {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="App">
      <BlogOverview />
    </div>
  );
}

export default App;
