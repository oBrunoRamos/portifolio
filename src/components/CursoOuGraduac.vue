<template>
  <section class="container" :style="section">
    <div class="graduacao">
      <div class="graduacao-cabecalho">
        <div class="img-container" :style="background">
          <img v-if="data.src" :src="data.src" :alt="data.instituicao"/>
        </div>
        <div class="infos-principais">
          <div class="titulo">
            <a :href="data.link" target="blank">
              <h1>{{ data.instituicao }}</h1>
            </a>
            <div class="spans" v-if="data.graduacao">
              <span>{{ data.inicio }} | {{ data.final }}</span>
              <span v-if="data.cursando">Cursando Atualmente</span>
            </div>
          </div>
          <hr :style="hr" />
          <h1 class="curso">{{ data.curso }}</h1>
        </div>
      </div>
      <p class="descricao">{{ data.descricao }}</p>
    </div>
    <div class="aulas">
      <CardCursoAula
        v-for="aula in data.aulas"
        :key="aula.id"
        :data="aula"
        :graduacao="data.graduacao"
      />
    </div>
  </section>
</template>

<script>
import CardCursoAula from "@/components/CardCursoAula.vue";

export default {
  data() {
    return {
      background: `background: transparent;`,
      hr: `border: 1px solid ${this.data.corPrimaria}`,
      section: `border: 2px solid ${this.data.corPrimaria}; box-shadow: 0 0 10px ${this.data.corPrimaria}; `,
    };
  },
  props: {
    data: Object,
  },
  components: {
    CardCursoAula,
  },
  computed:{
    caminhoImg(){
      return `../assets/icons/${this.data.id}.svg`
    }
  }
};
</script>

<style scoped>
a{
  text-decoration: none;
  color: #fff;
}
.container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: fit-content;
  max-width: 82vw;
  border-radius: 20px;
  background: #222;
}
.graduacao {
  width: fill;
}
.graduacao-cabecalho {
  display: flex;
  align-items: center;

  width: fill;
  height: fit-content;
  margin: 1.5rem 2rem;
}
.img-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 150px;
  width: 150px;
  border-radius: 10px;
}
img{
  width: 100%;
  max-height: 100%;
  max-width: 100px;
  margin: 5px;
}
.infos-principais {
  width: fill;
  height: fill;
  margin-left: 2rem;
}
.curso {
  text-align: end;
  width: fill;
  height: fill;
  margin-top: 1rem;
}
.titulo {
  display: flex;
  align-items: end;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  width: fill;
}
.titulo h1 {
  font-size: 25pt;
}
.spans {
  display: flex;
  flex-direction: column;
  align-items: center;

  width: fit-content;
  height: fill;

  font-size: 10pt;
  font-weight: bold;
  color: #666;
}
.spans span {
  margin: 0.2rem 0;
}
.graduacao p {
  margin: 0 5rem;
  font-size: 12pt;
  width: 80rem;
  max-width: fill;
}
.aulas {
  display: grid;
  height: fit-content;
  width: fit-content;
  grid-template-columns: repeat(2, 1fr);
  margin: 5rem;
  gap: 2rem;
}
@media screen and (max-width: 1750px) {
  .aulas {
    grid-template-columns: 1fr;
  }
}
@media screen and (max-width: 760px) {
  .container{
    margin: 4rem 1rem;
  }
  .graduacao-cabecalho {
    flex-direction: column;
    margin: 2rem 0;
    align-items: center;
  }
  .infos-principais {
    margin: 2rem;
  }
  .titulo{
    flex-direction: column;
    align-items: center;
    justify-content:flex-start;
  }
  .curso{
    text-align: center;
  }
}
</style>
