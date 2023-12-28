export const getWeatherData = async (city) => {
    //2077319a5b97af9b42a11d0e5cad8d9e
    try {
        const response = await fetch(
            // `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a1ad164b504843fa402d95462b500cf1&lang=ru`
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=36b7e482b92303025ab4eb5d0d1a6757&units=metric`
        );

        return await response.json();
    } catch (error) {
        console.error(error);
    }
}