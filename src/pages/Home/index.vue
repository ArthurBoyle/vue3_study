<template>
  <TypeNav />
  <ListContainer />
  <TodayRecommend />
  <Rank />
  <Like />
  <Floor v-for="item in floorList" :key="item.id" :list="item" />
  <Brand />
</template>

<script setup>
import { onMounted, computed } from "vue";
import { useStore } from "vuex";
import ListContainer from "./components/ListContainer";
import TodayRecommend from "./components/TodayRecommend";
import Rank from "./components/Rank";
import Like from "./components/Like";
import Floor from "./components/Floor/Floor";
import Brand from "./components/Brand";

const store = useStore();

onMounted(() => {
  store.dispatch("home/getFloorList");
});

const floorList = computed(() => {
  return store.state.home.floorList;
});
</script>

<style scoped></style>
