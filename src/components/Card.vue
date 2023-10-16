<script setup>
import { onBeforeMount } from "vue";
import play from "/assets/icon-play.svg";
import { useBookmarkStore } from "../stores/bookmark";

const props = defineProps(["items", "isFlex", "isMain"]);

const cardClass = props.isFlex ? "card-flex" : "card-greed";
const cardSize = props.isMain ? "card-main" : "card-small";

const { addBookmark, removeBookmark, bookmarked } = useBookmarkStore();

onBeforeMount(() => {
  // Ensure the store is initialized before accessing bookmarked data
  bookmarked.value = useBookmarkStore().bookmarked;
});

function handleBookmark(movie) {
  movie.isBookmarked = !movie.isBookmarked;

  if (movie.isBookmarked) {
    addBookmark(movie);
  } else {
    removeBookmark(movie);
  }
  console.log(movie);
}
</script>

<template>
  <div :class="cardClass">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="card item"
      :class="cardSize"
      :style="{
        backgroundImage: `url(${`${item.thumbnail.regular.large}`})`,
      }"
    >
      <a class="play" href="#">
        <img :src="play" class="icon-nav" />
        <p>Play</p>
      </a>
      <div class="bookmark-container" @click="handleBookmark(item)">
        <svg
          width="12"
          height="14"
          xmlns="http://www.w3.org/2000/svg"
          class="bookmark-icon"
        >
          <path
            d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"
            stroke="#FFF"
            stroke-width="1.5"
            :fill="item.isBookmarked ? '#FFF' : 'none'"
            class="bookmark-svg"
          />
        </svg>
      </div>
      <div class="span-elements">
        <span>{{ item.year }}</span>
        <span>&#x2022; {{ item.category }}</span>
        <span>&#x2022; {{ item.rating }}</span>
      </div>
      <p class="movie-name">{{ item.title }}</p>
    </div>
  </div>
</template>

<style scoped>
.icon-nav {
  width: 20px;
}

.cards {
  display: flex;
  gap: 32px;
}
.card-flex {
  display: flex;
  gap: 32px;
  /* width: 100%; */
}

.card-greed {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
  margin-bottom: 32px;
}

.card-main {
  width: 400px;
  height: 200px;
}

.card-small {
  width: 100%;
  height: 150px;
}
.card {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-left: 16px;
  position: relative;
}

span {
  color: #fff;
}

p {
  color: #fff;
}
.span-elements {
  display: flex;
  gap: 10px;
  opacity: 0.7;
}

.movie-name {
  font-weight: bold;
}

.bookmark-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  background-color: #000;
  border-radius: 50%;
  position: absolute;
  top: 5%;
  right: 4%;
  cursor: pointer;
  transition: 0.35s;
}

.bookmark-container:hover {
  background-color: #fff;
}
.bookmark-svg {
  transition: 0.35s;
}

.bookmark-container:hover .bookmark-svg {
  fill: #000;
}

.play {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  align-self: center;
  margin-bottom: 5px;
  background-color: rgba(112, 112, 125, 0.5);
  border-radius: 16px;
  padding: 7px 21px 7px 12px;
  visibility: hidden;
  transition: visibility 0s, opacity 0.4s ease-in-out;
  opacity: 0; /* Start with zero opacity */
}

.card:hover .play {
  visibility: visible; /* Show the link on hover */
  opacity: 1; /* Fade in with full opacity */
}

.play img {
  width: 26px;
  height: 26px;
}

.play p {
  margin-bottom: 0;
}

@media (max-width: 1200px) {
  .card-greed {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .card-main {
    width: 350px;
    height: 150px;
  }
  .card-greed {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
