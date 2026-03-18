<template>
  <nav class="container navbar" role="contentinfo" aria-label="Main navigation">
    <ul class="navbar__brand">
      <li><NuxtLink to="/" aria-label="Home">logo</NuxtLink></li>
    </ul>
    <ul class="navbar__menu">
      <li>1</li>
      <li>2</li>
      <li><NuxtLink :to="{ name: 'about' }">about</NuxtLink></li>
    </ul>
  </nav>
</template>

<script lang="ts" setup></script>

<style></style>
