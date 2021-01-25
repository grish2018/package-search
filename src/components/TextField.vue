<template>
  <v-card width="40%" height="53px" class="d-flex align-center mt-6 mb-6">
    <v-text-field
      @input="changeHandler"
      class="mx-2 mt-0 pt-0"
      v-model="search"
      append-icon="mdi-magnify"
      label="Enter package name"
      single-line
      hide-details
    ></v-text-field>
  </v-card>
</template>

<script>
export default {
  name: "TextField",
  data() {
    return {
      search: this.$route.query.search || "",
    };
  },
  methods: {
    changeHandler() {
      this.$store.dispatch({
        type: "fetchSearchResults",
        text: this.search,
        from,
      });
      const from = 0;
      this.$router.push({
        path: "/search",
        query: { search: this.search, from, currentPage: 1 },
      });
    },
  },
};
</script>