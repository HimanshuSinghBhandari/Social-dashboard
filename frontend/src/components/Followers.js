import React from 'react';

const Followers = ({ followers, darkMode }) => {
  return (
    <section className="relative z-10 max-w-7xl mx-auto pb-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 border-r-900">
      {followers.map((item, index) => {
        return (
          <article key={index} className={`${darkMode ? "bg-gray-800 hover:bg-gray-950 shadow-slate-700" : "bg-slate-100 hover:bg-slate-50 shadow-slate-300"} p-5 rounded-lg shadow border-t-8 ${item.highlighter}`}>
            <ul className="flex items-center justify-center text-center">
              <li><img src={item.icon} alt={item.username} className="mr-2" />
              </li>
              <li className={`text-sm ${darkMode ? "text-slate-400" : "text-slate-500"} font-bold`}>@{item.username}</li>
            </ul>
            <h2 className={`text-4xl font-bold ${darkMode ? "text-white" : "text-gray-900"} text-center my-5`}>{item.count}<span className={`text-sm block ${darkMode ? "text-slate-400" : "text-slate-500"} font-normal uppercase tracking-widest"`}>{item.countLabel}</span></h2>
            <p className={`text-center flex items-center justify-center text-sm font-bold text-${item.rank.slice(19, 21) === "up" ? 'emerald' : 'rose'}-600`}>
              <img src={item.rank} alt={index} className="mr-2 w-3" />{item.todayCount} today</p>
          </article>
        )
      })}
    </section >
  );
};

export default Followers;