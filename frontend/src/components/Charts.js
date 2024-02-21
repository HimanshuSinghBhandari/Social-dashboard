import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';

// ChartTypesDropdown Component.
const ChartTypesDropdown = ({ onChange, option, darkMode }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const handleOptionClick = (type) => {
        setIsOpen(false);
        onChange(type);
    };

    return (
        <div className="relative inline-block mt-1" ref={dropdownRef}>
            <button
                className={`${darkMode ? "bg-slate-700 hover:bg-slate-800 text-white" : "bg-slate-300 hover:bg-slate-200 text-gray-800"} font-semibold py-1 px-2 rounded text-sm`}
                onClick={() => setIsOpen(!isOpen)}
            >
                Chart Type
            </button>
            {isOpen && (
                <div className={`absolute z-10 mt-2 py-2 w-32 ${darkMode ? "bg-slate-800 border-slate-900" : "bg-slate-100 border-gray-300"} border rounded`}>
                    {option.map((opt, index) => {
                        return (
                            <button
                                key={index}
                                className={`block px-4 py-2 w-full text-sm text-left ${darkMode ? "text-white hover:bg-slate-600" : "text-gray-800 hover:bg-slate-300"}`}
                                onClick={() => handleOptionClick(opt)}
                            >
                                {opt}
                            </button>
                        )
                    })}
                </div>
            )}
        </div>
    );
};

// Main Chart.
const Charts = ({ data, darkMode }) => {
    const chartRef = useRef(null);
    const [chartType, setChartType] = useState("bar");

    useEffect(() => {
        if (chartRef.current) {
            chartRef.current.destroy();
        }

        // Chart.js expects data in a specific format, so we need to convert the data.
        const chartLabels = data.labels;
        const chartValues = data.values;

        const ctx = document.getElementById('chart');

        const newChartInstance = new Chart(ctx, {
            type: chartType, // Use the selected chart type.
            data: {
                labels: chartLabels,
                datasets: [
                    {
                        label: 'Data',
                        data: chartValues,
                        backgroundColor: 'rgba(75, 192, 192, 0.6)',
                    },
                ],
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true,
                    },
                },
            },
        });

        return () => {
            if (newChartInstance) {
                newChartInstance.destroy();
            }
        };
    }, [data, chartType]); // Include chartType in the dependency array.

    // handle Chart-Type Change.
    const handleChartTypeChange = (type) => {
        setChartType(type);
    };

    return (
        <div className={`${darkMode ? "bg-gray-800 hover:bg-gray-950" : "bg-slate-100 hover:bg-slate-50"} rounded-lg p-4 shadow-lg`}>
            <div className="flex items-center gap-2 mb-4">
                <h2 className="text-xl font-semibold">Charts</h2>
                <ChartTypesDropdown
                    onChange={handleChartTypeChange}
                    option={data.options}
                    darkMode={darkMode}
                />
            </div>
            <canvas id="chart" height="250" />
        </div>
    );
};

export default Charts;