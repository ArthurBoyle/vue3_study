<template>
  <Header />
  <router-view />
  <Footer v-show="$route.meta.show" />
</template>

<script setup>
import { onMounted } from "vue";
import { useStore } from "vuex";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const store = useStore();

onMounted(() => {
  store.dispatch("home/getCategoryList");
});
</script>

<style></style>
