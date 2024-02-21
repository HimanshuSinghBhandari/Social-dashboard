import React from 'react';

const UserInformation = ({ username, email, age, city, country, occupation, hobbies, socialMedia, darkMode }) => {
    return (
        <div className={`${darkMode ? "bg-gray-800 hover:bg-gray-950" : "bg-slate-100 hover:bg-slate-50"} rounded-lg p-4 shadow-lg`}>
            <h2 className="text-xl font-semibold mb-4">User Information</h2>
            <p className={`${darkMode ? "text-slate-400" : "text-slate-500"} font-semibold mb-1`}>Username: <span className={`${darkMode ? "text-slate-300" : "text-slate-700"} font-semibold`}>{username}</span></p>
            <p className={`${darkMode ? "text-slate-400" : "text-slate-500"} font-semibold mb-1`}>Email: <span className={`${darkMode ? "text-slate-300" : "text-slate-700"} font-semibold`}>{email}</span></p>
            <p className={`${darkMode ? "text-slate-400" : "text-slate-500"} font-semibold mb-1`}>Age: <span className={`${darkMode ? "text-slate-300" : "text-slate-700"} font-semibold`}>{age}</span></p>
            <p className={`${darkMode ? "text-slate-400" : "text-slate-500"} font-semibold mb-1`}>City: <span className={`${darkMode ? "text-slate-300" : "text-slate-700"} font-semibold`}>{city}</span></p>
            <p className={`${darkMode ? "text-slate-400" : "text-slate-500"} font-semibold mb-1`}>Country: <span className={`${darkMode ? "text-slate-300" : "text-slate-700"} font-semibold`}>{country}</span></p>
            <p className={`${darkMode ? "text-slate-400" : "text-slate-500"} font-semibold mb-1`}>Occupation: <span className={`${darkMode ? "text-slate-300" : "text-slate-700"} font-semibold`}>{occupation}</span></p>
            <p className={`${darkMode ? "text-slate-400" : "text-slate-500"} font-semibold mb-1`}>Hobbies: <span className={`${darkMode ? "text-slate-300" : "text-slate-700"} font-semibold`}>{hobbies?.join(', ')}</span></p>
            <p className={`font-semibold ${darkMode ? "text-slate-400" : "text-slate-500"} mb-1`}>Social Media: <span className={`${darkMode ? "text-slate-300" : "text-slate-700"} font-semibold text-slate-300`}>{socialMedia?.instagram}, {socialMedia?.youtube}</span></p>
        </div>
    );
}

export default UserInformation;