export const getWeatherData = async (city) => {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=36b7e482b92303025ab4eb5d0d1a6757&units=metric`
        );
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}
