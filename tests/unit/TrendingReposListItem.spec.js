import { shallowMount } from "@vue/test-utils";
import TrendingReposListItem from "@/components/TrendingReposListItem";

describe("TrendingReposListItem.vue", () => {
    let wrapper = null;

    beforeEach(() => {
        wrapper = shallowMount(TrendingReposListItem, {
            propsData: {
                ownerAvatar:"",
                ownerName: "",
                repoName: "",
                repoDescription: "",
                starsCount: 0,
                issuesCount: 0,
                createdAt: "",
                url: "",
                index: 0
            }
        })
    })

    afterEach(() => {
        wrapper.unmount()
    })

    it("initializes with correct elements", () => {
        expect(wrapper.findAll('div').length).toEqual(10)
        expect(wrapper.findAll('a').length).toEqual(1)
        expect(wrapper.findAll('img').length).toEqual(1)
    })

    it("stores props data as expected", async () => {
        await wrapper.setProps({
            ownerAvatar: "https://avatars.githubusercontent.com/u/937351?v=4",
            ownerName: "alectro",
            repoName: "SCSScale",
            repoDescription: "Typographic modular scale starter based on body's font-size built on SCSS.",
            starsCount: 206,
            issuesCount: 0,
            createdAt: "2018-07-06T08:22:24Z",
            url: "https://github.com/alectro/SCSScale",
            index: 6
        })

        expect(wrapper.vm.ownerAvatar).toBe("https://avatars.githubusercontent.com/u/937351?v=4")
        expect(wrapper.vm.ownerName).toBe("alectro")
        expect(wrapper.vm.repoName).toBe("SCSScale")
        expect(wrapper.vm.repoDescription).toBe("Typographic modular scale starter based on body's font-size built on SCSS.")
        expect(wrapper.vm.starsCount).toBe(206)
        expect(wrapper.vm.issuesCount).toBe(0)
        expect(wrapper.vm.createdAt).toBe("2018-07-06T08:22:24Z")
        expect(wrapper.vm.url).toBe("https://github.com/alectro/SCSScale")
        expect(wrapper.vm.index).toBe(6)
    })
})