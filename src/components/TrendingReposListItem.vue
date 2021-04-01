<template>
    <div 
        class="flex flex-wrap items-center py-4 px-8 font-sans text-gray-900 rounded shadow m-4"
        :class="{'bg-gray-100': isEven}"
    >
        <div class="mr-8 mb-2">
            <img 
                :src="ownerAvatar" 
                alt="owner avatar"
                class="h-16 w-16 md:h-28 md:w-28 rounded-full shadow"
            >
        </div>
        <div class="mt-2">
            <div class="font-bold capitalize mb-3">{{repoName}}</div>
            <div class="mb-3 capitalize">{{repoDescription}}</div>
            <div class="flex flex-wrap items-center mb-2">
                <div class="text-sm py-1 px-2 rounded mr-2 border border-green-300 text-green-600 hover:bg-green-200">Stars: {{starsCount}}</div>
                <div class="text-sm py-1 px-2 rounded border border-red-300 text-red-600 hover:bg-red-200">Issues: {{issuesCount}}</div>
            </div>
            <div class="text-sm italic">Submited {{createdAt}} days ago by {{ownerName}}</div>
            
        </div>
    </div>
    
</template>

<script>
import { computed, toRefs } from "vue";

export default {
    name: "TrendingReposListItem",
    props: {
        ownerAvatar: String,
        ownerName: String,
        repoName: String,
        repoDescription: String,
        starsCount: Number,
        issuesCount: Number,
        createdAt: String,
        index: Number
    },
    setup(props) {
        const { index } = toRefs(props);

        const isEven = computed(() => {
            return index.value % 2;
        })

        return {
            isEven
        }
    }
}
</script>