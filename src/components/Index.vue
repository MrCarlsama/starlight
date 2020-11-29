<template>
  <div style="height: 100%">
    <nav class="nav" :class="{fixed: scrollTop > 50}">
      <a class="nav-logo">
        <img
          src="/src/assets/wotashi-revue.png"
          alt="少女☆歌劇 レヴュースタァライト -Re LIVE- ロゴ"
        />
      </a>
      <router-link class="nav-item" to="/">舞台少女</router-link>
      <router-link class="nav-item" to="/team">メモウール</router-link>
      <router-link class="nav-item" to="/ws">編成</router-link>
    </nav>
    <div class="navigationBtn" :class="{show: isClassShow}" @click="onNavClick">
      <p class="naviBtn">
        <span class="naviBtn1"></span>
        <span class="naviBtn2"></span>
        <span class="naviBtn3"></span>
      </p>
    </div>
    <nav class="navigationWrap" :class="{show: isClassShow}">
      <ul class="naviList">
        <li class="navi00">
          <a href="/books/violet/" title="Top">舞台少女</a>
        </li>
        <li class="navi01">
          <a href="/books/violet/story/" title="Story">メモウール</a>
        </li>
        <li class="navi02">
          <a href="/books/violet/character/" title="Character">編成</a>
        </li>
      </ul>
    </nav>

    <!-- 路由视图 -->
    <router-view v-slot="{Component}">
      <transition name="routes-fade" mode="out-in">
        <!-- <keep-alive> -->
        <component :is="Component" />
        <!-- </keep-alive> -->
      </transition>
    </router-view>
  </div>
</template>

<script>
import {onMounted, onUnmounted, ref} from 'vue';
export default {
  setup() {
    const {scrollTop} = useScroll();
    const isClassShow = ref(false);

    const onNavClick = () => {
      isClassShow.value = !isClassShow.value;
    };

    return {
      isClassShow,
      onNavClick,
      scrollTop,
    };
  },
};
// 获取滚动
function useScroll() {
  const scrollTop = ref(0);

  function onUpdateSroll(e) {
    console.log(e.target.scrollTop);
    scrollTop.value = e.target.scrollTop;
  }

  onMounted(() => {
    document.querySelector('#app').addEventListener('scroll', onUpdateSroll);
  });

  onUnmounted(() => {
    document.querySelector('#app').removeEventListener('scroll', onUpdateSroll);
  });

  return {
    scrollTop,
  };
}
</script>

<style lang="scss" scoped>
.routes-fade-enter-active,
.routes-fade-leave-active {
  opacity: 0;
  transform: translateY(-10px);
  transition: all 0.2s ease-in-out;
}
.routes-fade-enter-to,
.routes-fade-leave {
  opacity: 1;
  transform: translateX(0px);
  transition: all 0.4s ease-in-out;
}
.routes-fade-enter,
.routes-fade-leave-to {
  transform: translateY(10px);
  opacity: 0;
}
.fixed {
  position: fixed;
  z-index: 2;
  top: 0;
}
.nav {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 80px;
  // background-color: #ff6d6d;
  margin-bottom: 40px;
  background: url('/src/assets/bgTop_01.png') repeat;
  box-shadow: 0px 0px 10px 0px #917777;

  .nav-logo {
    left: 30px;
    z-index: 3;
    transition: 0.2s;
    margin-right: 40px;
    img {
      width: 140px;
      height: 60px;
      transition: 0.2s;
    }
  }

  .nav-item {
    padding: 0 20px;
    color: #ff6d6d;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    opacity: 0.8;
    transition: all 0.5s;

    &:not(:last-child) {
      border-right: 2px solid white;
    }

    &:hover {
      opacity: 1;
    }
  }

  .active {
    opacity: 1;
    text-shadow: 0 0 2px white;
    &:hover {
      opacity: 1;
    }
  }
}
.navigationBtn,
.navigationWrap {
  display: none;
}
@media screen and (max-width: 720px) {
  .nav {
    height: 16vw;
    margin-bottom: 4vw;
    .nav-logo {
      margin-right: 0;
    }
    .nav-item {
      display: none;
    }
  }
  .navigationBtn {
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    width: 18vw;
    height: 16vw;
    z-index: 6;
    cursor: pointer;
    -webkit-transition: 0.3s ease-out;
    transition: 0.3s ease-out;

    .naviBtn {
      position: absolute;
      display: -webkit-flex;
      display: flex;
      -webkit-flex-direction: column;
      flex-direction: column;
      -webkit-justify-content: space-between;
      justify-content: space-between;
      -webkit-align-content: space-between;
      align-content: space-between;
      width: 50%;
      height: 40%;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      margin: auto;

      span {
        width: 100%;
        height: 0.5vw;
        background-color: black;
        -webkit-transition: 0.3s ease-out;
        transition: 0.3s ease-out;
      }
    }
  }
  /*Navigation Button  --  show*/
  .show .naviBtn .naviBtn1 {
    -webkit-transform: translateY(3vw) rotate(-45deg);
    transform: translateY(3vw) rotate(-45deg);
  }
  .show .naviBtn .naviBtn2 {
    // height: 0;
    display: none;
  }
  .show .naviBtn .naviBtn3 {
    -webkit-transform: translateY(-3vw) rotate(45deg);
    transform: translateY(-3vw) rotate(45deg);
  }
  .show .naviBtn .show .naviBtn .show .naviBtn .naviBtn3 {
    -webkit-transform: translateY(-3vw) rotate(45deg);
    transform: translateY(-3vw) rotate(45deg);
  }
  /*Navigation*/
  .navigationWrap {
    display: block;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    overflow: auto;
    background: #ff6d6d;
    z-index: 5;
    opacity: 0;
    visibility: hidden;
    -webkit-transition: 0.3s ease-out;
    transition: 0.3s ease-out;
  }
  /*Navigation  --  show*/
  .show.navigationWrap {
    opacity: 1;
    // background: url('/src/assets/bgTop_03.png') repeat;
    visibility: visible;
  }
}
</style>
