<template>
  <Header />
  <router-view />
  <Footer v-show="$route.meta.show" />
</template>

<script setup>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
</script>

<style></style>
