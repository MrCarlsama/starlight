<!--  舞台少女队伍 -->
<template>
<<<<<<< HEAD
  <!-- <teleport to="body"> -->
  <div
    v-show="teamList.length > 0"
    class="team-card-wrap"
    :style="{
      height: teamList.length === 5 ? '160px' : '80px',
      background: 'white',
    }"
  >
    <div class="team-card">
      <div
        v-for="(item, index) in teamList"
        :key="index"
        class="girls"
        @click="handleRemoveStageGril(item)"
      >
        <img class="girls-img" :src="item.Url" />
      </div>
    </div>
    <transition name="circle-fade">
      <div class="circle" v-show="teamList.length === 5">添加队伍</div>
    </transition>
  </div>
  <!-- </teleport> -->
=======
  <transition name="routes-fade">
    <div v-show="stageGrilsTeam.length > 0" class="team-card-wrap">
      <div class="team-card">
        <div
          v-for="(item, index) in stageGrilsTeam"
          :key="index"
          class="girls"
          @click="handleRemoveStageGril(item)"
        >
          <img class="girls-img" :src="item.Url" />
        </div>
      </div>
      <transition name="routes-fade">
        <div
          class="check-icon"
          v-show="stageGrilsTeam.length === 5"
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
>>>>>>> [modify][remote]
</template>

<script>
  import { computed, ref } from 'vue';
  import { useStore } from 'vuex';
<<<<<<< HEAD
  export default {
    setup() {
      const store = useStore();

      const teamList = computed(() => store.state.stageGirlsTeamList);
=======
  import { useRouter } from 'vue-router';
  export default {
    setup() {
      const store = useStore();
      const router = useRouter();

      const stageGrilsTeam = computed(() => store.state.stageGrilsTeam);
>>>>>>> [modify][remote]

      const handleRemoveStageGril = (item) =>
        store.commit('handleRemoveStageGril', item);

<<<<<<< HEAD
      return {
        teamList,
        handleRemoveStageGril,
=======
      const handleCompositionGroup = () => {
        store.commit('handleCompositionGroup', store.state.stageGrilsTeam);
        store.commit('handleResetStageGrils');
        router.push('/team');
      };

      return {
        stageGrilsTeam,
        handleRemoveStageGril,
        handleCompositionGroup,
>>>>>>> [modify][remote]
      };
    },
  };
</script>

<style lang="scss" scoped>
<<<<<<< HEAD
  .circle-fade-enter-active,
  .circle-fade-leave-active {
    opacity: 0.8;
    transition: all 0.2s ease-in-out 0.4s;
  }
  .circle-fade-enter-to,
  .circle-fade-leave {
    opacity: 1;
    transition: all 0.2s ease-in-out 0.4s;
  }
  .circle-fade-enter,
  .circle-fade-leave-to {
    opacity: 0;
  }
  .team-card-wrap {
    opacity: 0.95;
    position: absolute;
    transition: all 0.2s ease-in-out;
    left: 50%;
    transform: translateX(-50%);
=======
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
    position: absolute;
    left: calc(50% + 200px + 45px);
    transform: translateX(-50%);
    bottom: calc(40px - 31px);
    background: white;
    border-radius: 50%;
    line-height: 0;
  }
  .team-card-wrap {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    transition: all 0.6s ease-in-out;
>>>>>>> [modify][remote]
    bottom: 0;
    border: 3px solid white;
    box-shadow: 0px 0px 15px #ffc4c4;
    border-radius: 10px;
<<<<<<< HEAD
    display: flex;
    flex-direction: column;

=======
    overflow: hidden;
    display: flex;
    flex-direction: column;
    background: white;
>>>>>>> [modify][remote]
    .team-card {
      justify-content: center;
      height: 80px;
      width: 400px;
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
<<<<<<< HEAD
    .circle {
      margin: auto;
      width: 200px;
      height: 50px;
      border-radius: 30px;
      background-color: #ffc4c4;
      border: 2px solid white;
      color: white;
      line-height: 50px;
      box-shadow: 0 0 20px #ffc4c4;
=======
  }
  @media screen and (max-width: 720px) {
    .check-icon {
      left: 50%;
      transform: translateX(-50%);
      bottom: calc(20vw - 31px);
    }
    .team-card-wrap {
      .team-card {
        height: calc(100vw / 5);
        width: 100vw;
        grid-template-rows: calc(100vw / 5);
      }
>>>>>>> [modify][remote]
    }
  }
</style>
