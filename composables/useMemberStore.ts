import { defineStore } from "pinia";
import { Member, MembersFromOrganizationName } from "@/types";
import { githubService } from '~/services/members';

export const useMemberStore = defineStore("memberList", {
  state: () => ({
    searchTerm: "lemoncode",
    memberList: {} as MembersFromOrganizationName
  }),
  getters: {
    getMemberList: async state => state.memberList,
    getSearchTerm: state => state.searchTerm
  },
  actions: {
    async fetchMembers(organizationName: string) {
      if (
        organizationName === "" ||
        (this.memberList[organizationName] &&
          this.memberList[organizationName].length > 0)
      ) {
        return;
      }

      const list: Member[] = await githubService.get(organizationName);
      this.memberList[organizationName] = list;
    },
    setSearchTerm(searchTerm: string) {
      this.searchTerm = searchTerm;
    }
  }
});
