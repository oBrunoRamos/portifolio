<template>
  <section class="main-container">
    <HeaderComponent class="header" @fecharMenu="menu('none')" @abrirMenu="menu('block')" />
    <main>
      <MenuLateral class="menuLateral" @fecharMenu="menu('none')" />
      <router-view class="view"></router-view>
    </main>
  </section>
</template>
<script>
import MenuLateral from "./components/MenuLateral.vue";
import HeaderComponent from "./components/HeaderComponent.vue";

export default {
  data(){
    return{

    }
  },
  components: {
    MenuLateral,
    HeaderComponent,
  },
  methods: {
    menu(estado) {
      document.querySelector(".menuLateral").style.display = estado;
      document
        .querySelectorAll("#nome")
        .forEach((item) => (item.style.display = "block"));
    }
  }
};
</script>
<style>
* {
  font-family: "Avenir LT Std", "Nirmala UI", Arial, Helvetica, sans-serif;
}
body,
ul,
li {
  margin: 0;
  padding: 0;
  text-decoration: none;
  color: #fff;
}
.main-container {
  height: 100vh;
  width: 100vw;
  max-height: 100vh;
  max-width: 100vw;
  overflow: hidden;
}
main {
  display: flex;
  height: 92vh;
  width: fill;
  overflow: hidden;
  background: #222;
}
.view {
  width: fill;
  height: fill;
  padding: 5rem;
  background: url("./assets/images/background.svg"); 
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  mask-image: linear-gradient(
    to bottom,
    transparent,
    black 10%,
    black 90%,
    transparent
  );
}

.v-enter,
.v-leave-to{
  opacity: 0;
}
.v-enter{
  transform: translate(0, -20px, 0);
}
.v-leave-to{
  transform: translate(0, 20px, 0);
}
.v-enter-active,
.v-leave-active{
  transition: all .3s;
}

@media screen and (max-width: 1000px) {
  .menuLateral {
    display: none;
  }
  .view {
    height: fill;
    padding: 0;
  }
}
</style>
