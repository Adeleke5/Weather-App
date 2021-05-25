
const key = 'T2VbGbp8gBAQwU1t1qMzAquK3JGI2T6r';


const getLocation = async (city) => {

    const endpoint = `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${key}&q=${city}`;

    const getter = await fetch(endpoint);
    const data = await getter.json();

    return(data[0]);
};




const getWeather = async (loc) => {

    const response = await fetch(`http://dataservice.accuweather.com/currentconditions/v1/${loc.Key}?apikey=${key}`);
    const data = await response.json();

    return{loc, data};
}




