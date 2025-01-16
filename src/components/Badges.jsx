import React from "react";

export const Badges = ({ badges }) => {
  return (
    <div className="flex gap-2">
      {badges.map((badge, index) => (
        <span
          key={index}
          className={`text-white px-2 py-1 rounded-full text-xs font-semibold ${
            index % 2 === 0 ? "bg-[#5CA595]" : "bg-[#2B3939]"
          }`}
        >
          {badge}
        </span>
      ))}
    </div>
  );
};
