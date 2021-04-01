import { reactive } from "vue";

export default function updateTrendingReposList (apiResult) {
    let trendingRepos = reactive([]);

    const updateTrendingRepos = () => {
        const newTrendingRepos = apiResult.value.map(el => {
            return {
                ownerAvatar: el.owner.avatar_url,
                ownerName: el.owner.login,
                repoDescription: el.description,
                repoName: el.name,
                starsCount: el.stargazers_count,
                issuesCount: el.open_issues_count
            }
        })

        trendingRepos.value = [...trendingRepos, ...newTrendingRepos]
        console.log(trendingRepos);
    }

    return {
        updateTrendingRepos,
        trendingRepos
    }
}