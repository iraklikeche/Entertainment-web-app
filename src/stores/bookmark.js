import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useBookmarkStore = defineStore("bookmark", () => {
  const bookmarks = ref([]);

  // const addBookmark = computed(() => count.value * 2);
  function addBookmark(movie) {
    bookmarks.value.push(movie);
    console.log(movie);
  }
  function removeBookmark(movie) {
    const index = bookmarks.value.findIndex((m) => m.id === movie.id);
    if (index !== -1) {
      bookmarks.value.splice(index, 1);
    }
  }

  return { bookmarks, addBookmark };
});
