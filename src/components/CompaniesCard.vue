<template>
  <div class="card-container" :style="container">
    <div class="dados-principais">
      <div class="nome-local">
        <h2>{{ data.nome }}</h2>
        <span>{{ data.cidade }} | {{ data.pais }}</span>
      </div>
      <hr :style="container" />
      <div class="cargo">
        <span>{{ data.cargo }}</span>
        <span>{{ data.formaTrabalho }}</span>
      </div>
      <p class="descricao">{{ data.descricao }}</p>
      <span class="funcao">Funções:</span>
      <ul class="funcoes">
        <li v-for="funcao in data.funcoes" :key="funcao">{{ funcao }}</li>
      </ul>
    </div>
    <a :style="botao" :href="data.link" target="blank">Mais sobre a empresa</a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      container: `border: 1px solid ${this.data.cor};`,
      botao: `background:${this.data.cor};`,
    };
  },
  props: {
    data: Object,
  },
};
</script>

<style scoped>
h2,
span,
p {
  margin: 0;
}
.card-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  height: 32rem;
  width: 22rem;
  margin: 1rem;
  padding: 1rem;

  border-radius: 20px;

  background: #222;
  box-shadow: 0 0 10px #000;
}
.dados-principais {
  display: flex;
  flex-direction: column;
  width: fill;
  align-items: center;
}
.nome-local {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.5rem 0;
  width: fill;
}
hr {
  width: fill;
}
.cargo {
  display: flex;
  width: fill;
  justify-content: space-between;
  align-items: center;
  margin: 0.5rem 0;
}
span {
  width: fit-content;
  text-align: center;
  font-size: 10pt;
  padding: 0 1rem;
  color: #666;
  font-weight: bolder;
}
.nome-local span{
  padding: 0;
}
.descricao {
  color: #fff;
  text-align: start;
  max-width: 90%;
  font-weight: 100;
  font-size: 11pt;
  min-height: 14em;
  margin-top: 1rem;
}
.funcao{
align-self: start;
margin-top: 1rem;
margin-bottom: .5rem;
}
.funcoes{
  width: fill;
  margin: 0 1rem;

}
li {
  font-size: 9pt;
  list-style: none;
}
a {
  display: flex;
  justify-content: center;
  align-items: center;
  width: fill;
  height: 3rem;
  max-height: 3rem;
  margin: 1rem;
  text-decoration: none;
  color: #fff;
  border-radius: 5px;
}
a:hover {
  transform: scale(1.03);
}
@media screen and (max-width: 1350px) {
  .card-container {
    height: fit-content;
  }
  .descricao{
    min-height: fit-content;
  }
}
</style>
