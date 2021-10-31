<template>
  <footer class="p-5 py-20 md:p-20">
    <div class="flex flex-col md:flex-row gap-10 items-center justify-between">
      <img src="@/assets/logo-black.webp" alt="">
      <div class="relative border border-black pt-2 pr-2 pl-3 pb-3">
        <div class="absolute -left-3 w-[110%] top-1/2 -translate-y-1/2 h-5 bg-white"></div>
        <button class="relative text-white bg-primary-100 uppercase px-8 py-5">
          <div class="absolute -bottom-1 -left-1 w-full h-full bg-primary-100"></div>
          <p class="relative z-10">Download Now</p>
        </button>
      </div>
    </div>
    <div class="mt-20 grid place-items-center gap-12">
      <img src="@/assets/riot-logo.webp" alt="">
      <div class="flex items-center gap-5">
        <div class="h-12 w-12 grid place-items-center rounded-full bg-black text-white">
          <img src="@/assets/social/facebook.svg" alt="facebook">
        </div>
        <div class="h-12 w-12 grid place-items-center rounded-full bg-black text-white">
          <img src="@/assets/social/twitter.svg" alt="twitter">
        </div>
        <div class="h-12 w-12 grid place-items-center rounded-full bg-black text-white">
          <img src="@/assets/social/instagram.svg" alt="instagram">
        </div>
        <div class="h-12 w-12 grid place-items-center rounded-full bg-black text-white">
          <img src="@/assets/social/youtube.svg" alt="youtube">
        </div>
        <div class="h-12 w-12 grid place-items-center rounded-full bg-black text-white">
          <img src="@/assets/social/discord.svg" alt="discord">
        </div>
      </div>
      <div class="text-center text-sm md:text-base">
        <p>&copy; 2021 Riot Games, Inc. Riot Games, VALORANT, and any associated </p>
        <p>logos are trademarks, service marks, and/or registered trademarks of Riot Games, Inc.</p>
      </div>
    </div>
    
  </footer>
</template>