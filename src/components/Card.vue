<script setup>
import play from "@/assets/icon-play.svg";
import { useBookmarkStore } from "../stores/bookmark";
const props = defineProps(["items", "isFlex"]);
const cardClass = props.isFlex ? "card-flex" : "card-greed";
const { addBookmark } = useBookmarkStore();

function handleBookmark(movie) {
  addBookmark(movie);
  console.log(movie);
}
</script>

<template>
  <div :class="cardClass">
    <div v-for="(item, index) in items" :key="index" class="card">
      <a class="play" href="#">
        <img :src="play" class="icon-nav" />
        <p>Play</p>
      </a>
      <div class="bookmark-container" @click="handleBookmark">
        <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"
            stroke="#FFF"
            stroke-width="1.5"
            fill="none"
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
  /* flex-direction: column;
  justify-content: flex-end; */
  gap: 32px;
}

.card-greed {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  /* Add your desired styles for the greed mode here */
  /* For example: width: 100%; height: 100%; etc. */
  gap: 32px;
}
.card {
  width: 360px;
  height: 170px;
  background-image: url("@/assets/thumbnails/beyond-earth/trending/large.jpg");
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
  background-color: #70707d;
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
  margin-bottom: 16px;
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
</style>
