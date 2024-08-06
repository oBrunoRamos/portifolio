<template>
  <section>
    <ul class="lista">
      <li v-for="skill in skills" :key="skill.id" :id="skill.id">
        <HardSkillComponent :data="skill" />
      </li>
    </ul>
  </section>
</template>

<script>
import HardSkillComponent from "@/components/HardSkillComponent.vue";
import jsonHardSkills from "@/assets/JSON/hard-skills.json";

export default {
  data() {
    return {
      skills: jsonHardSkills,
    };
  },
  components: {
    HardSkillComponent,
  },
};
</script>

<style scoped>
section{
  width: fill;

}
.lista {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: center;
  justify-items: center;
}
li {
  list-style: none;
}
@media screen and (max-width: 1614px) {
  .lista {
    grid-template-columns: 1fr;
  }
}
</style>
