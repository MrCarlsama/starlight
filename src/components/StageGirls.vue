<!-- 舞台少女列表 -->
<template>
  <div class="stage-wrap">
    <div class="stage-border-1">
      <div class="stage-border-2">
        <div
          class="stage-girls"
          v-for="(item, index) in stageGirlsList"
          :key="index"
        >
          <div class="girls" @click="handleAddStageGirl(item)">
            <img class="girls-frame" src="/src/assets/frame.png" />
            <img
              class="girls-img"
              :src="`https://revue-starlight.oss-cn-guangzhou.aliyuncs.com/${item.ImageUrl}`"
              :alt="item.Name"
            />
            <img
              class="girls-attr"
              :src="`/src/assets/icon_attribute_${item.Attribute.AttributeType}.png`"
            />
            <img
              class="girls-position"
              :src="`/src/assets/icon_position_${item.Attribute.PositionType}.png`"
            />
            <img
              class="girls-rarity"
              :class="[`girls-rarity-${item.Attribute.Rarity}`]"
              :src="`/src/assets/icon_rarity_${item.Attribute.Rarity}.png`"
            />
            <img
              class="girls-attack"
              :src="`/src/assets/icon_attack_${item.Attribute.AttackType}.png`"
            />
          </div>
          <!-- <p class="girls-name">{{ item.Name }}</p> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {computed, defineAsyncComponent, onMounted, reactive} from 'vue';
import {useStore} from 'vuex';
export default {
  components: {
    StageGirlsCard: defineAsyncComponent(() => import('./StageGirls-Card.vue')),
  },
  setup() {
    const stageGirls = reactive({
      list: [],
    });

    onMounted(() => {
      fetch('http://localhost:9000/StageGirls/GetListByStageGirls', {
        method: 'post',
        data: '',
      })
        .then((res) => res.json())
        .then((data) => (stageGirls.list = data));
    });
    const store = useStore();

    const handleAddStageGirl = (item) =>
      store.commit('handleAddStageGril', item);

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
  width: 980px;
  margin: auto;

  box-shadow: 0px 0px 10px 0px #917777;
  padding: 5px;

  .stage-border-1 {
    padding: 2px;
    border: 3px #ff8a8a solid;
    .stage-border-2 {
      border: 2px #ff8a8a solid;
      padding: 10px;
      display: grid;
      grid-template-columns: repeat(auto-fill, 80px);
      justify-content: center;
      grid-gap: 6px;
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

        .girls-attr {
          width: 30%;
          position: absolute;
          left: 3%;
          top: 3%;
        }

        .girls-position {
          width: 22%;
          position: absolute;
          left: 7%;
          top: 30%;
        }

        .girls-attack {
          top: 3%;
          width: 33%;
          position: absolute;
          left: 67%;
        }

        .girls-rarity {
          position: absolute;
          top: 79%;
          right: 3%;
        }

        .girls-rarity-2 {
          width: 32%;
        }

        .girls-rarity-3 {
          width: 44%;
        }

        .girls-rarity-4 {
          width: 55%;
        }

        .girls-img {
          width: 100%;
        }
      }
    }
  }
}

@media screen and (max-width: 720px) {
  .stage-wrap {
    width: 92vw;
    padding: 5px;

    .stage-border-1 {
      .stage-border-2 {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        justify-content: center;
        grid-gap: 8px;
        padding: 5px;
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
  }
}
</style>
