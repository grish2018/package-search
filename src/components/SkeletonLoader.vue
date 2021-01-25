<template>
  <v-skeleton-loader
    :width="width"
    :height="height"
    :type="type"
  ></v-skeleton-loader>
</template>

<script>
export default {
  name: "SkeletonLoader",
  props: ["width", "height", "type"],
};
</script>