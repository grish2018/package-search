<template>
  <v-pagination
    v-model="page"
    circle
    :color="'blue-grey lighten-3'"
    :length="Math.ceil(totalResults / 10)"
    :total-visible="7"
    @input="setPage"
    class="mt-1 mb-1"
  />
</template>

<script>
import { mapGetters, mapActions } from "vuex";
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
    if (this.$route.query.page) {
      this.page = Number(this.$route.query.page);
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
    ...mapActions(["fetchSearchResults"]),
    setPage() {
      if (this.page === Number(this.$route.query.page)) {
        return;
      } else {
        const { search } = this.$route.query;
        const from = (this.page - 1) * 10;
        this.fetchSearchResults({
          text: search,
          from,
        });
        this.$router.push({
          path: "/search",
          query: { search, from, page: this.page },
        });
      }
    },
  },
};
</script>