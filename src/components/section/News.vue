<script setup>
  import { Pagination } from "swiper";
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';
  import 'swiper/css/pagination';
  import SectionTitle from "@/components/SectionTitle.vue";
  import news from "@/data/news";
  
</script>

<template>
  <section id="news" class="about-bg pt-16 pb-10">
    <div class="px-5 md:px-32 mb-8">
      <SectionTitle>News</SectionTitle>
    </div>
    <swiper
      :modules="[Pagination]"
      :pagination="{ clickable: true }"
      :breakpoints="{
        480: {
          slidesPerView: 1
        },
        640: {
          slidesPerView: 2
        }
      }"  
      :space-between="30"
      class="px-5 md:px-32 pb-20"
    >
      <swiper-slide v-for="(n, i) of news" :key="i">
        <div class="h-64 w-full">
          <img :src="n.image" class="w-full h-full bg-cover" alt="article image">
        </div>
        <div :class="i == 0 ? 'border-primary-100' : 'border-gray-300'" class="relative border-2 bg-gray-200 px-5 h-40">
          <div class="absolute left-1 -top-1 w-full h-full bg-white"></div>
          <div class="relative z-10 flex flex-col justify-between h-full">
            <div class="pt-3">
              <div class="text-sm">{{ n.date }}</div>
              <p class="w-[80%] text-xl font-bold">{{ n.title }}</p>
            </div>
            <div class="text-right py-5">
              <a href="#" class="text-primary-100 hover:underline">Read more</a>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </section>
</template>

<style>

  .swiper-pagination {
    @apply space-x-8
  }

  .swiper-pagination-bullet {
    @apply relative bg-white h-5 w-5 opacity-100 rounded-none
      before:absolute before:-top-1 before:-left-1 before:w-[140%] before:h-[140%] before:border
    ;
  }
  .swiper-pagination-bullet.swiper-pagination-bullet-active {
    @apply bg-primary-100 h-5 w-5;
  }

  .swiper-slide-active {
    @apply bg-blue-400
  }
</style>