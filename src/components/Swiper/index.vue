<template>
  <swiper
    :modules="[Navigation, Pagination]"
    :navigation="true"
    :pagination="{ clickable: true }"
  >
    <swiper-slide v-for="item in data" :key="item.id">
      <img :src="item.imgUrl" alt="item.imgUrl" />
    </swiper-slide>
  </swiper>
</template>

<script setup>
import { defineProps } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue/swiper-vue.js";
import { Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.min.css";

defineProps({
  data: { type: Array, required: true }
});
</script>

<style scoped></style>
