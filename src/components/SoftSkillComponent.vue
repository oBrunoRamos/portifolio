<template>
  <div class="container-skill">
    <span class="nome">{{ data.skill }}</span>
    <div class="nivel-container">
      <div class="nivel" :style="nivel">
        <p>nivel</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      nivel: `width: ${this.data.nivel};`
    }
  },
  props: {
    data: Object,
  },
};
</script>

<style scoped>
.container-skill {
  width: fill;
}
.nome {
  font-weight: bold;
  margin-bottom: 1rem;
}
.nivel-container {
  display: flex;
  width: fill;
  height: 1rem;
  border-radius: 40px;
  background: #222;
  color: transparent;
  margin-top: 0.5rem;
  padding: 0;
}
.nivel {
  background: linear-gradient(90deg, #002e6b, #006eff);
  height: fill;
  margin: 0;
  padding: 0;
  border-radius: 40px;
}
</style>
