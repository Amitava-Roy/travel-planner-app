import React from "react";
import { Clock } from "lucide-react";
import Check from "../assets/check";
import Pending from "../assets/pending";

type StatusBadgeProps = {
  status: "confirmed" | "pending";
};

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  if (status === "confirmed") {
    return (
      <div className="flex items-center gap-1 font-mont font-bold text-[#90EB61] text-xs">
        <Check className="w-3 h-3" />
        <span>Confirmed</span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-1 font-mont font-bold text-[#FF6525] text-xs">
      <Pending className="w-4 h-4" />
      <span>Pending</span>
    </div>
  );
};
