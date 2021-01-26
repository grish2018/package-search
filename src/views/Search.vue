<template>
  <div class="search">
    <Loader v-if="isLoading" />
    <template v-else>
      <Table v-show="searchResults.length" :searchResults="searchResults" />
      <Pagination
        :currentUrlPage="currentUrlPage"
        v-show="searchResults.length"
      />
    </template>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
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
      return Number(this.$route.query.page);
    },
  },
  methods: {
    ...mapActions(["fetchSearchResults", "fetchCurrentPackage"]),
    ...mapMutations(["toggleShowModal"]),
  },
  created() {
    const { search, from, package_name } = this.$route.query;
    this.fetchSearchResults({
      text: search,
      from,
    });
    if (package_name) {
      this.toggleShowModal(true);
      this.fetchCurrentPackage(package_name);
    }
  },
};
</script>

<style lang="scss" scoped>
.search {
  width: 85%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
