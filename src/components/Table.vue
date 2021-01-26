<template>
  <div class="table">
    <v-simple-table fixed-header width="85%" height="542px">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Name</th>
            <th class="text-left">Description</th>
            <th class="text-left">npm link</th>
            <th class="text-left">Date</th>
            <th class="text-left">Version</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, index) in searchResults"
            :key="index"
            @click="showModal(item.package.name)"
            class="table__row"
          >
            <td>{{ item.package.name }}</td>
            <td>{{ item.package.description }}</td>
            <td>
              <a class="table__rowLink" :href="item.package.links.npm">{{
                item.package.links.npm
              }}</a>
            </td>
            <td>
              {{ formatDate(item.package.date) }}
            </td>
            <td>{{ item.package.version }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
import moment from "moment";
import { mapMutations, mapActions } from "vuex";
export default {
  name: "Table",
  props: {
    searchResults: {
      type: Array,
      required: true,
    },
  },
  methods: {
    ...mapActions(["fetchCurrentPackage"]),
    ...mapMutations(["toggleShowModal"]),
    formatDate(date) {
      return moment(date).format("DD/MM/YYYY");
    },
    showModal(name) {
      const currentQuery = this.$route.query;
      this.$router.push({
        path: "/search",
        query: { ...currentQuery, package_name: name },
      });
      this.toggleShowModal(true);
      this.fetchCurrentPackage(name);
    },
  },
};
</script>

<style lang="scss" scoped>
.message {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  &__text {
    font-size: 20px;
  }
}
.table {
  width: 100%;
  height: 91%;
  display: flex;
  align-items: center;
  justify-content: center;
  &__row {
    cursor: pointer;
  }
  &__rowLink {
    text-decoration: none;
    color: black;
    &:hover {
      color: blue;
      text-decoration: underline;
    }
  }
}
</style>