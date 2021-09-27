<template>
  <top-nav></top-nav>
  <!-- <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
  </nav> -->
  <router-view></router-view>
  <site-footer></site-footer>
</template>

<script lang="ts" setup>
import TopNav from './components/common/nav/TopNav.vue';
import SiteFooter from './components/common/footer/SiteFooter.vue';
</script>

<style lang="less">
html,
body {
  padding: 0;
  margin: 0;
  background: #000;
  color: #fff;
  font-size: 14px;
  height: 100%;
  overflow-y: auto;
}

a {
  text-decoration: none;
  &:link,
  &:visited,
  &:hover,
  &:active {
    text-decoration: none;
    color: inherit;
  }
}

// @media (prefers-color-scheme: dark) {
//   html {
//     filter: invert(100%) hue-rotate(180deg);
//   }
// }

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100%;
}
</style>
