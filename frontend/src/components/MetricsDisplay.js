import React from 'react';

const MetricsDisplay = ({ followers, posts, likes, comments, engagementRate, darkMode }) => {
    return (
        <div className={`${darkMode ? "bg-gray-800 hover:bg-gray-950" : "bg-slate-100 hover:bg-slate-50"}  rounded-lg p-4 shadow-lg`}>
            <h2 className="text-xl font-semibold mb-4">Metrics Display</h2>
            <p className={`${darkMode ? "text-slate-400" : "text-slate-500"} font-semibold`}>Followers: <span className={`${darkMode ? "text-slate-300" : "text-slate-700"}  font-semibold`}>{followers}</span></p>
            <p className={`${darkMode ? "text-slate-400" : "text-slate-500"} font-semibold`}>Posts: <span className={`${darkMode ? "text-slate-300" : "text-slate-700"} font-semibold`}>{posts}</span></p>
            <p className={`${darkMode ? "text-slate-400" : "text-slate-500"} font-semibold`}>Likes: <span className={`${darkMode ? "text-slate-300" : "text-slate-700"} font-semibold`}>{likes}</span></p>
            <p className={`${darkMode ? "text-slate-400" : "text-slate-500"} font-semibold`}>Comments: <span className={`${darkMode ? "text-slate-300" : "text-slate-700"} font-semibold`}>{comments}</span></p>
            <h2 className="text-xl font-semibold my-4">Engagement Rate</h2>
            <div className="flex items-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex-shrink-0">
                    <div className="flex items-center justify-center h-full">
                        <span className="text-white text-2xl">{engagementRate}</span>
                    </div>
                </div>
                <p className={`${darkMode ? "text-slate-400" : "text-slate-500"} font-semibold ml-4`}>
                    <span className={darkMode ? "text-slate-300" : "text-slate-700"}>{likes}</span> Likes <br />
                    <span className={darkMode ? "text-slate-300" : "text-slate-700"}>{comments}</span> Comments
                </p>
            </div>
        </div>
    );
};

export default MetricsDisplay;