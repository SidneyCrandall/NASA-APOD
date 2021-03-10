export const getNasaAPOD = () => {

    return fetch("https://api.nasa.gov/planetary/apod?api_key=ruT6QThZMhqPNm83Ezpaq95uI5Z0qTt6xSHzEfbm")
        .then(response => response.json())
        .then(parsedResponse => {
            // do something with response here
            return parsedResponse;
        })
}