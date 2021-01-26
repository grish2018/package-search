<template>
  <div class="textField">
    <v-card width="35%" height="52%" class="d-flex align-center mt-5 mb-6">
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
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "TextField",
  data() {
    return {
      search: this.$route.query.search || "",
    };
  },
  methods: {
    ...mapActions(["fetchSearchResults"]),
    changeHandler() {
      this.fetchSearchResults({
        text: this.search,
        from,
      });
      const from = 0;
      this.$router.push({
        path: "/search",
        query: { search: this.search, from, page: 1 },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.textField {
  width: 100%;
  height: 11%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>