import React from "react";

const Overview = ({ overview, darkMode }) => {
  return (
    <>
      <h2 className={`${darkMode ? "text-white" : "text-gray-900"} font-semibold text-base md:text-3xl pb-5`}>Overview - Today</h2>
      <section className="max-w-7xl mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {overview.map((item, index) => (
          <article key={index} className={`${darkMode ? "bg-gray-800 hover:bg-gray-950 shadow-slate-700" : "bg-slate-100 hover:bg-slate-50 shadow-slate-300 text-nowrap"} p-5 rounded shadow`}>
            <ul className="flex items-center justify-between mb-5">
              <li className={`${darkMode ? "text-slate-400" : "text-slate-500"} font-bold`}>{item.title}</li>
              <li><img src={item.icon} alt={item.title} /></li>
            </ul>
            <ul className="flex items-center justify-between">
              <li className={`font-bold ${darkMode ? "text-white" : "text-gray-900"} text-3xl`}>{item.count}</li>
              <li className={`flex items-center font-bold text-sm ${item.color}`}>
                <img src={item.percentageIcon} alt="" className="w-3 mr-2" />{item.percentage}%
              </li>
            </ul>
          </article>
        ))}
      </section>
    </>
  );
};

export default Overview;