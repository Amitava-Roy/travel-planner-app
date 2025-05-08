import { useState } from "react";
import { PlanningScreen } from "./components/PlanningScreen";
import { TripDetailsScreen } from "./components/TripDetailsScreen";

function App() {
  const [currentScreen, setCurrentScreen] = useState<"planning" | "details">(
    "planning"
  );
  const [tripDetails, setTripDetails] = useState({
    destination: "",
    duration: "",
    companions: "",
  });

  const handlePlanningComplete = (details: typeof tripDetails) => {
    setTripDetails(details);
    setCurrentScreen("details");
  };

  return (
    <div className="min-h-screen bg-background  antialiased">
      {currentScreen === "planning" ? (
        <PlanningScreen onComplete={handlePlanningComplete} />
      ) : (
        <TripDetailsScreen tripDetails={tripDetails} />
      )}
    </div>
  );
}

export default App;
