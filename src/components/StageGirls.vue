<!-- 舞台少女列表 -->
<template>
  <div class="stage-wrap">
    <div
      class="stage-girls"
      v-for="(item, index) in stageGirlsList"
      :key="index"
    >
      <div class="girls" @click="handleAddStageGirl(item)">
        <img class="girls-frame" src="../assets/frame.png" />
        <img
          class="girls-img"
          :src="`http://192.168.4.5:9000/images/stageGirls/${item.AppId}/${item.AppId}.png`"
        />
      </div>
      <!-- <p class="girls-name">{{ item.Name }}</p> -->
    </div>

    <TeamCard />
  </div>
</template>

<script>
import {computed, defineAsyncComponent, onMounted, reactive} from 'vue';
import {useStore} from 'vuex';
export default {
  components: {
    TeamCard: defineAsyncComponent(() => import('./TeamCard.vue')),
  },
  setup() {
    const stageGirls = reactive({
      list: [],
    });

    onMounted(() => {
      fetch('http://192.168.4.5:9000/StageGirls/GetList', {
        method: 'post',
        data: '',
      })
        .then((res) => res.json())
        .then((data) => (stageGirls.list = data));
    });
    const store = useStore();

    const handleAddStageGirl = (item) =>
      store.commit('handleAddStageGril', item);

    console.log(store.state.stageGrilsTeam);

    const stageGirlsList = computed(() => {
      return stageGirls.list.filter((item) => {
        return (
          store.state.stageGrilsTeam.find((i) => i.Id === item.Id) === undefined
        );
      });
    });

    return {
      stageGirlsList,
      handleAddStageGirl,
    };
  },
};
</script>

<style lang="scss" scoped>
.stage-wrap {
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 140px);
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
      width: 100%;
    }
  }
}

@media screen and (max-width: 720px) {
  .stage-wrap {
    padding: 10px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    justify-content: center;
    grid-gap: 8px;

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
        width: 100%;
      }
    }
  }
}
</style>
