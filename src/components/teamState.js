import {
  reactive,
  toRefs,
  ref,
  toRef,
  computed,
} from "vue";

export const useStageGirls = () => {
  const stageState = reactive({
    stageGrilsGroup: [],
    stageGrilsTeam: [],
  })

  // 加入队伍
  const handleAddStageGirl = (stageGirl) => {
    if (stageState.stageGrilsTeam.length < 5) {
      stageState.stageGrilsTeam.push(stageGirl)
    }

    console.log(Array.from(stageState.stageGrilsTeam))
  }
  // 删除队伍
  const handleRemoveStageGril = (stageGirl) => {
    const index = stageState.stageGrilsTeam.findIndex(i => i.Id === stageGirl.Id);
    stageState.stageGrilsTeam.splice(index, 1);
  }

  // 组合队伍
  const handleCompositionGroup = (stateGrilsTeam) => {
    state.stageGrilsGroup.push(stateGrils);
  }

  return {
    stageState: toRefs(stageState),
    handleAddStageGirl,
    handleCompositionGroup,
    handleRemoveStageGril
  }
}