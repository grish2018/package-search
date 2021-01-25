<template>
  <v-pagination
    v-model="page"
    circle
    :color="'blue-grey lighten-3'"
    :length="Math.ceil(totalResults / 10)"
    :total-visible="7"
    @input="setPage"
    class="mt-5 mb-5"
  />
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Pagination",
  data() {
    return {
      page: 1,
    };
  },
  props: {
    currentUrlPage: {
      required: true,
    },
  },
  mounted() {
    if (this.$route.query.currentPage) {
      this.page = +this.$route.query.currentPage;
    }
  },
  watch: {
    currentUrlPage(newUrlPage) {
      this.page = newUrlPage;
    },
  },
  computed: {
    ...mapGetters(["totalResults"]),
  },
  methods: {
    setPage() {
      if (this.page === +this.$route.query.currentPage) {
        return;
      } else {
        const { search } = this.$route.query;
        const from = (this.page - 1) * 10;
        this.$store.dispatch({
          type: "fetchSearchResults",
          text: search,
          from,
        });
        this.$router.push({
          path: "/search",
          query: { search, from, currentPage: this.page },
        });
      }
    },
  },
};
</script>