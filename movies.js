// Define the Movie class

  // title, cast, description, rating

  // Method to update the rating of the movie

  // Method to display the movie's information

class Movie {
  #title;
  #cast;
  #description;
  #rating;
  constructor(title,cast,description,rating) {
    this.#title = title;
    this.#cast = cast;
    this.#description = description;
    this.#rating = rating;
  }
  updateRating(newRating) {
    this.#rating = newRating;
  }
  displayInfo() {
    let result = '';
    result += `<strong>Title:</strong> ${this.#title}<br>`;
    result += `<strong>Cast:</strong> ${this.#cast}<br>`;
    result += `<strong>Description:</strong> ${this.#description}<br>`;
    result += `<strong>Rating:</strong> ${this.#rating}<br>`;
    output.innerHTML = result;
  }
  returnTitle() {
    return this.#title
  }
}

function updateMovieRating(title,newRating) {
  for (let i=0; i<movies.length; i++){
    if (movies[i].returnTitle() === title) {
      movies[i].updateRating(newRating)
    }
  }
}

let movies = [];
let output = document.getElementById('movie-info');


let movie1 = new Movie('Shrek',['Shrek', ' Donkey', ' Fiona', ' Pinochio', ' The Three Little Pigs'],'Once upon a time, in a far away swamp, there lived an ogre named Shrek whose precious solitude is suddenly shattered by an invasion of annoying fairy tale characters. They were all banished from their kingdom by the evil Lord Farquaad. Determined to save their home, not to mention his, Shrek cuts a deal with Farquaad and sets out to rescue Princess Fiona to be Farquaad\'s bride. Rescuing the Princess may be small compared to her deep, dark secret.',10)
movie1.displayInfo()
movies.push(movie1)

movie1.updateRating(10.5)
movie1.displayInfo()

updateMovieRating('Shrek',11)
movie1.displayInfo()

// Test your implementation

// Display the initial information of the movie

// Update the rating of the movie

// Display the updated information of the movie