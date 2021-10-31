<template>
  <div class="relative">
    <div class="absolute -bottom-1 -left-1 border-2 h-full w-72 border-primary-100 bg-transparent"></div>
    <div class="relative bg-white p-4 w-72 overflow-hidden">
      <div class="absolute right-16 -top-10 rotate-[-45deg] bg-primary-100 h-[200%] w-5"></div>
      <div class="absolute right-0 -top-10 rotate-[-45deg] bg-primary-100 h-[200%] w-5"></div>
      <h2 class="text-4xl font-bold uppercase tracking-widest">
        <slot/>
      </h2>
    </div>
  </div>
</template>