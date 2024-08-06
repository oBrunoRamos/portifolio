<template>
  <div :class="`container`" :style="containerBorder" v-if="data.mostrar">
    <div class="info-skill">
      <div class="cabecalho">
        <div class="img-container">
          <img v-if="data.src" :src="data.src" alt="" />
        </div>
        <div class="cabecalho-data">
          <h3>{{ data.nome }}</h3>
          <hr :style="hr" />
          <span>{{ data.conhecimento }}</span>
        </div>
      </div>
      <p>{{ data.descricao }}</p>
    </div>
    <div class="projetos" v-if="listaProjetos.length >0">
      <CardProjetosVue
        v-for="projeto in listaProjetos"
        :key="projeto.id"
        :data="projeto"
        :cor="data.cor"
        :mini="true"
      />
    </div>
  </div>
</template>

<script>
import CardProjetosVue from "./CardProjetos.vue";
import projetos from "@/assets/JSON/projetos.json";

export default {
  data() {
    return {
      containerBorder: `border: 2px solid ${this.data.cor};`,
      hr: `border: 1px solid ${this.data.cor};`,
      projetos: projetos,
      listaProjetos: [],
    };
  },
  props: {
    data: Object,
  },
  components: {
    CardProjetosVue,
  },
  methods: {
    verificaProjetos() {
      const id = this.data.id;
      const projetos = this.projetos;
      projetos.forEach((projeto) => {
        projeto.tags.forEach((tag) => {
          if (tag == id) {
            this.listaProjetos.push(projeto);
          }
        });
      });
    },
  },
  created() {
    this.verificaProjetos();
  },
};
</script>

<style scoped>
.container {
  display: flex;

  height: 20rem;
  width: 40rem;

  border-radius: 10px;
  background: #222;
}
.info-skill {
  margin: 2rem 1rem;
  flex: 1;
}
.cabecalho {
  display: flex;
  align-items: end;
  margin-bottom: 1.5rem;
}
.img-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 6rem;
  width: 8rem;
}
img {
  max-height: 100%;
  max-width: 100%;
}
.cabecalho-data {
  display: flex;
  flex-direction: column;
  align-items: end;
  width: fill;
  margin: 0 0.5rem;
}
.cabecalho-data h3 {
  width: fill;
}
hr {
  width: fill;
  margin: 0.3rem 0;
}
.projetos {
  display: grid;
  gap: 2rem;
  padding: 2rem 1rem;
  justify-content: center;
  /* max-width: 14rem; */
  overflow-y: scroll;
  overflow-x: hidden;
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
span {
  color: #666;
  font-weight: bold;
}
@media screen and (max-width: 678px) {
  .container {
    width: 20rem;
    margin: 0 2rem;
    height: fit-content;
    flex-direction: column;
    align-items: center;
  }
  .projetos {
    height: 15rem;
    width: fill;
  }
  .info-skill{
    width: fill;
  }
}
</style>
