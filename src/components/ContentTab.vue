<template>
  <div class="contents__tab-container">

    <ul class="contents__tab-list">
      <li 
        v-for="(tab, index) in tabs" 
        :key="index"
        :data-category="tab"
        class="contents__tab-item"
        :class="{activedTab: tab === selectedTab}"
        @click="onClickTab(tab)"
      >
      {{tab}}
      </li>
    </ul>

    <div v-if="selectedTab">
      <TabList :tabs="tabs" :selected-tab="selectedTab" />
    </div>
  </div>
</template>

<script>
import ContentTabList from './ContentTabList.vue'
export default {
  components: { 'TabList' :ContentTabList },
  props: ['tabs', 'selectedTab'],
  
  methods: {
    onClickTab: function(tab) {
      this.$emit('@change', tab)
    }
  }


}
</script>

<style lang="scss">
@import "../assets/styles/variables.scss";

.contents__tab-container {
  grid-column: 3 / 8;
  grid-row: 2;
  margin-left: 1rem;
  margin-top: 1rem;
  height: 280px;
  .contents__tab-list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 0rem;
    border-bottom: 3px solid #484848;
    .contents__tab-item {
      color: $GRAY-4;
      text-align: center;
      position: relative;
      padding: 1rem;
      margin-bottom: -3px;
      font-size: 1.2rem;
      cursor: pointer;
      transition: color .5s;
      &:hover {
        color: $GRAY-1;
      }
    }
  }
}

.activedTab {
  background: $gradient-color;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  border-bottom: 3px solid #66a6ff;
}

</style>
