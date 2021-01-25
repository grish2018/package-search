<template>
  <v-app>
    <div
      style="height: 100vh"
      class="blue-grey lighten-3 d-flex align-center flex-column"
    >
      <Modal v-if="showModal" />
      <TextField />
      <router-view />
      <Footer />
    </div>
  </v-app>
</template>

<script>
import TextField from "./components/TextField.vue";
import Footer from "./components/Footer.vue";
import Modal from "./components/Modal.vue";
import { mapGetters } from "vuex";
export default {
  name: "App",
  components: { TextField, Modal, Footer },
  computed: {
    ...mapGetters(["showModal", "searchResults"]),
    currentUrlPage() {
      return +this.$route.query.currentPage;
    },
  },
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  outline: none;
}
::-webkit-scrollbar {
  width: 7px;
}
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px #f9f9ff;
  border-radius: 10px;
}
::-webkit-scrollbar-thumb {
  background: #dededf;
  border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
  background: #7d7d84;
}
</style>