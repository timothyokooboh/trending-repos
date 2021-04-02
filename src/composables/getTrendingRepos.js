
import TrendingReposDataService from "../services/TrendingReposDataService";
import { ref } from "vue";

export default function getTrendingRepos() {
    let pageNumber = ref(1);
    let apiResult = ref([]);
    let loading = ref(true)
    
    const infiniteHandler = async () => {
        loading.value = true;

        try {
            const result = await TrendingReposDataService.getTrendingRepos(pageNumber.value);
            console.log(result)
            pageNumber.value +=1;
            apiResult.value = result.data.items;
            loading.value = false;
        }
        catch(err) {
            console.log(err)
            loading.value = false;
        }
    }

    return {
        infiniteHandler,
        apiResult,
        pageNumber,
        loading
    }
}