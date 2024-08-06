<template>
    <section>
    <ul class="lista-empresas">
      <li v-for="empresa in empresas" :key="empresa.id">
        <CompaniesCard :data="empresa"/>
      </li>
    </ul>
  </section>
</template>

<script>
import jsonEmpresas from "@/assets/JSON/experiencia.json";
import CompaniesCard from "@/components/CompaniesCard.vue";
export default {
  data(){
    return{
      empresas: jsonEmpresas
    }
  },
  components:{
    CompaniesCard
  }
}
</script>

<style scoped>
.lista-empresas {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  gap: 5rem;
  margin: 5rem 0;
}
.lista-empresas li {
  list-style: none;
}
@media screen and (max-width: 1770px) {
  .lista-empresas {
    grid-template-columns: 1fr 1fr ;
  }
}
@media screen and (max-width: 1350px) {
  .lista-empresas {
    grid-template-columns: 1fr ;
  }
}
</style>