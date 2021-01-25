<template>
  <div class="full blue-grey lighten-3 d-flex align-center flex-column">
    <SkeletonLoader
      v-if="isLoading"
      :width="'85%'"
      :height="'515px'"
      :type="'table'"
    />
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
import SkeletonLoader from "./../components/SkeletonLoader.vue";

export default {
  name: "Search",
  components: { Table, SkeletonLoader, Modal, Pagination },
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
.full {
  width: 100%;
  height: 100%;
}
</style>
