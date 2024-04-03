//console.log('%c HI', 'color: firebrick')
function fetchAndDisplay(){
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    fetch(imgUrl)
    .then(res=>res.json())
    .then(data=>{
            data.message.forEach(image => {
                const img = document.createElement('img');
                img.src = image;
                img.alt = "Dog Image";
                const container = document.getElementById("dog-image-container");
                container.appendChild(img); 
            });
        
        
    })
}
// fetch and list breeds 
function fetchAndList() {
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    fetch(breedUrl)
        .then(res => res.json())
        .then(breeds => {
            const breedList = document.getElementById('dog-breeds');
            Object.keys(breeds.message).forEach(breed => {
                const li = document.createElement('li');
                li.innerHTML = breed;
                breedList.appendChild(li);
            });

            // Add event listener to the dropdown
            const dropdown = document.getElementById('breed-dropdown');
            dropdown.addEventListener('change', function() {
                const selectedLetter = this.value;
                filterBreeds(selectedLetter);
            });
        })
        .catch(error => console.error("Error fetching breeds:", error));
}
//filter them based on the dropdown selection
function filterBreeds(letter) {
    const breedList = document.getElementById('dog-breeds');
    const breeds = Array.from(breedList.children);
    breeds.forEach(breed => {
        if (breed.textContent.toLowerCase().startsWith(letter)) {
            breed.style.display = 'block';
        } else {
            breed.style.display = 'none';
        }
    });
}

document.addEventListener("DOMContentLoaded", fetchAndDisplay)
document.addEventListener("DOMContentLoaded", fetchAndList)
