<template>
  <section class="contents__section">
    <div v-if="isLoading">
      <Loader />
    </div>
    <div 
      v-else 
      class="contents__wrapper"
    >
      <ContentImage />
      <ContentInfo />
      <ContentTab 
        :tabs="tabs" 
        :selected-tab="selectedTab" 
        v-on:@change="onClickedTab" 
      />
      <ContentAddReview />
    </div>
  </section>
</template>

<script>
import ContentImage from './ContentImage.vue'
import ContentInfo from './ContentInfo.vue'
import ContentTab from './ContentTab.vue'
import ContentAddReview from './ContentAddReview.vue'
import Loader from './Loader.vue'
import { mapActions } from 'vuex'

export default {
  components: { ContentImage, ContentInfo, ContentTab, ContentAddReview, Loader },
  props:['data'],

  data() {
    return {
      contentId: 0,
      isLoading: false,
      tabs: ['Synopsis', 'Cast', 'Videos', 'Related'],
      selectedTab : ''
    }
  },

  created() {
    this.selectedTab = this.tabs[0]
  },

  watch: {
    '$route': {
      handler :'fetch',
      immediate: true
    },
  },
  
  methods: {
    ...mapActions([
      'FETCH_CONTENTS',
      'FETCH_VIDEOS',
      'FETCH_CAST'
    ]),

    fetch: function() {
      this.isLoading = true
      this.FETCH_CONTENTS({id: this.$route.params.contentId})
      this.FETCH_VIDEOS({id: this.$route.params.contentId})
      this.FETCH_CAST({id: this.$route.params.contentId})
        .finally(_ =>{ this.isLoading = false})
    },

    onClickedTab: function(tab) {
      this.selectedTab = tab
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables.scss";


@media screen and (min-width: $desktop) {
  .contents__section {
    background: $baseline-color;
    margin-left: 250px;
    color: #fff;
    width: calc(100% - 250px);
    min-height: 100%;
    .contents__wrapper {
      padding-top: 50px;
      min-height: 100%;
      display: grid;
      grid-template-columns: repeat(8, 1fr);
      grid-gap: 5px;
      grid-auto-rows: minmax(5px, auto);
      max-width: 1190px;
      margin: 0 auto;
    }
  }
}


@media screen and (max-width: $mobile) {
  .contents__section {
    display: block;
    margin: 0;
    width: 100%;
  }
}




</style>
