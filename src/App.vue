<template>
  <Header :keyword="keyword" @onInput="handleSetKeyword" />
  <router-view @onClear="handleSetKeyword" />
  <Footer v-show="$route.meta.show" />
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const store = useStore();

const keyword = ref("");

const handleSetKeyword = (value) => {
  keyword.value = value ?? "";
};

onMounted(() => {
  store.dispatch("home/getCategoryList");
});
</script>

<style></style>
