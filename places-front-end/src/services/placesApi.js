

export const getPlaces = () => fetch("https://aurelia-project.herokuapp.com/places").then(response => response.json());