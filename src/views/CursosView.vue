<template>
  <section>
    <ul class="lista">
      <li v-for="curso in cursos" :key="curso.id">
        <CursoOuGraduac :data="curso" :graduacao="curso.graduacao"/>
      </li>
    </ul>
  </section>
</template>

<script>

import jsonCursos from '@/assets/JSON/cursos.json'
import CursoOuGraduac from '@/components/CursoOuGraduac.vue';

export default {
  data(){
    return{
      cursos: jsonCursos
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
  grid-template-columns: 1fr;
  gap: 5rem;
  align-items: center;
  justify-items: center;
}
.lista li{
  list-style: none;
}
</style>