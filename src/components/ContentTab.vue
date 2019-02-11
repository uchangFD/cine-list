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
  // background: #05a;
  grid-column: 3 / 7;
  grid-row: 2;
  margin-left: 1rem;
  margin-top: 1rem;
  .contents__tab-list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 0rem;
    border-bottom: 3px solid #484848;
    .contents__tab-item {
      text-align: center;
      position: relative;
      padding: 1rem;
      margin-bottom: -3px;
      cursor: pointer;
    }
  }
}

.activedTab {
  color: #ffa;
  border-bottom: 3px solid #ffa;
}

</style>
