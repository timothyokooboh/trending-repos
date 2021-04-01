
import TrendingReposDataService from "../services/TrendingReposDataService";
import { ref } from "vue";

export default function getTrendingRepos() {
    const pageNumber = ref(1);
    let apiResult = ref([]);
    
    const infiniteHandler = async () => {
        try {
            const result = await TrendingReposDataService.getTrendingRepos(pageNumber.value);
            pageNumber.value +=1;
            apiResult.value = result.data.items;
        }
        catch(err) {
            console.log(err)
        }
    }

    return {
        infiniteHandler,
        apiResult
    }
}