import React from "react";
// import { ChevronLeft, ChevronRight } from 'lucide-react';

type DaySelectorProps = {
  days: Array<{
    day: number;
    date: string;
  }>;
  selectedDay: number;
  onSelectDay: (day: number) => void;
};

export const DaySelector: React.FC<DaySelectorProps> = ({
  selectedDay,
  onSelectDay,
}) => {
  // Mock additional days for the calendar
  const allDays = [
    { day: 27, date: "27.01.2025", month: "JAN" },
    { day: 28, date: "28.01.2025", month: "JAN" },
    { day: 29, date: "29.01.2025", month: "JAN" },
    { day: 30, date: "30.01.2025", month: "JAN" },
    { day: 31, date: "31.01.2025", month: "JAN" },
    { day: 1, date: "01.02.2025", month: "FEB" },
    { day: 2, date: "02.02.2025", month: "FEB" },
  ];

  return (
    <div className="relative">
      <div className="bg-accordion_card_bg border border-[#A6A6A6] dark:border-none rounded-2xl p-2 flex flex-col">
        <div className="flex gap-2 mb-4">
          <button className="bg-[#313DDF] dark:bg-[#CBFF3E] text-[#FDFBF7] dark:text-gray-900 px-2 py-1 rounded-lg font-Montserrat font-semibold text-xs">
            Day Plan
          </button>
          <button className="border border-[#313DDF] text-[#313DDF] dark:bg-gray-800 dark:border-none dark:text-white px-4 py-2 rounded-lg font-Montserrat font-semibold text-xs">
            14 Activities
          </button>
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {allDays.map((day, index) => (
            <button
              key={index}
              onClick={() => onSelectDay(day.day)}
              className={`flex-shrink-0 rounded-xl  transition-colors flex  ${
                day.day === selectedDay
                  ? "bg-[#313DDF] text-[white] dark:bg-[#CBFF3E] dark:text-gray-900"
                  : "bg-transparent text-gray-400"
              }`}
            >
              <div className={`self-center py-2 pl-2 `}>
                {index === 0 ? (
                  <div className="text-[10px] font-bold uppercase mb-1 -rotate-90">
                    {day.month}
                  </div>
                ) : null}
              </div>
              <div className="flex flex-col py-2 pr-2 ">
                <div className="text-xs font-medium uppercase mb-1">
                  {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"][index % 7]}
                </div>
                <div className="text-base font-bold">{day.day}</div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
