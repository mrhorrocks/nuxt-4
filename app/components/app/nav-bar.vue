<template>
  <nav
    class="navbar bg-red-300"
    role="contentinfo"
    aria-label="Main navigation"
  >
    <!-- LOGO -->
    <ul class="navbar__brand">
      <li><NuxtLink to="/" aria-label="Home">logo</NuxtLink></li>
    </ul>
    <!-- NAV LINKS -->
    <ul class="navbar__menu">
      <li>1</li>
      <li>2</li>
      <li><NuxtLink :to="{ name: 'about' }">about</NuxtLink></li>
    </ul>
  </nav>
</template>

<style scss>
.navbar {
  ul {
    li {
      background-color: green;
    }
  }
}
</style>
