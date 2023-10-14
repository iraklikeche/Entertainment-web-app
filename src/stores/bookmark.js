import { ref, onBeforeMount } from "vue";
import { defineStore } from "pinia";
import data from "../data/data.json";

export const useBookmarkStore = defineStore("bookmark", () => {
  const bookmarked = ref([]);

  const setBookmarkedMovies = (movies) => {
    // Filter movies with isBookmarked set to true and update the bookmarked variable
    bookmarked.value = movies.filter((movie) => movie.isBookmarked);
    // console.log(bookmarked.value);
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

  return { bookmarked, setBookmarkedMovies, addBookmark, removeBookmark };
});
