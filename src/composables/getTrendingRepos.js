
import TrendingReposDataService from "../services/TrendingReposDataService";
import { ref, reactive } from "vue";

export default function getTrendingRepos() {
    const pageNumber = ref(1);
    const apiResult = reactive([]);
    
    const infiniteHandler = async () => {
        try {
            const result = await TrendingReposDataService.getTrendingRepos(pageNumber.value);
            console.log(result)
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