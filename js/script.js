const sorted = movies.sort((a,b) => b.year - a.year)

// console.log(sorted);

const favourites = sorted.slice(0,16)

// console.log(favourites);

const filtered = movies.filter(function(movie) {
    return movie.genres.includes("Action")
})

console.log("Filtered: ",filtered);

const genres = movies.reduce(function (acc, movie) {
    movie.genres.forEach(function(genre) {
        if (!acc.includes(genre)) {
            acc.push(genre)
        }
    });
    return acc
}, [])

console.log("Genres: ",genres);

const wrapper = document.querySelector(".box-wrapper");

favourites.forEach((movie) => {
    const cardContainer  = document.createElement("div");
    cardContainer.classList.add("card");

    cardContainer.innerHTML = `<img src="${movie.thumbnail}" alt="${movie.title}">`;
    
    const cardTitle = document.createElement("div");
    cardTitle.classList.add("title");
    cardTitle.innerHTML = `<p>${movie.title}</p>`;

    const cardDescriptions = document.createElement("div");
    cardDescriptions.classList.add("description");
    cardDescriptions.innerHTML = `<p class="cut-text">${movie.extract}</p>`;

    cardContainer.append(cardTitle, cardDescriptions);
    wrapper.append(cardContainer);
});
