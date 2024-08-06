<template>
  <header class="container">
    <button @click="menuAtivo = !menuAtivo" class="botao hidden">
      <Menu />
    </button>
    <router-link :to="{ name: 'Sobre mim' }" class="nome"
      >
      <div class="img-container-logo">
        <img src="../assets/images/logo.svg" alt="">
      </div></router-link
    >
    <h3>{{ this.$route.name }}</h3>
  </header>
</template>

<script>
import { Menu } from "lucide-vue-next";

export default {
  data(){
   return{
    menuAtivo: false
   }
  },
  components: {
    Menu,
  },
  watch: {
    menuAtivo() {
      if(this.menuAtivo){
        this.$emit("abrirMenu");
      }
      else{
        this.$emit("fecharMenu");
      }
    },
  },
};
</script>

<style scoped>
a{
  margin: 0;
  padding: 0;
  text-decoration: none;
  color: #fff;

}
.container {
  display: flex;
  align-items: center;
  justify-content: space-between;

  height:8vh;
  min-height: 5rem;
  width: fill;
  z-index: 5;
  padding: 0 5rem;
  background: #222;

  border-bottom: 2px solid #07f;
}
.nome {
  font-weight: bold;
}
.botao {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 50px;
  background: none;
  color: #fff;
  border: 1px solid #666;
  border-radius: 5px;
}
.hidden{
  display: none;
}
@media screen and (max-width: 1000px) {
  .container{
    padding: 0 1rem;
  }
  .hidden{
    display: block;
  }
}
img{
  max-height: 100%;
}
.img-container-logo{
  height: 3rem;
  max-height: 3rem;
}
@media screen and (max-width: 480px) {
h3{
    padding:2rem;
    font-size: 12pt;
  }
  .nome{
    display: none;
  }
}
</style>
