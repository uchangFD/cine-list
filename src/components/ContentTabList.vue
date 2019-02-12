<template>
  <div class="tab-list__container">
    <div 
      v-if="selectedTab === 'Synopsis'"
      class="tab-list__synopsis"
    >
      <p class="tab-list__synopsis-paragraph">{{contents.overview}}</p>
    </div>

    <div 
      v-if="selectedTab === 'Cast'"
      class="tab-list__cast"
    >
    
      <div 
        v-for="(actor, idx) in casts.cast.slice(0, 5)" 
        :key="idx"
        class="tab-list__cast-item"
      >
        <div class="tab-list__cast-info">
          <div class="tab-list__cast-info__profile">
            <router-link :to="`/people/${actor.id}`">
              <img 
                :src="`https://image.tmdb.org/t/p/w138_and_h175_face${actor.profile_path}`" 
                :alt="`${actor.name}`"
                class="tab-list__cast-info__profile-image"
              >
            </router-link>
            <p class="tab-list__cast-info__profile__character">{{actor.character}} 역</p>
            <p class="tab-list__cast-info__profile__name">{{actor.name}}</p>
            <p>{{actor.id}}</p>
          </div>
        </div>
      </div>
    </div>

    <div
      v-if="selectedTab === 'Videos'"
      class="tab-list__videos"
    >
      <div
        v-for="(video, idx) in videoId.results.slice(0, 3)" 
        :key="idx"
        style="display: inline;"
        class="tab-list__videos-embed"
      >
        <iframe 
          width="95%" 
          height="125" 
          :src="`https://www.youtube.com/embed/${video.key}`" 
          frameborder="0" 
          allowfullscreen
        >
        </iframe>
      </div>
    </div>

    <div 
      v-if="selectedTab === 'Related'"
      class="tab-list__related"
    >
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
  .tab-list__synopsis {
    .tab-list__synopsis-paragraph {

    }
  }

  .tab-list__cast {
    margin-top: .8rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 2px;
    .tab-list__cast-item {
      display: inline-block;
      .tab-list__cast-info {
        display: block;
        font-size: .8rem;
        margin: 0 auto;
        .tab-list__cast-info__profile {
          width: 100%;
          .tab-list__cast-info__profile-image {
            width: 120px;
            height: 120px;
            border-radius: 60px;
            object-fit: cover;
            margin: 0 auto;
            display: block;
          } 
          p {
            text-align: center;
          }
          .tab-list__cast-info__profile__name, 
          .tab-list__cast-info__profile__character {
            margin-top: .5rem;
          }
        }
      }
    }
  }

  .tab-list__videos {
    margin-top: .8rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2px;
    .tab-list__videos-embed {
      margin: 0 auto;
    }
  }


}



</style>
