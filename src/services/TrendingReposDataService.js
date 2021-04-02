import http from "./http-client";

class TrendingReposDataService {
    getTrendingRepos(pageNumber) {
        return http.get(`/search/repositories?q=created:>2017-10-22&sort=stars&order=desc&page=${pageNumber}`)
    }
}

export default new TrendingReposDataService();
