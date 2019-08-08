export const addPlace = (place) => fetch("https://aurelia-project.herokuapp.com/places", {method: "POST", mode: "cors", headers: {"Content-Type":"application/json"}, body: JSON.stringify(place)}).then(response => response.status === 200);


export const getPlaces = () => fetch("https://aurelia-project.herokuapp.com/places")
.then(response => response.json())
.then(places => {
    console.log(places) 
    const filteredPlaces = places.filter(place =>
        !!place.location && !!place.location.latitude && !!place.location.longitude 
    )
    return filteredPlaces
});

