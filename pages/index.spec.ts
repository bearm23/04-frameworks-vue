import { mount } from '@vue/test-utils';
import { createTestingPinia } from "@pinia/testing";
import { useMemberStore } from "../composables/useMemberStore";
import Index from './index.vue';
import Header from '../components/Header.vue';
import MemberList from '../components/MemberList.vue';
import MemberItem from '../components/MemberItem.vue';

type MemberStore = ReturnType<typeof useMemberStore>;

describe('index.vue', () => {
  let store: MemberStore;

  beforeEach(() => {
    const pinia = createTestingPinia();
    store = useMemberStore(pinia);
  });

  it('should render the Header and MemberList components', async () => {
    const wrapper = await mount(Index, {
      global: {
        components: {
          'Header': Header,
          'MemberList': MemberList,
          'MemberItem': MemberItem,
        }
      }
    });

    await wrapper.vm.$nextTick();

    const HeaderComponent = wrapper.findComponent(Header);
    expect(HeaderComponent.html()).toContain('img src=\"/logo.png\"');

    const MemberListComponent = wrapper.findComponent(MemberList);
    expect(MemberListComponent.text()).toContain('Github Members');
  });
});