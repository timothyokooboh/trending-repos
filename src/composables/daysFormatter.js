
import { computed } from "vue";

export default function daysFormatterHelperFunction(createdAt) {
       
    const currentDate = new Date();
  
    const differenceInTime = currentDate.getTime() - new Date(createdAt.value).getTime();

    const daysSinceRepoWasCreated = (differenceInTime / (1000 * 3600 * 24))

    const daysFormatter = computed(() => {
        if(daysSinceRepoWasCreated < 365) {
            return daysSinceRepoWasCreated + " days"
        } else if(daysSinceRepoWasCreated >= 365 && daysSinceRepoWasCreated  < 729) {
            return "Over 1 year"
        } else if(daysSinceRepoWasCreated >= 730) {
            return "Over 2 years"
        }
        return ''
    })

    return {
        daysFormatter
    }
}