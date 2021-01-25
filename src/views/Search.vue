<template>
  <div class="h blue-grey lighten-3">
    <div v-if="isLoading" class="table">
      <Loader />
    </div>
    <Table
      v-show="searchResults.length"
      :searchResults="searchResults"
      v-else
    />
    <Pagination
      :currentUrlPage="currentUrlPage"
      v-show="searchResults.length"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";
import Pagination from "./../components/Pagination.vue";
import Modal from "./../components/Modal.vue";
import Table from "./../components/Table.vue";
import Loader from "./../components/Loader.vue";

export default {
  name: "Search",
  components: { Table, Loader, Modal, Pagination },
  computed: {
    ...mapGetters(["isLoading", "searchResults", "showModal"]),
    currentUrlPage() {
      return +this.$route.query.currentPage;
    },
  },
  methods: {
    ...mapMutations(["toggleShowModal"]),
  },
  created() {
    console.log("ok");
    const { search, from, packageName } = this.$route.query;
    this.$store.dispatch({
      type: "fetchSearchResults",
      text: search,
      from,
    });
    if (packageName) {
      this.toggleShowModal(true);
      this.$store.dispatch("fetchCurrentPackage", packageName);
    }
  },
};
</script>

<style lang="scss" scoped>
.table {
  width: 85%;
  height: 91%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.h {
  height: 79%;
  width: 85%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
