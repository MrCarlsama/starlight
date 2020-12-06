import {createStore} from 'vuex';

export const store = createStore({
  state() {
    return {
      stageGrilsGroup: [],
      stageGrilsTeam: [],
      memorisTeam: [],
    };
  },
  mutations: {
    // 舞台少女 - 加入队伍
    handleAddStageGril(state, stageGirl) {
      console.log(state.stageGrilsTeam);
      if (state.stageGrilsTeam.length < 5) {
        state.stageGrilsTeam.push(stageGirl);
      }
    },
    // 舞台少女 - 从队伍中删除
    handleRemoveStageGril(state, stageGirl) {
      const index = state.stageGrilsTeam.findIndex(
        (i) => i.Id === stageGirl.Id
      );
      state.stageGrilsTeam.splice(index, 1);
    },
    // 礼装 - 加入队伍
    handleAddMemory(state, memory) {
      console.log(state.memorisTeam);
      if (state.memorisTeam.length < 5) {
        state.memorisTeam.push(memory);
      }
    },
    // 礼装 - 从队伍中删除
    handleRemoveMemory(state, memory) {
      const index = state.memorisTeam.findIndex((i) => i.Id === memory.Id);
      state.memorisTeam.splice(index, 1);
    },

    //  组合队伍
    handleCompositionGroup(state, stageGirls) {
      console.log(Array.from(stageGirls));
      state.stageGrilsGroup.push(stageGirls);
      console.log(state.stageGrilsGroup);
    },
    // 清空队伍
    handleResetStageGrils(state) {
      state.stageGrilsTeam = [];
    },
  },
});
