<template>
  <TypeNav />
  <ListContainer />
  <TodayRecommend />
  <Rank />
  <Like />
  <Floor />
  <Floor />
  <Brand />
</template>

<script>
import ListContainer from "./components/ListContainer";
import TodayRecommend from "./components/TodayRecommend";
import Rank from "./components/Rank";
import Like from "./components/Like";
import Floor from "./components/Floor/Floor";
import Brand from "./components/Brand";

export default {
  name: "Home",
  components: { ListContainer, TodayRecommend, Rank, Like, Floor, Brand }
};
</script>

<style scoped></style>
