<template>
  <div class="contents__tab-container">
    <ul class="contents__tab-list">
      <li 
        v-for="(tab, index) in tabs" 
        :key="index"
        class="contents__tab-item"
        :class="{activedTab: tab === selectedTab}"
        @click="onClickTab(tab)"
      >
      {{tab}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['tabs', 'selectedTab'],
  methods: {
    onClickTab: function(tab) {
      this.$emit('@change', tab)
    }
  }


}
</script>

<style lang="scss">

.contents__tab-container {
  background: #05a;
  grid-column: 3 / 7;
  grid-row: 2;
  margin-left: 1rem;
  margin-top: 1rem;
  .contents__tab-list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 0rem;
    border-bottom: 4px solid #fff;
    .contents__tab-item {
      text-align: center;
      position: relative;
      padding: 1rem;
      margin-bottom: -4px;
      cursor: pointer;
    }
  }
}

.activedTab {
  border-bottom: 4px solid #f0a;
}

</style>
