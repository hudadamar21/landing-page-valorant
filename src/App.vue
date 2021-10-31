<script setup>
  import Home from "@/components/section/Home.vue";
  import About from "@/components/section/About.vue";
  import News from "@/components/section/News.vue";
  import Requirement from "@/components/section/Requirement.vue";
  import Footer from "@/components/section/Footer.vue";
  import MainLayout from "@/components/layout/Main.vue";
</script>

<template>
  <MainLayout>
    <Home/>
    <About/>
    <News/>
    <Requirement/>
    <Footer/>
  </MainLayout>
</template>

<style>
</style>
