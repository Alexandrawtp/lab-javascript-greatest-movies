// // Iteration 1: All directors? - Get the array of all directors.

// let getAllDirectors = (function (arr){
//     arr.filter(function(ele) {
//         return arr.ele;
//     })
// } 

// let mappedArray = getAllDirectors(movies);
// console.log(mappedArray);

function getAllDirectors(arr) {
    return arr.map(x => x.director);
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(arr) {
    return arr.filter(
        x => x.director == "Steven Spielberg" && x.genre.includes("Drama")
    ).length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(arr) {
    if (arr.length == 0) {
        return 0;
    }
    let res = arr.reduce((x, y) => {
        if (y.rate) {
            return x + y.rate;
        } else {
            return x;
        }
     }, 0);
    return parseFloat((res  / arr.length).toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(arr) {
    return ratesAverage(arr.filter(x => x.genre.includes("Drama")));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(arr) {
    return arr.sort((x, y) => {
        if (x.year < y.year) {
            return -1;
        }
        else if (x.year > y.year) {
            return 1;
        }
        else {
            if (x.title < y.title) {
                return -1;
            }
            else {
                return 1;
            }
        }
    }).map(x => x)
}



// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arr) {
    return arr.map(x => x.title).sort().slice(0, 20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes



// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
