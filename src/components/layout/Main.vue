<script setup>
  import { ref } from "vue";
  const indicator = ref('')

  function changeActive(e) {
    console.log(e.target.offsetWidth);
    console.log(e.target.offsetWidth - 70 / 100);
    indicator.value.style.left = `${e.currentTarget.offsetLeft}px`
    indicator.value.style.width = `${e.currentTarget.offsetWidth * (30 / 100)}px`
  }
</script>

<template>
  <div>
    <nav class="fixed top-0 inset-x-0 px-5 md:px-20 py-2 flex items-center justify-between z-30 bg-primary-100/90 backdrop-blur">
      <div>
        <img src="@/assets/logo-valorant.webp" class="w-14 md:w-auto" alt="logo valorant">
      </div>
      <div class="relative flex items-center text-white">
        <a @click="changeActive" class="nav-link" href="#about">About</a>
        <a @click="changeActive" class="nav-link" href="#news">News</a>
        <a @click="changeActive" class="nav-link pr-0" href="#requirements">System Requirements</a>
        <div ref="indicator" class="h-0.5 w-5 rounded absolute bottom-0 left-0 bg-white  transition-all duration-300"></div>
      </div>
    </nav>
    <slot/>
  </div>
</template>

<style>
  .nav-link {
    @apply pr-5 md:pr-10 pb-1 cursor-pointer font-semibold text-sm md:text-base;
  }
</style>