import React, { useState } from "react";
import { Clock, Users, Calendar, MoveUpRight, MoveRight } from "lucide-react";
import { TripHeader } from "./TripHeader";
import { StatusBadge } from "./StatusBadge";
import { DaySelector } from "./DaySelector";
import plane from "../assets/Plane.png";
import Star from "../assets/star";

type TripDetailsScreenProps = {
  tripDetails: {
    destination: string;
    duration: string;
    companions: string;
  };
};

const cardFooterArr = [
  {
    id: 1,
    name: "Duration",
    value: "8 Days",
    icon: <Clock className="w-4 h-4 text-[#D1F462]" />,
  },
  {
    id: 2,
    name: "Group Size",
    value: "4 (2M,2F)",
    icon: <Users className="w-4 h-4 text-[#D1F462]" />,
  },
  {
    id: 3,
    name: "Activities",
    value: "14",
    icon: <Calendar className="w-4 h-4 text-[#D1F462]" />,
  },
];

export const TripDetailsScreen: React.FC<TripDetailsScreenProps> = ({
  tripDetails,
}) => {
  const [selectedDay, setSelectedDay] = useState(27);

  // Mock data for the trip details
  const mockTripData = {
    destination: tripDetails.destination || "Tokyo",
    userName: "Chhavi",
    startDate: "27.01.2025",
    endDate: "02.02.2025",
    duration: "8 Days",
    groupSize:
      tripDetails.companions === "Couple"
        ? "2"
        : tripDetails.companions === "Family"
        ? "4 (2M,2F)"
        : tripDetails.companions === "Friends"
        ? "4"
        : "1",
    activities: "14",
    flight: {
      date: "26.01.2025",
      time: "10:50 am",
      from: "DEL",
      fromCity: "Delhi, India",
      to: "NRT",
      toCity: "Narita, Tokyo",
    },
    hotels: [
      {
        name: "Shinagawa Prince Hotel",
        checkIn: "26.01.2025, 11:15 pm",
        checkOut: "28.01.2025, 11:15 am",
        nights: "2",
        status: "confirmed",
      },
      {
        name: "Mercure Tokyo Hotel",
        checkIn: "28.01.2025, 6:00 pm",
        checkOut: "30.01.2025, 11:00 am",
        nights: "2",
        status: "pending",
      },
    ],
    days: [
      {
        day: 27,
        date: "27.01.2025",
        activities: [
          {
            name: "Senso-ji Temple & Nakamise Shopping Street",
            location: "Senso-ji",
            timing: "8:15 am Morning",
            duration: "3 hours",
            pickup: "From Hotel",
            image:
              "https://images.pexels.com/photos/5599613/pexels-photo-5599613.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          },
          {
            name: "Tokyo Sky Tree",
            location: "",
            timing: "1:00 pm Afternoon",
            duration: "3 hours",
            pickup: "From Nakamise Street",
            image:
              "https://images.pexels.com/photos/5563472/pexels-photo-5563472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          },
          {
            name: "Kimono Wearing",
            location: "",
            timing: "Anytime before 8:00pm",
            duration: "1-2 hours",
            pickup: "From Hotel",
            image:
              "https://images.pexels.com/photos/5662155/pexels-photo-5662155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          },
        ],
      },
      {
        day: 28,
        date: "28.01.2025",
        activities: [
          {
            name: "Tokyo DisneySea",
            location: "Urayasu",
            timing: "9:00 am Full Day",
            duration: "8 hours",
            pickup: "From Hotel",
            image:
              "https://images.pexels.com/photos/75747/pexels-photo-75747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          },
        ],
      },
    ],
  };

  const activeDayData =
    mockTripData.days.find((day) => day.day === selectedDay) ||
    mockTripData.days[0];

  return (
    <div className="max-w-md mx-auto pb-16">
      <TripHeader userName={mockTripData.userName} />

      {/* Trip Summary Card */}
      <div className="flex flex-col px-4">
        <p className="font-bold  text-lg leading-6 font-Mont text-primary_text">
          Your Upcoming Trip
        </p>
        <div
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/208701/pexels-photo-208701.jpeg')",
          }}
          className="mt-4  flex flex-col justify-between w-full h-[330px] rounded-[16px] overflow-hidden relative  bg-cover bg-center "
        >
          <div className="absolute inset-0 bg-black/30"></div>

          <div className="flex justify-between p-5 ">
            <div className="flex flex-col gap-3">
              <h2 className="font-extrabold text-[40px] leading-[24px] z-10  text-[#F5F5F5]  font-MODERNIZ">
                TOKYO
              </h2>
              <p className="font-semibold text-xs font-montserrat text-[#F5F5F5] z-10">
                27.01.2025 - 02.02.2025
              </p>
            </div>
            <MoveUpRight className="text-[#F5F5F5] z-10" />
          </div>
          <div className="backdrop-blur-sm p-4 flex justify-center gap-7">
            {cardFooterArr?.map((item) => (
              <div key={item.id} className="flex gap-1">
                <div className="w-6 h-6 rounded-full bg-[#292929] flex items-center justify-center">
                  {item.icon}
                </div>
                <div className="flex flex-col ">
                  <span className="text-xs font-medium text-[#F5F5F5]">
                    {item.value}
                  </span>
                  <span className="text-[10px] font-normal text-[#ffffffa4]">
                    {item.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Trip Details */}

      {/* Flight Details */}
      <div className="mt-8 mx-4">
        <div className="bg-[#313DDF] rounded-xl p-4 text-white relative overflow-hidden">
          <div className="flex flex-col justify-between gap-3">
            <div className="flex justify-between">
              <div className="flex flex-col gap-1">
                <h3 className="font-mont font-bold text-base text-[#FFFFFF]">
                  Flight Details
                </h3>
                <p className="font-montserrat font-normal text-sm text-[#ffffffd3]">
                  26.01.2025, 10:50 am{" "}
                </p>
              </div>
              <a
                href=""
                className="underline text-[10px] font-extrabold leading-4 text-[#ffffff]"
              >
                See all
              </a>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex flex-col gap-1">
                <h4 className="font-mont font-bold text-base align-middle text-[#FFFFFF]">
                  DEL
                </h4>
                <p className="font-mont font-normal text-xs text-[#FFFFFF">
                  Delhi, India
                </p>
              </div>
              <MoveRight className="text-[#FFFFFF] w-4 h-4" />
              <div className="flex flex-col gap-1">
                <h4 className="font-mont font-bold text-base align-middle text-[#FFFFFF]">
                  DEL
                </h4>
                <p className="font-mont font-normal text-xs text-[#FFFFFF">
                  Delhi, India
                </p>
              </div>
            </div>
          </div>
          <img
            src={plane}
            alt="Airplane"
            className="absolute bottom-0 right-0 h-24 opacity-80 "
          />
        </div>
      </div>

      {/* Accommodation */}
      <div className="mt-6 mx-4">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-mont font-bold text-lg leading-6 text-primary_text">
            Accomodation
          </h3>
          <a
            href="#"
            className="underline text-sm dark:text-[#D1F462] text-[#3643FB] font-medium "
          >
            See all
          </a>
        </div>
        <div className="w-full overflow-x-auto">
          <div className="flex gap-4 items-stretch">
            {mockTripData.hotels.map((hotel, index) => (
              <div
                key={index}
                className="bg-accordion_card_bg w-[200px] rounded-2xl shadow-sm overflow-hidden border border-[#BFBFBF] dark:border-none"
              >
                <div className="h-32  relative">
                  <img
                    src={`https://images.pexels.com/photos/${
                      index === 0 ? "1001965" : "1838554"
                    }/pexels-photo-${
                      index === 0 ? "1001965" : "1838554"
                    }.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}
                    alt={hotel.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-2 left-2 flex items-center gap-0.5 bg-[#3643FB] text-[#F5F5F5] p-0.5 rounded-sm font-mont font-bold text-[8px] leading-4 ">
                    <Star className="w-3 h-3 text-[#F5F5F5]" />
                    <span>4.0 Very Good</span>
                  </div>
                </div>

                <div className="p-2">
                  <div className="font-mont font-bold text-sm tracking-normal line-clamp-1 text-primary_text">
                    {hotel.name}
                  </div>
                  <div className="font-mont font-normal  text-xs text-primary_text mt-1">
                    <span className="font-bold">Check in:</span>{" "}
                    {hotel.checkIn.split(",")[0]}
                  </div>
                  <div className="font-mont font-normal  text-xs text-primary_text mt-1">
                    <span className="font-bold">Check out:</span>{" "}
                    {hotel.checkOut.split(",")[0]}
                  </div>
                  <div className="mt-2 flex items-center justify-between">
                    <p className="font-mont  text-xs text-primary_text font-bold">
                      2 Nights
                    </p>
                    <StatusBadge
                      status={hotel.status as "confirmed" | "pending"}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Activities */}
      <div className="mt-6 mx-4">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-mont font-bold text-lg leading-6 text-primary_text">
            Activities
          </h3>
          <a
            href="#"
            className="underline text-sm dark:text-[#D1F462] text-[#3643FB] font-medium "
          >
            See all
          </a>
        </div>

        <DaySelector
          days={mockTripData.days.map((day) => ({
            day: day.day,
            date: day.date,
          }))}
          selectedDay={selectedDay}
          onSelectDay={setSelectedDay}
        />

        <div className="mt-4">
          <div className="flex items-center gap-1 mb-6 text-xs font-medium">
            <div className="flex gap-2 items-center bg-[#3643FB] dark:bg-[#D3F462] px-2 py-0.5 rounded-full">
              <div className="font-medium text-white dark:text-[#0B0809]">
                Day {activeDayData.day}
              </div>
              <div className="text-white dark:text-[#0B0809]">
                {activeDayData.date}
              </div>
            </div>
            <div className="text-[#3643FB] dark:text-[#D3F462]  px-2 py-0.5 rounded-full ">
              {activeDayData.activities.length} Activities
            </div>
          </div>

          <div className="space-y-4">
            {activeDayData.activities.map((activity, index) => (
              <div
                key={index}
                className="bg-accordion_card_bg rounded-xl shadow-sm overflow-hidden border border-[#BFBFBF] dark:border-none"
              >
                <div className="flex items-stretch">
                  <div className="w-32 h-32 flex-shrink-0 bg-accordion_card_bg">
                    <img
                      src={activity.image}
                      alt={activity.name}
                      className="w-full  object-cover"
                    />
                  </div>

                  <div className="p-3 flex-1 flex flex-col justify-between">
                    <h4 className="font-mont font-bold text-sm leading-[15px] align-middle text-primary_text">
                      {activity.name}
                    </h4>
                    {/* {activity.location && (
                      <div className="text-xs text-gray-400 mt-1">
                        {activity.location}
                      </div>
                    )} */}
                    <div className="text-xs font-normal font-Montserrat text-primary_text flex flex-col gap-1">
                      <div>
                        <span className="font-bold"> Timing: </span>{" "}
                        {activity.timing}
                      </div>
                      <div>
                        <span className="font-bold"> Duration:</span>{" "}
                        {activity.duration}
                      </div>
                      <div>
                        <span className="font-bold"> Pick up: </span>
                        {activity.pickup}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
