const BASE_URL = 'https://dog.ceo/api/breeds/image/random';
const catBtn = document.getElementById('change-dog');
const dogImg = document.getElementById('dog');
const SOUND = new Audio();
SOUND.src = "snd/bark.mp3";

/*
const getDogs = async() => {
    try {
        const data = await fetch(BASE_URL);
        const json = await data.json();

        return json.message;
    } catch (e) {
        console.log(e.message);
    }
};
*/

const getDogs = async() => {
    const data = await fetch(BASE_URL)
        .then((res) => res.json())
        .catch((e) => console.log(e));

    return data.message;
};

const loadImg = async() => {
    dogImg.src = await getDogs();
};

catBtn.addEventListener('click', () => {
    loadImg();
    SOUND.play();
    SOUND.volume = 0.5;
});

loadImg();