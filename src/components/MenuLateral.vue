<template>
  <div class="modal-container" @click="cliqueFora">
    <nav
      class="container"
      @mouseenter="display('block')"
      @mouseleave="display('none')"
    >
      <ul>
        <routerLink
          v-for="route in this.$router.options.routes"
          :key="route.name"
          :to="{ name: route.name }"
          class="link"
          @click="fecharMenu"
        >
          <House v-if="route.name == 'Início'" class="icon" />
          <Coffee v-if="route.name == 'Sobre mim'" class="icon" />
          <FilePieChart v-if="route.name == 'Experiências'" class="icon" />
          <CodeXml v-if="route.name == 'Projetos'" class="icon" />
          <GraduationCap v-if="route.name == 'Graduações'" class="icon" />
          <BookText v-if="route.name == 'Cursos'" class="icon" />
          <MonitorCog v-if="route.name == 'Hard Skills'" class="icon" />
          <p id="nome">{{ route.name }}</p>
        </routerLink>
      </ul>
      <ul>
        <a
          v-for="rede in redesSociais"
          :key="rede.id"
          class="link link-externo"
          :href="rede.link"
          target="blank"
          @click="clicouLink"
        >
          <Instagram v-if="rede.id == 'instagram'" class="icon" />
          <Github v-if="rede.id == 'github'" class="icon" />
          <Linkedin v-if="rede.id == 'linkedin'" class="icon" />
          <p id="nome">{{ rede.nome }}</p>
        </a>
      </ul>
    </nav>
  </div>
</template>

<script>
import {
  BookText,
  CodeXml,
  Coffee,
  FilePieChart,
  Github,
  GraduationCap,
  House,
  Instagram,
  Linkedin,
  MonitorCog,
} from "lucide-vue-next";

import sobremim from "@/assets/JSON/sobremim.json";

export default {
  data() {
    return {
      redesSociais: sobremim.redesSociais,
    };
  },
  components: {
    House,
    Coffee,
    FilePieChart,
    CodeXml,
    GraduationCap,
    BookText,
    MonitorCog,
    Instagram,
    Github,
    Linkedin,
  },
  methods: {
    cliqueFora(event) {
      if (event.target == event.currentTarget) {
        this.$emit("fecharMenu");
      }
    },
    display(state) {
      document
        .querySelectorAll("#nome")
        .forEach((item) => (item.style.display = state));
    },
    clicouLink() {
      console.log("wijbiuwebfiweb");
    },
    fecharMenu() {
      if(window.outerWidth <= 1000){
        setTimeout(() => {
          this.$emit("fecharMenu");
        }, 10);
      }
    },
  },
};
</script>
<style scoped>
a {
  margin: 0;
  padding: 0;
  text-decoration: none;
  color: #666;
}
.router-link-active,
.router-link-exact-active {
  color: #fff;
}
.modal-container {
  display: flex;
  height: 92vh;
  width: fit-content;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  height: fill;
  width: fit-content;
  z-index: 2;
  padding-top: 3rem;
  padding-bottom: 12rem;

  border-right: 2px solid #0270ff;
  background: #222;
  color: #666;
}
ul {
  width: fill;
  height: fit-content;
}
.link {
  display: flex;
  align-items: center;

  width: fill;
  height: fill;
  padding: 0rem 2rem;
}
.link:hover {
  background: rgba(22, 22, 22, 0.8);
}
.icon {
  margin: 1rem 0;
}
#nome {
  margin-left: 1rem;
  display: none;
}
.layer {
  display: none;
  background: rgba(0, 0, 0, 0.5);
  width: fill;
  height: fill;
}
.link-externo {
  color: #fff;
}
@media screen and (max-width: 1000px) {
  .modal-container {
    display: none;
    position: absolute;
    z-index: 100;
    height: 92vh;
    padding: 0;
    width: fill;
    background: rgba(0, 0, 0, 0.4);
  }
  .container {
    height: fit-content;
    padding: 1rem 0;
    border-bottom: 1px solid#0270ff;
  }

  #nome {
    display: block;
  }
  .router-link-active,
  .router-link-exact-active {
    background: rgba(22, 22, 22, 0.8);
  }
}
@media screen and (max-height: 627px) {
  .modal-container {
    overflow: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    height: 1;
    padding: 0;
  }
  .container {
    height: fit-content;
    padding: 1rem 0;
    border-bottom: 1px solid#0270ff;
  }

  .router-link-active,
  .router-link-exact-active {
    background: rgba(22, 22, 22, 0.8);
  }
}
</style>
