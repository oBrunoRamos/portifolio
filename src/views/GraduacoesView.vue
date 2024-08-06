<template>
  <section>
    <ul class="lista">
      <li v-for="graduacao in graduacoes" :key="graduacao.id">
        <CursoOuGraduac :data="graduacao" :graduacao="graduacao.graduacao"/>
      </li>
    </ul>
  </section>
</template>

<script>

import jsonGraduacoes from '@/assets/JSON/graduacoes.json'
import CursoOuGraduac from '@/components/CursoOuGraduac.vue';

export default {
  data(){
    return{
      graduacoes: jsonGraduacoes
    }
  },
  components:{
    CursoOuGraduac
  }
}
</script>

<style scoped>
.lista {
  display: grid;
  widows: fill;

  grid-template-columns: 1fr;
  align-items: center;
  justify-items: center;
}
.lista li{
  list-style: none;
}
</style>