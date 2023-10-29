<template>
  <nav>
    <img src="/logo.png" width="35" height="35" alt="logo" />
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style lang="scss" scoped>
nav {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  color: #ffffff;
  background-color: #202329;
  width: 100%;
  padding: 10px;
}
</style>
