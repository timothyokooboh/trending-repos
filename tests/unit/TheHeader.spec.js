import { shallowMount } from '@vue/test-utils'
import TheHeader from '@/components/TheHeader.vue'

describe('TheHeader.vue', () => {
  it('renders the right text when the component is mounted', () => {
    const wrapper = shallowMount(TheHeader)

    expect(wrapper.text()).toBe("Trending Github Repos")
  })
})
