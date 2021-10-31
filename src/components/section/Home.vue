<template>
  <div id="home" class="relative bg-primary-100 w-full md:h-screen grid place-items-center">
    <img class="absolute bottom-0 right-0 h-[60vh] md:h-[80vh] object-cover select-none" src="@/assets/banner-image.webp" alt="">
    <img class="absolute top-1/4 md:top-1/3 -translate-y-1/3 left-0 w-full sm:w-2/3 select-none" src="@/assets/logo-valorant-text.webp" alt="">
    <div class="relative px-0 md:px-32 h-[90vh] select-none"><img src="@/assets/utilities.svg" class="w-full h-full bg-contain"></div>
    <div class="absolute bottom-24 grid place-items-center gap-8 md:gap-12">
      <div class="border border-white p-3">
        <button class="w-72 md:w-96 px-5 md:px-10 h-16 md:h-20 bg-white text-xl font-semibold uppercase">Play Now</button>
      </div>
      <p class="text-sm text-white">A 5v5 character-based tactical shooter</p>
    </div>
  </div>
</template>