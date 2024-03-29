import React, { useRef, useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = (): React$Element<any> => {
    const chartRef = useRef(null);
    const [chartData, setChartData] = useState({
        datasets: [],
    });

    function createGradient(ctx: CanvasRenderingContext2D, area: ChartArea) {
        const gradientStroke = ctx.createLinearGradient(0, 500, 0, 150);
        gradientStroke.addColorStop(0, '#fa5c7c');
        gradientStroke.addColorStop(1, '#727cf5');
        return gradientStroke;
    }

    useEffect(() => {
        const chart = chartRef.current;

        if (!chart) {
            return;
        }

        const chartData = {
            labels: ['Jannn', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [
                {
                    label: 'Orders',
                    backgroundColor: createGradient(chart.ctx, chart.chartArea),
                    borderColor: createGradient(chart.ctx, chart.chartArea),
                    hoverBackgroundColor: createGradient(chart.ctx, chart.chartArea),
                    hoverBorderColor: createGradient(chart.ctx, chart.chartArea),
                    categoryPercentage: 0.5,
                    barPercentage: 0.8,
                    data: [65, 59, 80, 81, 56, 89, 40, 32, 65, 59, 80, 81],
                },
                {
                    label: 'Revenue',
                    backgroundColor: '#e3eaef',
                    borderColor: '#e3eaef',
                    hoverBackgroundColor: '#e3eaef',
                    hoverBorderColor: '#e3eaef',
                    categoryPercentage: 0.5,
                    barPercentage: 0.8,
                    data: [89, 40, 32, 65, 59, 80, 81, 56, 89, 40, 65, 59],
                },
                
            ],
        };

        setChartData(chartData);
    }, []);

    // options
    const barChartOpts = {
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
            tooltips: {
                backgroundColor: '#727cf5',
                titleFontColor: '#fff',
                bodyFontColor: '#fff',
                bodyFontSize: 14,
                displayColors: false,
            },
        },
        scales: {
            y: {
                grid: {
                    display: false,
                    color: 'rgba(0,0,0,0.05)',
                },
                stacked: false,
                ticks: {
                    stepSize: 20,
                },
            },
            x: {
                stacked: false,
                grid: {
                    color: 'rgba(0,0,0,0.05)',
                },
            },
        },
    };

    return (
        <Card>
            <Card.Body>
                <h4 className="header-title mb-3">Bar Chart</h4>

                <div style={{ height: '320px' }} className="chartjs-chart">
                    <Bar ref={chartRef} data={chartData} options={barChartOpts} />
                </div>
            </Card.Body>
        </Card>
    );
};

export default BarChart;
