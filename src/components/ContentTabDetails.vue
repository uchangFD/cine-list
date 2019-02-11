<template>
  <div id="tab-details__container">
    <div 
      v-for="(tab, index) in tabs"
      :key="index"
      :id="`details-${tab.toLowerCase()}`"
      class="tab-details__wrapper"
    >
    <div 
      :class="{active: tab === selectedTab}"
      class="tab-details__item"
    >
    <div v-if="tab.toLowerCase() === 'synopsis'">
      {{contents.overview}}
    </div>
    <div v-if="tab.toLowerCase() === 'cast'">
      <div v-for="(actor, index) in casts.cast.slice(0,5)" :key="index">
        {{actor.name}} // {{actor.character}}
      </div>
    </div>
    <div v-if="tab.toLowerCase() === 'videos'">
      This is videos
    </div>
    <div v-if="tab.toLowerCase() === 'related'">
      This is related
    </div>
    </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  props: ['tabs', 'selectedTab'],
  
  computed: {
    ...mapState({
      contents: 'contents',
      videoId: 'videoId',
      casts: 'casts',
    })
  },


}
</script>

<style>
.tab-details__item {
  display: none;
}

.active {
  display: block;
}

</style>
