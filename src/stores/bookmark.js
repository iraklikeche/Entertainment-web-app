import { ref, onBeforeMount } from "vue";
import { defineStore } from "pinia";
import data from "../data/data.json";

export const useBookmarkStore = defineStore("bookmark", () => {
  const bookmarked = ref([]);

  // const initFromLocalStorage = () => {
  //   const storedBookmarked = localStorage.getItem("bookmarkedMovies");
  //   if (storedBookmarked) {
  //     bookmarked.value = JSON.parse(storedBookmarked);
  //   }
  // };
  const initFromLocalStorage = () => {
    const storedBookmarked = localStorage.getItem("bookmarkedMovies");
    if (storedBookmarked) {
      const parsedBookmarked = JSON.parse(storedBookmarked);
      // Set isBookmarked property for each movie item
      parsedBookmarked.forEach((movie) => {
        movie.isBookmarked = true; // Assuming the movie is bookmarked
      });
      bookmarked.value = parsedBookmarked;
    }
  };

  const setBookmarkedMovies = (movies) => {
    // Filter movies with isBookmarked set to true and update the bookmarked variable
    bookmarked.value = movies.filter((movie) => movie.isBookmarked);
    console.log(bookmarked.value);
  };

  function addBookmark(movie) {
    if (!bookmarked.value.some((item) => item.id === movie.id)) {
      bookmarked.value.push(movie);
    }
  }

  function removeBookmark(movie) {
    const index = bookmarked.value.findIndex((item) => item.id === movie.id);
    if (index !== -1) {
      bookmarked.value.splice(index, 1);
    }
  }

  onBeforeMount(initFromLocalStorage);

  return { bookmarked, setBookmarkedMovies, addBookmark, removeBookmark };
});
