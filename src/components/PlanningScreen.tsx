import React, { useState } from "react";
import { MapPin, Calendar, ChevronDown } from "lucide-react";

import Solo from "../assets/solo";
import Couple from "../assets/couple";
import Family from "../assets/family";
import Friends from "../assets/friends";

type PlanningScreenProps = {
  onComplete: (details: {
    destination: string;
    duration: string;
    companions: string;
  }) => void;
};
type BtnTypes = {
  id: number;
  name: string;
  icon: React.ReactNode;
};

const btns: BtnTypes[] = [
  { id: 1, name: "Solo", icon: <Solo className="" /> },
  { id: 2, name: "Couple", icon: <Couple className="" /> },
  { id: 3, name: "Family", icon: <Family className="" /> },
  { id: 4, name: "Friends", icon: <Friends className="" /> },
];

export const PlanningScreen: React.FC<PlanningScreenProps> = ({
  onComplete,
}) => {
  const [destination, setDestination] = useState("");
  const [duration, setDuration] = useState("");
  const [companions, setCompanions] = useState("");
  const [showDurationOptions, setShowDurationOptions] = useState(false);

  const durationOptions = [
    "3-5 days",
    "1 week",
    "2 weeks",
    "1 month",
    "More than a month",
  ];

  const handleContinue = () => {
    const finalDestination = destination || "Tokyo";
    const finalDuration = duration || "1 week";

    onComplete({
      destination: finalDestination,
      duration: finalDuration,
      companions: companions || "Solo",
    });
  };

  const handleCompanionSelect = (type: string) => {
    setCompanions(type);
  };

  return (
    <div className="max-w-md mx-auto px-4 py-12 flex flex-col min-h-screen">
      <header className="mb-9">
        <h1 className="title-text">Plan Your Journey, Your Way!</h1>
        <p className="subtitle-text">
          Let's create your personalised travel experience
        </p>
      </header>

      <div className="space-y-9 flex-grow">
        <div>
          <h2 className="font-mont font-bold text-lg leading-6 mb-3 text-primary_text">
            Where would you like to go?
          </h2>
          <div className="relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 ">
              <MapPin size={20} className="text-primary_text" />
            </div>
            <input
              type="text"
              placeholder="Enter Destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="w-full rounded-lg  font-medium font-Montserrat input-borders  bg-input_background  py-2.5 pl-10 pr-2.5 text-primary_text placeholder:text-primary_text focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>

        <div>
          <h2 className="font-mont font-bold text-lg leading-6 mb-3 text-primary_text">
            How long will you stay?
          </h2>
          <div className="relative">
            <div
              className="flex items-center justify-between input-borders w-full rounded-lg bg-input_background  py-2.5 pl-10 pr-2.5 cursor-pointer"
              onClick={() => setShowDurationOptions(!showDurationOptions)}
            >
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-primary_text">
                <Calendar size={20} className="text-primary_text" />
              </div>
              <span
                className={duration ? "text-primary_text" : "text-primary_text"}
              >
                {duration || "Select Duration"}
              </span>
              <ChevronDown
                size={20}
                className={`text-primary_text transition-all ${
                  showDurationOptions ? "rotate-180" : ""
                } `}
              />
            </div>

            {showDurationOptions && (
              <div className="absolute z-10 w-full mt-1 bg-input_background rounded-lg shadow-lg border border-gray-700 overflow-hidden">
                {durationOptions.map((option) => (
                  <div
                    key={option}
                    className="px-4 py-2 hover:bg-gray-700 cursor-pointer text-primary_text"
                    onClick={() => {
                      setDuration(option);
                      setShowDurationOptions(false);
                    }}
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div>
          <h2 className="font-mont font-bold text-lg leading-6 mb-3 text-primary_text">
            Who are you traveling with?
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {btns.map((btn) => (
              <button
                key={btn.id}
                className={`py-3 px-4 rounded-lg flex items-center justify-center input-borders gap-2.5 space-x-2 transition-colors  ${
                  btn.name === companions
                    ? "bg-indigo-600 text-white"
                    : "bg-input_background text-primary_text hover:bg-gray-700"
                }`}
                onClick={() => handleCompanionSelect(btn.name)}
              >
                {btn.icon}

                <span className="font-medium">{btn.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={handleContinue}
        className="w-full bg-[#3643FB] text-white text-base font-Montserrat leading-5 rounded-lg p-2.5 font-semibold mt-9 hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900"
      >
        Continue
      </button>
    </div>
  );
};
