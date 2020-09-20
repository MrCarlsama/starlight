<!-- 舞台少女列表 -->
<template>
  <div class="stage-wrap">
    <div
      class="stage-girls"
      v-for="(item, index) in stageGirlsImg"
      :key="index"
    >
      <div class="girls" @click="handleAddStageGirl(item)">
        <img class="girls-frame" src="../assets/frame.png" />
        <img class="girls-img" :src="item.Url" />
      </div>
      <p class="girls-name">{{ item.Name }}</p>
    </div>

    <TeamCard />
  </div>
</template>

<script>
  import { computed, defineAsyncComponent } from 'vue';
  import { useStore } from 'vuex';
  export default {
    components: {
      TeamCard: defineAsyncComponent(() => import('./TeamCard.vue')),
    },
    setup() {
      const store = useStore();

      const stageGirlsImg = computed(() =>
        [
          '0.jpg',
          '1.jpg',
          '2.jpg',
          '3.jpg',
          '4.jpg',
          '5.jpg',
          '6.jpg',
          '7.jpg',
          '8.jpg',
          '9.jpg',
          '10.jpg',
          '11.jpg',
          '12.jpg',
          '13.jpg',
          '14.jpg',
          '15.jpg',
          '16.jpg',
        ]
          .map((item, index) => {
            return {
              Id: index,
              Name: '岩田阳葵',
              Url: `http://192.168.4.5:4000/images/${item}`,
            };
          })
          .filter(
            (item) =>
<<<<<<< HEAD
              store.state.stageGirlsTeamList.find((i) => i.Id === item.Id) ===
=======
              store.state.stageGrilsTeam.find((i) => i.Id === item.Id) ===
>>>>>>> [modify][remote]
              undefined
          )
      );

      const handleAddStageGirl = (item) =>
        store.commit('handleAddStageGril', item);

      return {
        stageGirlsImg,
        handleAddStageGirl,
      };
    },
  };
</script>

<style lang="scss" scoped>
  .stage-wrap {
    padding: 10px;
    display: grid;
    grid-template-columns: repeat(auto-fill, 100px);
    justify-content: center;
    grid-gap: 20px;

    .stage-girls {
      height: auto;
      position: relative;
      border-radius: 7px;
      overflow: hidden;
      cursor: pointer;

      .girls-frame {
        width: 100%;
        position: absolute;
      }

      .girls-img {
        margin-top: 5%;
        width: 100%;
      }
    }
  }

  @media screen and (max-width: 720px) {
    .stage-wrap {
      padding: 10px;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      justify-content: center;
      grid-gap: 20px;

      .stage-girls {
        height: auto;
        position: relative;
        border-radius: 7px;
        overflow: hidden;

        .girls-frame {
          width: 100%;
          position: absolute;
        }

        .girls-img {
<<<<<<< HEAD
=======
          margin-top: 5%;
>>>>>>> [modify][remote]
          width: 100%;
        }
      }
    }
  }
</style>
