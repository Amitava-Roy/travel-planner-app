import React from "react";

type TripHeaderProps = {
  userName: string;
};

export const TripHeader: React.FC<TripHeaderProps> = ({ userName }) => {
  const userInitial = userName.charAt(0);

  return (
    <div className="p-4 flex items-center justify-between">
      <div>
        <h2 className="title-text">Hello {userName}!</h2>
        <p className="font-medium text-base leading-[22px] font-Montserrat text-primary_text">
          Ready for the trip?
        </p>
      </div>

      <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-medium">
        {userInitial}
      </div>
    </div>
  );
};
