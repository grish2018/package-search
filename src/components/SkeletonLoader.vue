<template>
  <div class="table">
    <v-skeleton-loader
      :width="width"
      :height="height"
      :type="type"
    ></v-skeleton-loader>
  </div>
</template>

<script>
export default {
  name: "SkeletonLoader",
  props: ["width", "height", "type"],
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
</style>