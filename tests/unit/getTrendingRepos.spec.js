import axios from 'axios';
import AxiosMockAdapter from 'axios-mock-adapter';

class TrendingReposDataService {
    getTrendingRepos(pageNumber) {
        return axios.get(`https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc&page=${pageNumber}`)
    }
}

const mock = new AxiosMockAdapter(axios);

describe("getTrendingRepos composable function", () => {
    it('should call external API and return expected result', () => {
        let fakeData = {
            data: {
                items: [
                    {
                        ownerAvatar: "https://avatars.githubusercontent.com/u/937351?v=4",
                        ownerName: "alectro",
                        repoName: "SCSScale",
                        repoDescription: "Typographic modular scale starter based on body's font-size built on SCSS.",
                        starsCount: 206,
                        issuesCount: 0,
                        createdAt: "2018-07-06T08:22:24Z",
                        url: "https://github.com/alectro/SCSScale",
                        index: 6
                    }
                ]
            }
        };
    
        mock.onGet('https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc&page=1').replyOnce(200, fakeData);
    
        const trendingReposDataService = new TrendingReposDataService()
    
        trendingReposDataService.getTrendingRepos(1)
        .then(function (response) {
            expect(response.data).toEqual(fakeData);
        }).catch(err => console.log(err))
    });
})
