<template>
  <section>
    <div class="container">
      <div class="container-individual" id="foto">
        <div class="img-container">
          <img class="minha-foto" src="../assets/images/bruno.svg" alt="minha foto" />
        </div>
        <div class="div-generica" id="principais-tecnologias">
          <h3>Principais Tecnologias</h3>
          <hr />
          <div id="tags-container">
            <ul class="tags">
              <li
              @click="hardSkill(tecnologia.id)"
                v-for="tecnologia in sobreMim.principaisTecnologias"
                :key="tecnologia.id"
              >
                <div class="tag-container">
                  <img
                    id="tag"
                    :src="tecnologia.src"
                    :alt="tecnologia.nome"
                  />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="container-individual" id="central">
        <nav>
          <router-link :to="{ name: 'Sobre mim' }">Sobre mim</router-link>
          <router-link :to="{ name: 'Minha História' }"
            >Minha história</router-link
          >
        </nav>
        <transition>
          <router-view/>
        </transition>
      </div>
      <div class="container-individual" id="skills">
        <div class="div-generica" id="skills-container">
          <h3>Soft Skills</h3>
          <hr />
          <div  id="soft">
            <ul class="soft">
              <li v-for="skill in sobreMim.softSkills" :key="skill.id">
                <SoftSkillComponent :data="skill" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SoftSkillComponent from "@/components/SoftSkillComponent.vue";
import jsonSobreMim from "@/assets/JSON/sobremim.json";

export default {
  data() {
    return {
      sobreMim: jsonSobreMim,
    };
  },
  components: {
    SoftSkillComponent,
  },
  methods:{
    hardSkill(id){
      this.$router.push({name: 'Hard Skills', hash: `#${id}`})
    }
  },
  computed: {
    srcTag(id) {
      return `../assets/tags/${id}.svg`;
    },
  },
};
</script>

<style scoped>

.v-enter,
.v-leave-to{
  opacity: 0;
}
.v-enter-active,
.v-leave-active{
  transform: translate3d(0 -20px, 0);
  transition: all .3s;
}


a {
  color: #666;
  font-weight: bold;
  margin: 0 1rem;
}
.router-link-active {
  color: #fff;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;

  height: 40rem;
  border: 1px solid #0270ff;
  border-radius: 20px;
}
.div-generica {
  background: #222;
  border: 1px solid #0270ff;
  height: fill;
  max-height: 36rem;
  width: 20rem;
  margin: 1rem;
  padding: 1rem;
  border-radius: 20px;
  box-shadow: 0 0 10px #0270ff;
}
.div-generica ul {
  width: fill;
}
.div-generica li {
  width: fill;
  list-style: none;
}
#central {
  align-items: start;
  width: 50rem;
  margin: 1rem 0;
  flex: 1;
}
#central nav {
  margin-top: 1rem;
  margin-bottom: 0.5rem;
}
#foto{
  max-width: 400px;
}
hr {
  border: 1px solid #0270ff;
}
.container-individual {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: fill;
  max-height: 40rem;
  width: fit-content;
  margin: 1rem 0;
}
.img-container {
  display: flex;
  align-items: center;
  justify-content:center;
  width: fill;
  max-width: 20rem;
  height: 50%;
  max-height: 40%;

}
.minha-foto {
  max-width: 100%;
  max-height: 100%;
  width: fit-content;
  box-shadow: 0 0 10px #000;
  border-radius: 100%;
}
#tag {
  width: fit-content;
  height: fill;
}
.tag-container {
  height: 3rem;
  width: fit-content;
}
.tags {
  display: flex;
  flex-wrap: wrap;
}
.tags li{
  width: fit-content;
  padding: 5px;
}
#tags-container{
  height: 16rem;
  width: fill;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.soft {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
.soft li{
  width:12rem;
  margin:.5rem 1rem;
}
#soft {
  height: 32rem;
  width: 28rem;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
}
#skills{
  width: fit-content;
}
#skills-container{
    width: fit-content;
  }
@media screen and (max-width: 1530px) {
  .container{
    margin-top: 1rem;
    flex-direction: column;
    height: fit-content;
    border: none;
  }
  .div-generica{
    width: fill;
  }
  #central{
    width: fill;
    order: 1;
  }
  #foto{
    width: fill;
    order: 2;
    margin-top: 5rem;
  }
  #skills{
    margin: 5rem 0;
    width: fill;
    order: 3;
  }
  #skills-container{
    width: fill;
    margin: 1rem;
  }
  #soft{
    width: fill;
    margin: 0;
  }
  .soft li{
    width: fill;
    max-width: 14rem;
  }
}
@media screen and (max-width: 515px) {
  .soft li{
    width: fill;
    margin:.5rem 0rem;
    max-width: fill;
  }
  #soft{
    margin: 0;
  }
  .img-container {
    width: 80%;
  }
}
</style>
