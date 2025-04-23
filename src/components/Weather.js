import React, { useEffect, useState } from "react";
import axios from "axios";

const Weather = ({ city }) => {
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!city) return;

        const fetchWeather = async () => {
            setLoading(true);
            try {
                const apiKey = "08fa47d48addb8cab163e1b0b47d4256"; 
                const response = await axios.get(
                    'https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric'
                );
                setWeatherData(response.data);
            } catch (error) {
                console.error("Error fetching weather:", error);
                setWeatherData(null);
            }
            setLoading(false);
        };

        fetchWeather();
    }, [city]);

    return (
        <div className="weather-info">
            {loading ? (
                <p>Loading weather for {city}...</p>
            ) : weatherData ? (
                <>
                    <h3>Weather in {weatherData.name}</h3>
                    <p>Temperature: {weatherData.main.temp}°C</p>
                    <p>Condition: {weatherData.weather[0].description}</p>
                </>
            ) : city ? (
                <p>Could not fetch weather for "{city}".</p>
            ) : (
                <p>Enter an address to see the weather.</p>
            )}
        </div>
    );
};

export default Weather;