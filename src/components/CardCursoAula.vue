<template>
  <div class="card-container" :style="container">
    <div class="aula">
      <div class="card-cabecalho">
        <h3>{{ data.nome }}</h3>
        <span v-if="graduacao">{{ data.semestre }}</span>
        <span v-else
          >{{ data.totalAulas }} - {{ data.totalHoras }} <br />
          {{ statusCurso }}</span
        >
      </div>
      <hr :style="hr" />
      <p class="descricao">{{ data.descricao }}</p>
      <div class="ferramentas-projetos">
        <span v-if="data.ferramentas">Ferramentas</span>
        <ul class="lista-linha" v-if="data.ferramentas">
          <li v-for="ferramenta in data.ferramentas" :key="ferramenta">
            {{ ferramenta }}
          </li>
        </ul>
        <span v-if="data.projetos">Projetos</span>
        <ul class="lista-linha" v-if="data.projetos">
          <li v-for="projeto in data.projetos" :key="projeto">{{ projeto }}</li>
        </ul>
      </div>
    </div>
    <div class="professores">
      <span>Professores</span>
      <ul>
        <li v-for="professor in data.professores" :key="professor.id">
          <a :href="professor.link">{{ professor.nome }}</a>
        </li>
      </ul>
      <span v-if="data.conhecimentos">Conhecimentos Adiquiridos</span>
      <ul class="conhecimentos" v-if="data.conhecimentos">
        <li v-for="conhecimento in data.conhecimentos" :key="conhecimento.id">
          <p>{{ conhecimento }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hr: `border: solid 1px ${this.data.cor}; margin: .3rem;`,
      container: `border: solid 2px ${this.data.cor};`,
    };
  },
  props: {
    data: Object,
    graduacao: Boolean,
  },
  computed: {
    statusCurso() {
      if (this.data.cursando) {
        return "Em andamento";
      } else {
        return "Finalizado";
      }
    },
  },
};
</script>

<style scoped>
ul {
  margin-bottom: 0.5rem;
}
li,
a {
  list-style: none;
  color: #fff;
  text-decoration: none;
  font-size: 10pt;
}
span {
  color: #666;
  font-weight: bold;
  font-size: 10pt;
  margin-top: 0.5rem;
}
.card-container {
  display: flex;
  background: #222;
  height: 20rem;
  width: fill;
  max-height: 20rem;
  max-width: 40rem;
  border-radius: 20px;
  box-shadow: 0 0 10px #000;
}
.card-cabecalho {
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: fit-content;
  width: fill;
}
.ferramentas-projetos ul {
  display: flex;
  width: fill;
  height: fit-content;
}
.ferramentas-projetos li::after {
  content: "-";
  padding: 0 0.5rem;
}
.ferramentas-projetos li:last-child::after {
  content: "";
}
.aula {
  display: flex;
  flex-direction: column;
  width: fill;
  margin: 1rem;
}
.aula p {
  flex: 1;
  font-size: 11pt;
  margin: 0.5rem 0;
}
.professores {
  margin: 1rem;
  width: 18rem;
}
.professores ul {
  height: fit-content;
}
.professores p {
  margin: 0.5rem 0;
}
.lista-linha {
  flex-wrap: wrap;
}
@media screen and (max-width: 1110px) {
  .card-container {
    flex-direction: column;
    height: fit-content;
    max-height: fit-content;
  }
  .card-cabecalho {
    flex-direction: column;
  }
  span {
    margin: 0;
  }
}
</style>
