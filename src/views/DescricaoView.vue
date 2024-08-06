<template>
  <div class="container-sobre">
    <h1>Sobre mim</h1>
    <hr />
    <div class="infos">
      <ul class="info">
        <li>
          <span>Nome:</span>
          <p>{{ info.nome }}</p>
        </li>
        <li>
          <span>Idade:</span>
          <p>{{ info.idade }}</p>
        </li>
        <li>
          <span>E-mail:</span>
          <p>{{ info.email }}</p>
        </li>
        <li>
          <span>Competência:</span>
          <p>{{ info.competencia }}</p>
        </li>
        <li>
          <span>Número de contato:</span>
          <p>{{ info.numeroContato }}</p>
        </li>
        <li>
          <span>Naturalidade: </span>
          <p>{{ info.naturalidade }}</p>
        </li>
        <li>
          <span>Redes Sociais: </span>
          <ul class="redes">
            <li v-for="rede in info.redesSociais" :key="rede.id">
              <a :href="rede.link">{{ rede.nome }}</a>
            </li>
          </ul>
        </li>
        <li>
          <span>Cidade Atual: </span>
          <p>{{ info.cidadeAtual }}</p>
        </li>

      
      </ul>
    </div>
  </div>
</template>

<script>
import jsonSobreMim from "@/assets/JSON/sobremim.json";
export default {
  data() {
    return {
      info: jsonSobreMim,
    };
  },
};
</script>

<style scoped>
.container-sobre {
  width: fill;
  height: fill;
  max-height: 35rem;
  margin: 0 1.5rem;
}
hr {
  border: 1px solid #0270ff;
}
span {
  color: #666;
  font-weight: bold;
  font-size: 10pt;
}
.infos{
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  height: fill;
  max-height: 30rem;
}
.info{
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin: 1rem 2rem;
}
.infos li{
  list-style: none;
}
.redes li, a{
  margin: .5rem 0;
  color: #fff;
  font-weight: bold;
}
@media screen and (max-width: 630px) {
  .info{
    margin: 1rem 0;
  }
}
</style>
