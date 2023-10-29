<template>
  <Header />
  <div v-if="member" class="content">
    <div class="detailCard">
      <div class="card">
        <div class="left">
          <div class="imageContainer">
            <img
              class="image"
              :src="member.avatar_url"
              :alt="`Image of: ${member.name}`"
            />
          </div>
        </div>
        <div class="right">
          <h1 v-if="member.name">{{ member.name }}</h1>
          <h4 v-if="member.email">{{ member.email }}</h4>

          <div class="info">
            <div class="infoBox">
              <dd variant="h6">{{ member.login }}</dd>
              <dt variant="body2">Login</dt>
            </div>

            <div v-if="member.company" class="infoBox">
              <dd variant="h6">{{ member.company }}</dd>
              <dt variant="body2">Company</dt>
            </div>
          </div>

          <div v-if="member.bio" class="infoBox">
            <dd variant="h6">{{ member.bio }}</dd>
            <dt variant="body2">Bio</dt>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { githubService } from "../../services/members";
import { Member } from "../../types";

const route = useRoute();
const login = route.params.login as string;

const { data: member } = useAsyncData<Member>(() => githubService.getMember(login));
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.detailCard {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  max-width: 100%;
  margin-top: 50px;

  h1 {
    font-size: 1.5rem;
    font-weight: 400;
  }

  h4 {
    font-size: 0.75rem;
  }

  dd {
    font-size: 1.25rem;
    line-height: 1.6;
    margin: 0;
  }

  dt {
    font-size: 0.875rem;
  }

  .card {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    margin: 0 auto;
    padding: 30px 0;
    min-height: 365px;
    background-color: white;
    border-radius: 5px;

    .imageContainer {
      display: flex;
      border-radius: 6px;
      box-shadow: 4px 4px 25px -2px rgba(0, 0, 0, 0.3);
    }

    .image {
      border-radius: 6px;
      width: 150px;
      height: 150px;
    }

    .left {
      position: relative;
      margin: 0 auto;
    }

    .right {
      padding: 0 40px 0 15px;

      .info {
        display: flex;
        flex-wrap: wrap;
        max-width: 420px;
        gap: 20px;
      }

      .infoBox {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        background-color: #f1eeff;
        flex: 1;
        border-radius: 8px;
        padding: 10px 20px;
        margin-top: 20px;
        max-width: 400px;
      }

      .infoBox dd {
        color: #6558d3;
        font-weight: 600;
      }

      .infoBox dt {
        color: #a69fd6;
      }
    }

    @media screen and (min-width: 768px) {
      flex-direction: row;

      .imageContainer {
        position: relative;
        left: -30px;
      }

      .image {
        width: 300px;
        height: 300px;
      }
    }
  }
}
</style>
