<!--  舞台少女队伍 -->
<template>
  <transition name="routes-fade">
    <div
      v-show="stageGrilsTeam.length > 0 || memorisTeam.length > 0"
      class="team-card-wrap"
    >
      <div class="team-card">
        <div
          v-for="(item, index) in stageGrilsTeam"
          :key="index"
          class="girls"
          @click="handleRemoveStageGril(item)"
        >
          <img
            class="girls-img"
            :src="`https://revue-starlight.oss-cn-guangzhou.aliyuncs.com/${item.ImageUrl}`"
          />
        </div>
      </div>
      <div class="team-card memoris-card">
        <div
          v-for="(item, index) in memorisTeam"
          :key="index"
          class="girls"
          @click="handleRemoveMemory(item)"
        >
          <img
            class="girls-img"
            :src="`https://revue-starlight.oss-cn-guangzhou.aliyuncs.com/${item.ImageUrl}`"
          />
        </div>
      </div>
      <transition name="routes-fade">
        <div
          class="check-icon"
          v-show="stageGrilsTeam.length === 5 && memorisTeam.length === 5"
          @click="handleCompositionGroup"
        >
          <svg viewBox="0 0 1024 1024" p-id="2548" width="62" height="62">
            <path
              d="M512 0a512 512 0 1 0 512 512A512 512 0 0 0 512 0z m232.777143 382.72l-310.857143 310.857143a18.285714 18.285714 0 0 1-25.965714 0l-129.28-129.28a18.285714 18.285714 0 0 1 0-25.965714L305.188571 512a18.285714 18.285714 0 0 1 25.782858 0l85.394285 85.394286a7.314286 7.314286 0 0 0 10.24 0L693.028571 330.971429a18.285714 18.285714 0 0 1 25.782858 0l25.965714 25.782857a18.285714 18.285714 0 0 1 0 25.965714z"
              p-id="2549"
              fill="#32e054"
            ></path>
          </svg>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
import {computed, ref} from 'vue';
import {useStore} from 'vuex';
import {useRouter} from 'vue-router';
export default {
  setup() {
    const store = useStore();
    const router = useRouter();

    const stageGrilsTeam = computed(() => store.state.stageGrilsTeam);
    const handleRemoveStageGril = (item) =>
      store.commit('handleRemoveStageGril', item);

    const memorisTeam = computed(() => store.state.memorisTeam);
    const handleRemoveMemory = (item) =>
      store.commit('handleRemoveMemory', item);

    const handleCompositionGroup = () => {
      // store.commit('handleCompositionGroup', store.state.stageGrilsTeam);
      // store.commit('handleResetStageGrils');
      // router.push('/team');
    };

    return {
      stageGrilsTeam,
      handleRemoveStageGril,

      memorisTeam,
      handleRemoveMemory,
      handleCompositionGroup,
    };
  },
};
</script>

<style lang="scss" scoped>
.routes-fade-enter-active,
.routes-fade-leave-active {
  opacity: 0;
}
.routes-fade-enter-to,
.routes-fade-leave {
  opacity: 0.95;
}
.routes-fade-enter,
.routes-fade-leave-to {
  opacity: 0;
}
.check-icon {
  transition: all 0.4s ease;
  cursor: pointer;
  position: fixed;
  left: calc(50% + 200px + 45px);
  transform: translateX(-50%);
  bottom: calc(70px - 31px);
  border-radius: 50%;
  line-height: 0;
  box-shadow: 0px 0px 20px #00000085;
}
.team-card-wrap {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  transition: all 0.6s ease-in-out;
  padding: 10px;
  bottom: 5px;
  border: 8px solid #ffffff95;
  box-shadow: 0px 0px 20px #00000095;
  border-radius: 10px;
  background-color: #ffffff95;
  background: linear-gradient(to right, #f8f3f3 50%, #ffffff 0);
  background-size: 40px 100%;
  // overflow: hidden;
  display: flex;
  flex-direction: column;

  .team-card {
    justify-content: center;
    height: 80px;
    width: 400px;
    // background-color: white;
    overflow: hidden;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 80px;
    grid-template-areas: 'a b c d e ';

    .girls {
      height: auto;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;

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
  .memoris-card {
    height: 50px;

    .girls-img {
      position: absolute;
      top: -20%;
    }
  }
}
@media screen and (max-width: 720px) {
  .check-icon {
    left: 50%;
    transform: translateX(-50%);
    bottom: calc(28.5vw);
  }
  .team-card-wrap {
    padding: calc(100vw / 5 / 8);
    .team-card {
      height: calc(100vw / 5);
      width: 95vw;
      grid-template-rows: calc(100vw / 5);
    }
    .memoris-card {
      height: calc((100vw / 5) - (100vw / 5 * 0.4));
      grid-template-rows: calc((100vw / 5) - (100vw / 5 * 0.4));

      .girls-img {
        position: absolute;
        top: -25%;
      }
    }
  }
}
</style>
