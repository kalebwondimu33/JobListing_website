import React from "react";

interface Prop {
  responsibility: string;
}
const CheckCont = ({ responsibility }: Prop) => {
  return (
    <div className="flex align-center gap-2 mb-2">
      <CheckIcon />
      <p>{responsibility}</p>
    </div>
  );
};

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="#56CDAD"
      className="size-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    </svg>
  );
}

export default CheckCont;
