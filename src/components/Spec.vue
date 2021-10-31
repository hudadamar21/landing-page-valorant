<script setup>

  const recomended = {
    title: 'Recomended',
    specs: [
      { name: 'CPU', value: 'Core i5-4460'},
      { name: 'CPU Speed', value: '1GB/hz'},
      { name: 'RAM', value: '4 GB'},
      { name: 'OS', value: 'Windows 7/8/10 64-bit'},
      { name: 'VIDEO CARD', value: 'GTX 1050 Ti'},
      { name: 'PIXEL SHADER', value: '5.1'},
      { name: 'VERTEX SHADER', value: '5.1'},
      { name: 'DEDICATED VIDEO RAM', value: '4096 MB'},
    ]
  }

  const minimum = {
    title: 'Minimum',
    specs: [
      { name: 'CPU', value: 'i3-370M'},
      { name: 'CPU Speed', value: '500MB/hz'},
      { name: 'RAM', value: '4 GB'},
      { name: 'OS', value: 'Windows 7/8/10 64-bit'},
      { name: 'VIDEO CARD', value: 'Intel HD 3000'},
      { name: 'PIXEL SHADER', value: '3.0'},
      { name: 'VERTEX SHADER', value: '3.0'},
      { name: 'DEDICATED VIDEO RAM', value: '4096 MB'},
    ]
  }

  const requirements = [
    recomended,
    minimum
  ]

</script>

<template>
  <div v-for="requirement of requirements" :key="requirement.title">
    <h3 class="text-3xl md:text-4xl font-bold mb-5">{{ requirement.title }}</h3>
    <ul class="space-y-2 text-base md:text-lg">
      <li v-for="spec of requirement.specs" :key="spec.name">
        <span class="font-medium">{{ spec.name }}: </span>
        <span class="text-white/60">{{ spec.value }}</span>
      </li>
    </ul>
  </div>
</template>