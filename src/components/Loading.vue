<template>
  <div v-if="isLoading" class="loading">
    Loading...
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";

const { mapState } = createNamespacedHelpers("loading");

export default {
  computed: {
    ...mapState({
      isLoading: state => state.isLoading
    })
  }
};
</script>

<style lang="scss">
.loading {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.7;
  background-color: #fff;
  z-index: 999;
}
</style>