import { ref } from "vue";

export default function updateTrendingReposList (apiResult) {
    let trendingRepos = ref([]);

    const updateTrendingRepos = () => {
        const newTrendingRepos = apiResult.value.map(el => {
            return {
                id: el.id,
                ownerAvatar: el.owner.avatar_url,
                ownerName: el.owner.login,
                repoDescription: el.description,
                repoName: el.name,
                starsCount: el.stargazers_count,
                issuesCount: el.open_issues_count,
                createdAt: el.created_at,
                url: el.html_url
            }
        })
        trendingRepos.value = [...trendingRepos.value, ...newTrendingRepos]
    }

    return {
        updateTrendingRepos,
        trendingRepos
    }
}