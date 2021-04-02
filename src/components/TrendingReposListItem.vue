<template>
    <div 
        class="py-4 px-8 font-sans text-gray-900 rounded shadow m-4 relative"
        :class="{'bg-gray-100': isEven}"
        @mouseover="showLabel = true"
        @mouseleave="showLabel = false"
    >
        <a 
            :href="url" 
            target="_blank" 
            class="no-underline"
        >
            <div 
                class="flex justify-end absolute top-o right-10"
                v-if="showLabel"
            >
                <div class="inline-block bg-blue-100 text-blue-900 py-1 px-2 rounded text-xs">Visit repo</div>
            </div>

            <div class="md:flex items-center">
                <div class="mr-8 mb-2">
                    <img 
                        :src="ownerAvatar" 
                        alt="owner avatar"
                        class="h-16 w-16 md:h-28 md:w-28 rounded-full shadow"
                    >
                </div>
                <div class="mt-2">
                    <div class="font-bold capitalize mb-3">{{repoName}}</div>
                    <div class="mb-3">{{repoDescription}}</div>
                    <div class="flex flex-wrap items-center mb-2">
                        <div class="text-sm py-1 px-2 rounded mr-2 border border-green-300 text-green-600 hover:bg-green-200">Stars: {{starsCount}}</div>
                        <div class="text-sm py-1 px-2 rounded border border-red-300 text-red-600 hover:bg-red-200">Issues: {{issuesCount}}</div>
                    </div>
                    <div class="text-sm italic">Submited {{daysFormatter}} ago by {{ownerName}}</div>
                </div>
            </div>
        </a>
    </div>
</template>

<script>
import { ref, computed, toRefs } from "vue";
import daysFormatterHelperFunction from  "../composables/daysFormatter";

export default {
    name: "TrendingReposListItem",
    props: {
        ownerAvatar: {
            type: String,
            default: "hi"
        },
        ownerName: {
            type: String,
            default: ""
        },
        repoName: {
            type: String,
            default: ""
        },
        repoDescription: {
            type: String,
            default: ""
        },
        starsCount: {
            type: Number,
            default: 0
        },
        issuesCount: {
            type: Number,
            default: 0
        },
        createdAt: {
            type: String,
            default: ""
        },
        url: {
            type: String,
            default: ""
        },
        index: {
            type: Number,
            default: 0
        }
    },
    setup(props) {
        const { index, createdAt } = toRefs(props);
        const showLabel = ref(false)

        const isEven = computed(() => {
            return index.value % 2;
        })

        const { daysFormatter } = daysFormatterHelperFunction(createdAt)

        return {
            isEven,
            showLabel,
            daysFormatter,
        }
    },
}
</script>