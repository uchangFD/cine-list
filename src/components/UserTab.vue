<template>
  <div class="user-info__tab">
    <ul class="tab-list">
      <li 
        v-for="(tab, index) in tabs" 
        :key="index"
        :data-category="tab"
        class="tab-item"
        :class="{activedTab: tab === selectedTab}"
        @click="onClickTab(tab)"
      >
      {{tab}}
      </li>
    </ul>

    <div v-if="selectedTab">
      <TabDetail
        :tabs="tabs" 
        :selected-tab="selectedTab" 
      />
    </div>
  </div>
</template>

<script>
import UserTabList from './UserTabList.vue'
export default {
  components: { 'TabDetail': UserTabList },
  props: ['tabs', 'selectedTab'],

  methods: {
    onClickTab: function(tab) {
      this.$emit('@change', tab)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables.scss";

@media screen and(min-width: $desktop){
  .user-info__tab {
    margin-top: 1rem;
    .tab-list {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 0rem;
      border-bottom: 3px solid #484848;
      .tab-item {
        color: #ced4da;
        text-align: center;
        position: relative;
        padding: 1rem;
        margin-bottom: -3px;
        font-size: 1.2rem;
        cursor: pointer;
        transition: color .5s;
      }
    }
  }

  .activedTab {
    background: $gradient-color;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    border-bottom: 3px solid #66a6ff;
  }
}

</style>
