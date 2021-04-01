<template>
    <div>
        <div v-if="trendingRepos.length">
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
        </div>
    </div>
</template>

<script>
import getTrendingRepos from "../composables/getTrendingRepos";
import updateTrendingReposList from "../composables/updateTrendingRepos";
import TrendingReposListItem from "./TrendingReposListItem";

export default {
    name: "TrendingReposList",
    components: {
        TrendingReposListItem
    },
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