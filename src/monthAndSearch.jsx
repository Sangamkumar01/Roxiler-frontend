import React from "react";

const MonthAndSearch = ({
  selectedMonth,
  onSearchChange,
  value,
  onMonthChange,
  onClear,
}) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (
    <div className="flex flex-col md:flex-row justify-between m-5 gap-10 items-center">
      {/* Search Box */}
      <div className="bg-slate-200 font-semibold w-full flex justify-between items-center rounded-xl p-2 gap-4">
        <input
          className=" bg-slate-300 rounded-xl p-3 focus:outline-none w-full"
          type="text"
          value={value}
          onChange={onSearchChange}
          placeholder="Search transactions..."
        />
        <button className=" bg-red-500 rounded-xl p-3" onClick={onClear}>
          Clear
        </button>
      </div>

      {/* Month Changer */}
      <div className="container max-w-max bg-slate-200 rounded-xl p-2 ">
        <select
          className="bg-slate-300 font-semibold rounded-xl p-3 focus:outline-none"
          value={selectedMonth}
          onChange={onMonthChange}
        >
          {months.map((month, index) => (
            <option key={index} value={month}>
              {month}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default MonthAndSearch;
