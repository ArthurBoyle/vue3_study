<template>
  <div class="spec-preview">
    <img :src="skuImageList[currentIndex]?.imgUrl" alt="" />
    <div class="event" @mousemove="handleMove($event)"></div>
    <div class="big">
      <img :src="skuImageList[currentIndex]?.imgUrl" alt="" ref="bigMask" />
    </div>
    <div class="mask" ref="mask"></div>
  </div>
</template>

<script setup>
import { defineProps, ref } from "vue";

defineProps(["skuImageList", "currentIndex"]);

const mask = ref(null);
const bigMask = ref(null);

const handleMove = (event) => {
  let left = event.offsetX - mask.value.offsetWidth / 2;
  let top = event.offsetY - mask.value.offsetHeight / 2;

  if (left <= 0) {
    left = 0;
  } else if (
    event.offsetX >=
    event.target.scrollWidth - mask.value.offsetWidth / 2
  ) {
    left = event.target.scrollWidth - mask.value.offsetWidth;
  }

  if (top <= 0) {
    top = 0;
  } else if (
    event.offsetY >=
    event.target.scrollHeight - mask.value.offsetHeight / 2
  ) {
    top = event.target.scrollHeight - mask.value.offsetHeight;
  }

  mask.value.style.left = left + "px";
  mask.value.style.top = top + "px";
  bigMask.value.style.left = -2 * left + "px";
  bigMask.value.style.top = -2 * top + "px";
};
</script>

<style lang="less">
.spec-preview {
  position: relative;
  width: 400px;
  height: 400px;
  border: 1px solid #ccc;

  img {
    width: 100%;
    height: 100%;
  }

  .event {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 998;
  }

  .mask {
    width: 50%;
    height: 50%;
    background-color: rgba(0, 255, 0, 0.3);
    position: absolute;
    left: 0;
    top: 0;
    display: none;
  }

  .big {
    width: 100%;
    height: 100%;
    position: absolute;
    top: -1px;
    left: 100%;
    border: 1px solid #aaa;
    overflow: hidden;
    z-index: 998;
    display: none;
    background: white;

    img {
      width: 200%;
      max-width: 200%;
      height: 200%;
      position: absolute;
      left: 0;
      top: 0;
    }
  }

  .event:hover ~ .mask,
  .event:hover ~ .big {
    display: block;
  }
}
</style>
