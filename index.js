
const url = 'https://whoa.onrender.com/whoas/random';
const title = document.getElementById("title");
const år = document.getElementById("år");
const regisør = document.getElementById("regisør");
const rollefigur = document.getElementById("rollefigur");
const tidspunkt = document.getElementById("tidspunkt");
const varighet = document.getElementById("varighet");
const poster = document.getElementById("poster");
const video = document.getElementById("video");

document.getElementById("ny-film").addEventListener("click", 
Whoa);
async function Whoa() {
  try {
    const response = await fetch(url);
 
    if (!response.ok) {
      throw new Error('Feil fra API: ' + response.status);
    }
 
    const data = await response.json();
    console.log(data[0]);

   title.innerText = data[0].movie;
   år.innerText = data[0].year;
   regisør.innerText = data[0].director;
   rollefigur.innerText = data[0].character;
   tidspunkt.innerText = data[0].timestamp;
   varighet.innerText = data[0].movie_duration;
   poster.src = data[0].poster;
   video.src = data[0].video["480p"];

  } catch (error) {
    console.log('Noe gikk galt:', error.message);
  }
}
 
Whoa();