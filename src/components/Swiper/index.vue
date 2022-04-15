<template>
  <swiper
    :modules="[Navigation, Pagination]"
    :navigation="true"
    :pagination="isImageList ? false : { clickable: true }"
  >
    <swiper-slide v-for="(item, index) in data" :key="item.id">
      <img
        :class="{ image: isImageList, active: currentIndex === index }"
        :src="item.imgUrl"
        alt="item.imgUrl"
        @click="
          changeCurrentIndex(index);
          onChangeCurrentIndex(index);
        "
      />
    </swiper-slide>
  </swiper>
</template>

<script setup>
import { defineProps, ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue/swiper-vue.js";
import { Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.min.css";

defineProps({
  data: { type: Array, required: true },
  isImageList: { type: Boolean, required: false },
  onChangeCurrentIndex: { type: Function, required: false }
});

const currentIndex = ref(0);

const changeCurrentIndex = (index) => {
  currentIndex.value = index;
};
</script>

<style scoped lang="less">
.image {
  border: 1px solid #ccc;
  padding: 2px;
  width: 50px;
  height: 50px;
  display: block;

  &.active {
    border: 2px solid #f60;
    padding: 1px;
  }

  /*&:hover {
    border: 2px solid #f60;
    padding: 1px;
  }*/
}
</style>
