<template>
  <div>
    <div :style="backgroundMini" class="card-container mini" v-if="mini">
      <h3>{{ data.nome }}</h3>
      <hr :style="hrMini" />
      <ul>
        <li v-for="tag in data.tags" :key="tag">{{ tag }}</li>
      </ul>
      <a
        class="card-link"
        id="botao-do-card-projeto"
        :href="data.link"
        :style="botaoMini"
        >Confira o projeto</a
      >
    </div>
    <div v-else class="card-container big" :style="background">
      <div class="img-container">
        <img v-if="data.src" :src="data.src" :alt="data.nome" />
        <div v-else class="no-img" :style="`background:${data.cor};`">
          <p>{{ data.nome }}</p>
        </div>
      </div>
      <h3>{{ data.nome }}</h3>
      <span>{{ data.origem }}</span>
      <hr :style="hr" />
      <p>{{ data.descricao }}</p>
      <a
        class="card-link"
        id="botao-do-card-projeto"
        :href="data.link"
        :style="botao"
        target="blank"
        >Confira o projeto</a
      >
      <ul>
        <li v-for="tag in data.tags" :key="tag">{{ tag }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardProjetos",
  data() {
    return {
      hr: `border: 1px solid ${this.data.cor};`,
      background: `box-shadow: 0 0 10px ${this.data.cor};`,
      botao: `background: ${this.data.cor}`,
      hrMini: `border: 1px solid ${this.cor};`,
      backgroundMini: `box-shadow: 0 0 10px ${this.cor};`,
      botaoMini: `background: ${this.cor}`,
    };
  },
  props: {
    data: Object,
    mini: Boolean,
    cor: String,
  }
};
</script>

<style scoped>
.card-container {
  display: flex;
  flex-direction: column;

  height: fit-content;
  width: 18rem;
  padding: 1rem;

  border-radius: 15px;
  background: #222;
}
img {
  height: 100%;
}
.img-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 10rem;
  width: fill;
  border-radius: 10px;
  box-shadow: 0 0 10px #050505;
  overflow: hidden;
}
.no-img {
  width: fill;
  height: fill;
}
.no-img p {
  margin-left: 1rem;
  margin-top: 1rem;
  font-size: 12pt;
  font-weight: bold;
}
hr {
  width: fill;
  margin: 0.3rem 0;
}
span {
  color: #666;
  font-weight: bold;
  margin: 0.3rem 0;
}
h3 {
  margin: 1rem 0 0.3rem 0;
}
ul {
  display: flex;
  flex-wrap: wrap;
  padding: 1rem 0;
}
li {
  list-style: none;
  font-weight: bold;
  color: #666;
  padding: 0 2px;
}
li::after {
  content: "-";
  padding-left: 4px;
}
li:last-child::after {
  content: "";
}
p {
  font-size: 10pt;
  margin: 0.3rem 0;
  flex: 1;
}
a {
  text-align: center;
  padding: 1rem 0;
  border-radius: 5px;
  text-decoration: none;
  color: #fff;
  width: fill;
}
a:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
}
.mini {
  height: fit-content;
  width: fill;
  min-width: 10rem;
  max-width: 10rem;
}
.big {
  min-height: 30rem;
}
@media screen and (max-width: 678px) {
  .mini {
    max-width: none;
    width: 15rem;
  }
}
</style>
