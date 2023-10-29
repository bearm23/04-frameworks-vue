import { createTestingPinia } from "@pinia/testing";
import { useMemberStore } from "./useMemberStore";
import { computed } from "vue";

type MemberStore = ReturnType<typeof useMemberStore>;

describe("useMemberStore", () => {
  let store: MemberStore;

  beforeEach(() => {
    const pinia = createTestingPinia();
    store = useMemberStore(pinia);
  });

  it("fetchMembers should fetch and update memberList", async () => {
    const organizationName = "lemoncode";
    store.fetchMembers(organizationName);
    const list = computed(() => store.memberList[organizationName]);
    expect(list).toBeDefined();
  });

  it("setSearchTerm should update the searchTerm", () => {
    const otherOrganizationName = "microsoft";
    store.setSearchTerm(otherOrganizationName);
    const searchTerm = computed(() => store.searchTerm);
    expect(searchTerm).toBe(searchTerm);
  });
});