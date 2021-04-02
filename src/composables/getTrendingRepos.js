import Swal from "sweetalert2";
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

            if(!apiResult.value.length) {
                Swal.fire({
                    text: 'No more results',
                    showConfirmButton: false
                })

                setTimeout(() => {
                    Swal.close()
                }, 3000)
            }
        }
        catch(err) {
            console.log(err)
            loading.value = false;
            Swal.fire({
                title: 'Error!',
                text: 'Failed to load data. Wait a few seconds and refresh the page',
                icon: 'error',
                showConfirmButton: false
            })

            setTimeout(() => {
                Swal.close()
            }, 3000)
              
        }
    }

    return {
        infiniteHandler,
        apiResult,
        pageNumber,
        loading
    }
}