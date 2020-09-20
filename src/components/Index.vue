<template>
  <div>
    <nav class="nav">
      <router-link class="nav-item" to="/">Starlight</router-link>
      <router-link class="nav-item" to="/team">Team</router-link>
    </nav>

    <!-- 路由视图 -->
    <router-view v-slot="{ Component }">
      <transition name="routes-fade" mode="out-in">
        <!-- <keep-alive> -->
        <component :is="Component" />
        <!-- </keep-alive> -->
      </transition>
    </router-view>
  </div>
</template>

<script>
  export default {
    setup() {},
  };
</script>

<style lang="scss" scoped>
  .routes-fade-enter-active,
  .routes-fade-leave-active {
<<<<<<< HEAD
    opacity: 0.5;
=======
    opacity: 0;
>>>>>>> [modify][remote]
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

  .nav {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 50px;
    margin-bottom: 20px;
    background-color: #ff6d6d;

    .nav-item {
      padding: 0 20px;
      color: white;
      font-size: 18px;
      font-weight: bold;
      cursor: pointer;
      opacity: 0.8;
      transition: all 0.5s;

      &:first-child {
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
</style>
