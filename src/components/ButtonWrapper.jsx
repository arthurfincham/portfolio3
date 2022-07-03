import React, { useState } from 'react';

export default function ButtonWrapper({ children, label }) {
  const [showLabel, setShowLabel] = useState(false);
  return (
    <div
      className="flex flex-col items-center justify-evenly h-[150px] "
      onMouseEnter={() => setShowLabel(!showLabel)}
      onMouseLeave={() => setShowLabel(!showLabel)}
    >
      {children}
      <p className="font-a2 text-slate-500 dark:text-slate-50 h-[30px] m-0">
        {showLabel && label}
      </p>
    </div>
  );
}
