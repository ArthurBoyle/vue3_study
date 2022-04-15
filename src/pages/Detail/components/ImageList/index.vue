<template>
  <Swiper
    :data="skuImageList"
    :spaceBetween="0"
    :slidesPerView="6"
    :isImageList="true"
    :onChangeCurrentIndex="onChangeCurrentIndex"
  />
</template>

<script setup>
import { defineProps } from "vue";
import Swiper from "@/components/Swiper";

defineProps(["skuImageList", "onChangeCurrentIndex"]);
</script>

<style lang="less" scoped></style>
