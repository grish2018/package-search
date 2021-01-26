<template>
  <div class="modal">
    <Loader v-if="isLoadingCurrentPackage" />
    <v-card v-else class="mx-auto" width="500" v-click-outside="hideModal">
      <v-toolbar color="blue-grey lighten-3">
        <v-toolbar-title>{{ currentPackage.name }}</v-toolbar-title>
      </v-toolbar>
      <v-list>
        <v-list-group v-for="(item, index) in listData" :key="index" no-action>
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item v-for="child in item.items" :key="child.title">
            <v-list-item-content>
              <v-list-item-title
                v-text="formatedText(child.title)"
              ></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-card>
    <v-footer height="80px" class="pa-0" absolute>
      <v-card height="100%" width="100%" class="p-0"></v-card>
    </v-footer>
  </div>
</template>

<script>
import Loader from "./../components/Loader";
import moment from "moment";
import { mapMutations } from "vuex";
import { mapGetters } from "vuex";
export default {
  name: "Modal",
  components: { Loader },
  methods: {
    ...mapMutations(["toggleShowModal"]),
    hideModal() {
      this.toggleShowModal(false);
    },
    formatedText(text) {
      if (text === `undefined`) {
        return `-----------------------------`;
      } else {
        return text;
      }
    },
  },
  computed: {
    ...mapGetters(["isLoadingCurrentPackage", "currentPackage"]),
    listData() {
      return [
        {
          items: [
            { title: `Name: ${this.currentPackage.author?.name}` },
            { title: `Email: ${this.currentPackage.author?.email}` },
          ],
          title: "Author",
        },
        {
          items: [{ title: `${this.currentPackage.description}` }],
          title: "Description",
        },
        {
          items: [{ title: `${this.currentPackage.repository?.url}` }],
          title: "Repository",
        },
        {
          items: [
            {
              title: `Created: ${moment(
                this.currentPackage.time?.created
              ).format("DD/MM/YYYY h:mm:ss")}`,
            },
            {
              title: `Modified: ${moment(
                this.currentPackage.time?.modified
              ).format("DD/MM/YYYY h:mm:ss")}`,
            },
          ],
          title: "Time",
        },
      ];
    },
  },
};
</script>

<style lang="scss" scoped>
.modal {
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.7);
  z-index: 900;
  box-sizing: border-box;
}
</style>