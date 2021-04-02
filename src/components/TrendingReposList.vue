<template>
    <div ref='scrollComponent' class="mt-20">
        <trending-repos-list-item
            v-for="(repo, index) in trendingRepos"
            :key="repo.id"
            :ownerAvatar="repo.ownerAvatar"
            :ownerName="repo.ownerName"
            :repoName="repo.repoName"
            :repoDescription="repo.repoDescription"
            :starsCount="repo.starsCount"
            :issuesCount="repo.issuesCount"
            :createdAt="repo.createdAt"
            :index="index"
        >
        </trending-repos-list-item>

        <div 
            class="flex justify-center"
            v-if="loading"
        >
            <img 
                src="../assets/spinner.gif"
                class="h-12"
            >
        </div>
    </div>
</template>

<script>
// Components
import TrendingReposListItem from "./TrendingReposListItem";

// Composable functions
import getTrendingRepos from "../composables/getTrendingRepos";
import updateTrendingReposList from "../composables/updateTrendingReposList";
import infiniteScroll from "../composables/infiniteScroll";

// Composition API
import { onMounted, onUnmounted } from "vue";

export default {
    name: "TrendingReposList",
    components: {
        TrendingReposListItem,
    },
    setup() {
        const {
            infiniteHandler,
            apiResult,
            pageNumber,
            loading
        } = getTrendingRepos();

        const {
            updateTrendingRepos,
            trendingRepos
        } = updateTrendingReposList(apiResult)

        const { 
            handleScroll,
            scrollComponent
        } = infiniteScroll(infiniteHandler, updateTrendingRepos)

        // Invoked before component mounts
        infiniteHandler().then(() => {
            updateTrendingRepos()
        })

		onMounted(() => {
			window.addEventListener("scroll", handleScroll)
		})

		onUnmounted(() => {
			window.removeEventListener("scroll", handleScroll)
		})
        
        return {
            trendingRepos,
            infiniteHandler,
            pageNumber,
            scrollComponent,
            loading
        }
    },
}
</script>