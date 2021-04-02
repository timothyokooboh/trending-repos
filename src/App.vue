<template>
  <div>
    <the-header></the-header>
    <trending-repos-list></trending-repos-list>
  </div>
</template>

<script>
import TrendingReposList from "./components/TrendingReposList";
import TheHeader from "./components/TheHeader"

export default {
  name: 'App',
  components: {
    TrendingReposList,
    TheHeader
  },
}
</script>

<style lang="scss">
</style>
