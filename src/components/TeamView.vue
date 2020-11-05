<template>
  <div>
    <div
      v-for="(item, index) in stageGrilsGroup"
      :key="index"
      class="team-card-wrap"
    >
      <div class="team-card">
        <div v-for="(info, idx) in item" :key="idx" class="girls">
          <img class="girls-img" :src="info.Url" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { computed } from 'vue';
  import { useStore } from 'vuex';
  export default {
    setup() {
      const store = useStore();

      const stageGrilsGroup = computed(() => store.state.stageGrilsGroup);

      return {
        stageGrilsGroup,
      };
    },
  };
</script>

<style lang="scss" scoped>
  .team-card-wrap {
    border: 3px solid white;
    box-shadow: 0px 0px 15px #ffc4c4;
    border-radius: 10px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    background: white;
    width: 400px;
    margin: 10px auto;

    .team-card {
      justify-content: center;
      height: 80px;
      background-color: white;
      overflow: hidden;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
      grid-template-rows: 80px;
      grid-template-areas:
        'a b c d e '
        'f g h i j';

      .girls {
        height: auto;
        position: relative;
        cursor: pointer;

        .girls-frame {
          width: 100%;
          position: absolute;
        }

        .girls-img {
          width: 100%;
        }
      }
    }
  }
  @media screen and (max-width: 720px) {
    .team-card-wrap {
      width: 100vw;
      .team-card {
        height: calc(100vw / 5);
        width: 100vw;
        grid-template-rows: calc(100vw / 5);
      }
    }
  }
</style>
