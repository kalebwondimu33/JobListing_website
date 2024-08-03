import React from "react";

type Icon = React.ComponentType;
interface Text {
  text: string;
  date: string;
  icon: Icon;
}

const DateComp = ({ text, date, icon: Icon }: Text) => {
  return (
    <div className="flex items-start gap-3 mt-5 mb-3">
      <Icon />
      <div>
        <p className="font-light">{text}</p>
        <p className="font-bold">{date}</p>
      </div>
    </div>
  );
};

function PlusIcon() {
  return (
    <div className="border p-2 rounded-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="#26A4FF"
        className="size-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>
    </div>
  );
}

export default DateComp;
