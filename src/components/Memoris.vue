<!-- 礼装列表 -->
<template>
  <div class="stage-wrap">
    <div class="stage-border-1">
      <div class="stage-border-2">
        <div
          class="stage-girls"
          v-for="(item, index) in memorisList"
          :key="index"
        >
          <div class="girls" @click="handleAddMemory(item)">
            <img class="girls-frame" src="/src/assets/frame_memory.png" />
            <img
              class="girls-img"
              :src="`https://revue-starlight.oss-cn-guangzhou.aliyuncs.com/${item.ImageUrl}`"
              :alt="item.Name"
            />
            <img
              class="girls-rarity"
              :class="[`girls-rarity-${item.Rarity}`]"
              :src="`/src/assets/icon_rarity_${item.Rarity}.png`"
            />
            <img
              class="girls-skill"
              :src="`https://revue-starlight.oss-cn-guangzhou.aliyuncs.com/${item.SkillImageUrl}`"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {computed, onMounted, reactive} from 'vue';
import {useStore} from 'vuex';
export default {
  setup() {
    const memoris = reactive({
      list: [],
    });

    onMounted(() => {
      fetch('http://localhost:9000/StageGirls/GetListByMemoris', {
        method: 'post',
        data: '',
      })
        .then((res) => res.json())
        .then((data) => (memoris.list = data));
    });
    const store = useStore();

    const handleAddMemory = (item) => store.commit('handleAddMemory', item);

    const memorisList = computed(() => {
      return memoris.list.filter((item) => {
        return (
          store.state.memorisTeam.find((i) => i.Id === item.Id) === undefined
        );
      });
    });

    return {
      memorisList,
      handleAddMemory,
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

        .girls-skill {
          top: 6%;
          width: 30%;
          position: absolute;
          left: 63%;
        }

        .girls-rarity {
          position: absolute;
          top: 77%;
          left: 3%;
        }

        .girls-rarity-1 {
          width: 20%;
        }

        .girls-rarity-2 {
          width: 32%;
        }

        .girls-rarity-3 {
          width: 45%;
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
