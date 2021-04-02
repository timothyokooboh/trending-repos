import { ref } from "vue";

export default function infiniteScroll(infiniteHandler, updateTrendingRepos) {
    const scrollComponent = ref(null);

    const handleScroll = () => {
        let element = scrollComponent.value
        if ( element.getBoundingClientRect().bottom < window.innerHeight ) {
            infiniteHandler().then(() => {
                updateTrendingRepos()
            })
        }
    }

    return {
        handleScroll,
        scrollComponent
    }
}