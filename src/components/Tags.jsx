import React from "react";

export const Tags = ({ tags, onClickFilter }) => {
  return (
    <>
      {tags.map((tag, index) => (
        <span
          onClick={() => onClickFilter(tag)}
          key={index}
          className="bg-[#F2F2F2] text-[#5CA595] px-3 py-1 rounded text-sm font-bold badgeHover"
        >
          {tag}
        </span>
      ))}
    </>
  );
};
