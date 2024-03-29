document.addEventListener("DOMContentLoaded", function () {
  const apikey = "90e3626c";
  var searchResultContainer = document.getElementById("searchResults");
  var loader = document.getElementById("loader");

  async function displayDefaultMovie() {
      var defaultmovie = "viking";
      const response = await fetch(`https://www.omdbapi.com/?s=${defaultmovie}&apikey=${apikey}`);
      const data = await response.json();
      console.log(data);
  
      if (data.Response === "True") {
          data.Search.forEach(movie => {
              var movieElement = createMovieElement(movie);
              searchResultContainer.appendChild(movieElement);
          });
      } else {
          searchResultContainer.textContent = "No movies found.";
      }
  
      loader.style.display = "none";
  }

  async function fetchData(movieName) {
      console.log(movieName);
  
      if (movieName === "") {
          movieName = "viking";
      }
  
      searchResultContainer.innerHTML = "";
  
      const response = await fetch(`https://www.omdbapi.com/?s=${movieName}&apikey=${apikey}`);
      const data = await response.json();
      console.log(data);
  
      if (data.Response === "True") {
          data.Search.forEach(movie => {
              var movieElement = createMovieElement(movie);
              searchResultContainer.appendChild(movieElement);
          });
      } else {
          searchResultContainer.textContent = "No movies found.";
          searchResultContainer.classList.add("noMoviesFound");
      }
  
      loader.style.display = "none";
  }

  function createMovieElement(movie) {
      var movieElement = document.createElement("div");
      movieElement.classList.add("searchResults");
  
      var title = document.createElement("h1");
      title.textContent = "Title: " + movie.Title;
      movieElement.appendChild(title);
  
      var release = document.createElement("h1");
      release.textContent = "Release Date: " + movie.Year;
      movieElement.appendChild(release);
  
      var genre = document.createElement("h1");
      genre.textContent = "Genre: " + movie.Type;
      movieElement.appendChild(genre);
  
      var poster = document.createElement("img");
      poster.src = movie.Poster;
      movieElement.appendChild(poster);
  
      var watchButton = document.createElement("button");
      watchButton.textContent = "Watch Movie";
      watchButton.addEventListener("click", function () {
          window.open("https://youtu.be/IVMW0n5payI", "_blank");
      });
      movieElement.appendChild(watchButton);
  
      return movieElement;
  }

  displayDefaultMovie(); 

  var searchButton = document.querySelector(".searchbar button");
  searchButton.addEventListener("click", function () {
      var movieName = document.getElementById("movieName").value;
      fetchData(movieName);
  

      loader.style.display = "block";
  });

  var movieNameInput = document.getElementById("movieName");
  movieNameInput.addEventListener("keyup", function (event) {
      if (event.keyCode === 13) {
          var movieName = movieNameInput.value;
          fetchData(movieName);
  
          loader.style.display = "block";
      }
  });
});