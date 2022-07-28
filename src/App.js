import "./App.css";
import { Home } from "./Components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Vitalform } from "./Components/VitalReport/Vitalform";
import ConsultingCharges from "./Components/BookDoctor/ConsultingCharges";
import GeneratedReport from "./Components/VitalReport/GeneratedReport";
// import GeneratedReport from "./Components/VitalReport/GeneratedReport";

function App() {
  return (
    <Router>
      <header className="App-header ">
        <Routes>
          {/* Route For displaying launchpads */}
          <Route exact path="/" element={<Home />}></Route>
          {/* Route for displaying Details of launch */}
          <Route exact path="/vitalform" element={<Vitalform />}></Route>
          <Route
            exact
            path="/consultingcharges"
            element={<ConsultingCharges />}
          ></Route>
          <Route
            exact
            path="/generatedreport"
            element={<GeneratedReport />}
          ></Route>
        </Routes>
      </header>
    </Router>
  );
}

export default App;
