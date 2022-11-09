<script setup>
useHead({
  title: 'nuxt3-template',
  link: [
    {
      rel: 'icon', type: 'image/png', href: '/nuxt.png',
    },
  ],
})
</script>

<template>
  <div class="min-h-screen hero" :style="{ backgroundImage: 'url(https://placeimg.com/1000/800/arch)' }">
    <div class="bg-opacity-60 hero-overlay" />
    <div class="text-center hero-content text-neutral-content">
      <div class="max-w-md">
        <h1 class="mb-5 text-5xl font-bold">
          Hello there
        </h1>
        <p class="mb-5">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
        </p>
        <button class="btn btn-primary">
          Get Started
        </button>
      </div>
    </div>
  </div>
</template>

