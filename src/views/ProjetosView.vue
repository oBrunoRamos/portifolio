<template>
  <section class="container">
    <ul class="lista-projetos">
      <li v-for="projeto in projetos" :key="projeto.id">
        <CardProjetos :data="projeto" />
      </li>
    </ul>
  </section>
</template>

<script>
import jsonProjetos from "@/assets/JSON/projetos.json";
import CardProjetos from "@/components/CardProjetos.vue";

export default {
  data() {
    return {
      projetos: jsonProjetos,
    };
  },
  components: {
    CardProjetos,
  },
};
</script>

<style scoped>
.lista-projetos {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-items: center;
  gap: 5rem;
  margin: 5rem 0;
}
.lista-projetos li {
  list-style: none;
}
@media screen and (max-width: 1740px) {
  .lista-projetos {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
@media screen and (max-width: 1370px) {
  .lista-projetos {
    grid-template-columns: 1fr 1fr;
  }
}
@media screen and (max-width: 870px) {
  .lista-projetos {
    grid-template-columns: 1fr;
  }
}
</style>
