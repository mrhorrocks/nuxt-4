<template>
  <nav role="contentinfo" aria-label="Main navigation">
    <!-- LOGO -->
    <ul class="navbar__brand">
      <li><NuxtLink to="/" aria-label="Home">logo</NuxtLink></li>
    </ul>

    <!-- NAV LINKS -->
    <ul class="navbar__menu">
      <li><NuxtLink :to="{ name: 'about' }">about</NuxtLink></li>
      <li><NuxtLink :to="{ name: 'test' }">test</NuxtLink></li>
    </ul>
  </nav>
</template>

<style scss>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: green;
  &__brand {
    background-color: aqua;
  }
  &__menu {
    background-color: orange;
    display: flex;
    gap: 1.5rem;
    list-style: none;
    margin: 0;
    padding: 0;
    li {
      a {
        background-color: blue;
        display: flex;
        &:hover {
          background-color: bisque;
        }
      }
    }
  }
}
</style>
