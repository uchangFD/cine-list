<template>
  <div>
    <div v-if="selectedTab === 'Synopsis'"><p>{{contents.overview}}</p></div>
    <div v-if="selectedTab === 'Cast'">
      <div v-for="(actor, idx) in casts.cast.slice(0, 5)" :key="idx">
        <p>{{actor.name}}, {{actor.character}} 역</p>
      </div>
    </div>

    <div v-if="selectedTab === 'Videos'">
      <div 
        v-for="(video, idx) in videoId.results.slice(0,4)" 
        :key="idx"
        style="display: inline;"
      >
        <iframe 
          class="videos"
          width="222" 
          height="125" 
          :src="`https://www.youtube.com/embed/${video.key}`" 
          frameborder="0" 
        >
        </iframe>
      </div>
    </div>

    <div v-if="selectedTab === 'Related'">
      <p>{{selectedTab}}</p>
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

<style lang="scss" scoped>

.tab-list__container {
  .tab-list__wrapper {
    display: none;
    &.active {
      display: block;
    }
    .tab-list__item-wrapper {
      .tab-list__item {
        .tab-list__cast-wrapper {
          .tab-list__cast {
  
          }
        }
      }
    }
  }
}



</style>
