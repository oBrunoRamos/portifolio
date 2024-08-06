<template>
  <div class="container-historia">
      <h1>Minha História</h1>
      <hr>
      <div class="historia">
        <section v-for="texto in minhaHistoria" :key="texto.id">
          <div class="texto-header">
            <h1>{{ texto.titulo }}</h1>
            <span>{{ texto.data }}</span>
          </div>
          <hr class="hr-texto">
          <p>{{ texto.paragrafo }}</p>
        </section>

      </div>
  </div>
</template>

<script>
import jsonSobreMim from '@/assets/JSON/sobremim.json'

export default {
  data(){
    return{
      minhaHistoria: jsonSobreMim.minhaHistoria
    }
  }
}
</script>

<style scoped>
span {
  color: #666;
  font-weight: bold;
  font-size: 10pt;
}
.container-historia{
  width: fill;
  height: fill;
  max-height: 35rem;
  margin: 0 1.5rem;
}
hr {
  border: 1px solid #0270ff;
}
.historia{
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  height: fill;
  max-height: 30rem;
  margin: 0 1rem;
}
section{
  margin: 3rem 0;
}
section:first-child{
  margin: 1rem 0;
}
.texto-header{
  display: flex;
  justify-content: space-between;
  align-items: end;
}
.texto-header h1{
  font-size: 15pt;
  margin: 0;
}
.hr-texto{
  border: 1px solid #363636;
}
</style>