<template>
    <div>

    </div>
</template>

<script>
import getTrendingRepos from "../composables/getTrendingRepos";
import updateTrendingReposList from "../composables/updateTrendingRepos";

export default {
    name: "TrendingReposList",
    setup() {

        const {
            infiniteHandler,
            apiResult
        } = getTrendingRepos();

        const {
            updateTrendingRepos,
            trendingRepos
        } = updateTrendingReposList(apiResult)

        // Invoked before component mounts
        infiniteHandler().then(() => {
            updateTrendingRepos()
        })

        return {
            trendingRepos,
        }
    },
}
</script>