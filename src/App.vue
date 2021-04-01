<template>
  <div>
    <trending-repos-list></trending-repos-list>
  </div>
</template>

<script>
import TrendingReposList from "./components/TrendingReposList";

export default {
  name: 'App',
  components: {
    TrendingReposList
  },
}
</script>

<style lang="scss">
</style>
