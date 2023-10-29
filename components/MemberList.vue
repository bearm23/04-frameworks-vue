<template>
  <section>
    <div>
      <h1>Github Members</h1>
      <input type="search" v-model="searchInput" @keyup.enter="handleSearchInput" />
      <button @click="handleSearchInput">Search</button>
    </div>

    <div v-if="list?.length > 0" class="container">
      <ul class="content">
        <li v-for="member in list" :key="member.id">
          <MemberItem :member="member" />
        </li>
      </ul>
    </div>
    <div v-else-if="list && list.length === 0" class="default">
      <p>No results</p>
    </div>
    <div v-else class="default">
      <p>Loading...</p>
    </div>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";

import { useMemberStore } from "@/composables/useMemberStore";

export default defineComponent({
  mounted() {
    const memberStore = useMemberStore();
    const searchTerm = computed(() => memberStore.searchTerm);

    memberStore.fetchMembers(searchTerm.value);
  },
  async setup() {
    const memberStore = useMemberStore();

    const searchTerm = computed(() => memberStore.searchTerm);
    const list = computed(() => memberStore.memberList[searchTerm.value]);

    const searchInput = ref(searchTerm.value);

    const handleSearchInput = () => {
      memberStore.setSearchTerm(searchInput.value);
      memberStore.fetchMembers(searchInput.value);
    };

    return { list, searchInput, handleSearchInput };
  },
});
</script>

<style lang="scss" scoped>
input[type="search"] {
  min-width: 200px;
  margin-right: 10px;
}

.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  .content {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: flex-start;
    gap: 20px;
    padding: 20px;
    width: 100%;
    min-height: 500px;
  }
}

.default {
  margin: 50px auto;
}
</style>
