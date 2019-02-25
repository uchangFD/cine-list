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
            <router-link :to="`/person/${actor.id}`">
              <img
                :src="actor.profile_path ? `https://image.tmdb.org/t/p/w138_and_h175_face${actor.profile_path}`: profileImage"
                :alt="`${actor.name}`"
                class="tab-list__cast-info__profile-image"
              >
            </router-link>
            <p class="tab-list__cast-info__profile__name">{{actor.name}}</p>
          </div>
        </div>
      </div>
    </div>



    <div v-if="selectedTab === 'Videos'" class="tab-list__videos">
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
          target="_blank"
        >
        </iframe>
      </div>
    </div>



    <div v-if="selectedTab === 'Related'" class="tab-list__related">
      <p>{{selectedTab}}</p>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  props: ['tabs', 'selectedTab'],

  data() {
    return {
      profileImage: 'https://user-images.githubusercontent.com/23162772/53229626-15e1f600-36c8-11e9-8e39-ce7ae4fb0fdb.png',
    }
  },

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
    margin-top: .8rem;
    margin-right: auto;
    margin: 1rem;
    width: 90%;
    max-height: 200px;
    overflow-y: hidden;
    .tab-list__synopsis-paragraph {
      font-size: .85rem;
      line-height: 1.6;
      font-weight: 300;
      letter-spacing: .7px;
    }
  }

  .tab-list__cast {
    margin-top: .8rem;
    display: flex;
    justify-content: space-around;
    width: 100%;
    .tab-list__cast-item {
      max-width: 18%;
      .tab-list__cast-info {
        width: 100%;
        .tab-list__cast-info__profile {
          height: 100%;
          min-width: 100%;
          opacity: 0.5;
          transition: opacity 750ms;
          
          &:hover {
            opacity: 1;
          }
          .tab-list__cast-info__profile-image {
            display: block;
            margin: 0 auto;
            width: 80px;
            height: 80px;
            object-fit: cover;
            border-radius: 40px;
            box-shadow: 0 1px 2px #181818;
          } 
          .tab-list__cast-info__profile__name, 
          .tab-list__cast-info__profile__character {
            text-align: center;
            margin-top: .5rem;
            font-size: .75rem;
            font-weight: 300;
            width: 80px;
            word-break: keep-all;
            letter-spacing: 1.2px;
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
