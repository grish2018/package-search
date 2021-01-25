<template>
  <v-footer width="100%" class="fh pa-0 mt-0">
    <v-card
      height="100%"
      width="100%"
      class="d-flex justify-center align-center blue-grey darken-1 rounded-0"
    >
      <v-img
        class="rounded-circle"
        max-height="68"
        max-width="68"
        src="./../assets/avatar.jpg"
      ></v-img>
      <div class="authorInfo">
        <span>Author Name: Vahe Hakobyan</span>
        <a href="https://github.com/Vahe9611">Author Github Link</a>
      </div>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss" scoped>
.fh {
  height: 10%;
}
.authorInfo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 8px;
  & a {
    text-decoration: none;
    color: black;
    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
}
</style>