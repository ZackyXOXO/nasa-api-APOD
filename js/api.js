const url = 'https://api.nasa.gov/planetary/apod?api_key='
const api_key = config.NASA_API_KEY

const fetchDataNasa = async () => {
    try {
        const respone = await fetch(`${url}${api_key}`)
        const data = await respone.json()
        console.log("NASA APOD DATA, " , data)
        displayDataNasa(data)
    } catch (e){
        console.log(e)
    }
}

const displayDataNasa = data => {
    document.getElementById('title').textContent = data.title
    document.getElementById('date').textContent = data.date
    document.getElementById('picture').src = data.hdurl
    document.getElementById('explanation').textContent = data.explanation
}
// displayDataNasa()
fetchDataNasa()