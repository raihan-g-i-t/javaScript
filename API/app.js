let URL = "https://official-joke-api.appspot.com/random_joke";
const jokes = document.querySelector("#jokes");
const button = document.querySelector("#btn");

const getJokes = async () => {
    let response = await fetch(URL);
    // console.log(response.json());
    let data = await response.json();
    // console.log(data);
    jokes.innerText = `${data.setup} ${data.punchline}`;
};

button.addEventListener("click", getJokes);