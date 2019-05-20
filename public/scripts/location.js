console.log('hello')

const getCurrentLocation = () => new Promise((resolve, reject) => {
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(
            position => {
                resolve(locationSuccess(position))
            },
            error => {
                reject(locationError(error))
            }
        )
    } else {
        alert('Geolocation is not supported by your browser')
    }
})

const locationSuccess = (position) => {
    const userPosition = {
        latitude : position.coords.latitude,
        longitude : position.coords.longitude
    }
    return userPosition;    
}

const locationError = (error) => {
    return error
}

window.onload = () => {
    getCurrentLocation()
    .then(response => {
        fetch('/locate', {
            method: 'POST',
            body: JSON.stringify(response),
            headers:{
                'Content-Type': 'application/json'
              }
        })
        .catch(error => console.log(error))
    })
    .catch(error => console.log(error))
}