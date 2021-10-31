<script setup>
  import Spec from "@/components/Spec.vue";
</script>

<template>
  <section id="requirements" class="relative overflow-hidden md:pt-5">
    <div class="absolute bottom-0 left-0">
      <img src="@/assets/bg-char-2.webp" class="absolute bottom-0 left-0 h-[90vh]" alt="">
      <img src="@/assets/char-2.webp" class="relative bottom-0 left-0 md:h-screen" alt="">
    </div>
    <div class="w-full flex justify-end md:py-5">
      <div class="relative w-full md:w-[68%] bg-primary-100">
        <div class="absolute -bottom-3 -left-3 w-full h-full bg-primary-100"></div>
        <div class="relative z-10 pt-5 flex flex-col h-full">
          <div class="flex flex-col md:flex-row items-center">
            <div class="w-full md:w-[45%] hidden md:grid place-items-center pb-5 md:pb-0">
              <img src="@/assets/logo-valorant-text2.webp" alt="">
            </div>
            <div class="w-full md:w-[55%] bg-white p-6">
              <h2 class="text-3xl md:text-4xl font-bold text-center md:text-left">System Requirements</h2>
            </div>
          </div>
          <div class="bg-black flex-grow w-full text-white grid grid-cols-1 md:grid-cols-2 gap-14 py-14 md:py-20 px-8 md:px-14">
            <Spec/>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>