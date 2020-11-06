import {createStore} from 'vuex';

export const store = createStore({
  state() {
    return {
      stageGrilsGroup: [],
      stageGrilsTeam: [],
    };
  },
  mutations: {
    // 加入队伍
    handleAddStageGril(state, stageGirl) {
      console.log(state.stageGrilsTeam);
      if (state.stageGrilsTeam.length < 5) {
        state.stageGrilsTeam.push(stageGirl);
      }
    },
    // 删除队伍
    handleRemoveStageGril(state, stageGirl) {
      const index = state.stageGrilsTeam.findIndex(
        (i) => i.Id === stageGirl.Id
      );
      state.stageGrilsTeam.splice(index, 1);
    },
    // 组合队伍
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
