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
        <div class="tab-list__videos-wrapper">
            <FontAwesome 
              v-if="isVideoLoaded"
              class="video__icon" 
              :icon="['fab', 'youtube']" 
              ref="youtube"
              @click.prevent="onClickVideo(video.key)"
            />
          <img 
            class="tab-list__videos-image"
            :src="`https://img.youtube.com/vi/${video.key}/0.jpg`"
            @load="onLoad"
          />

          <div v-if="isShowModal && video.key === clicked">
            <VideoModal :video="video" @close="isShowModal = false" />
          </div>
        </div>
      </div>
    </div>


    <div v-if="selectedTab === 'Related'" class="tab-list__related">
      <p>{{selectedTab}}</p>
    </div>
  </div>
</template>

<script>
import VideoModal from './VideoModal.vue'
import { mapState, mapActions } from 'vuex'

export default {
  components: { VideoModal },
  props: ['tabs', 'selectedTab'],

  data() {
    return {
      profileImage: 'https://user-images.githubusercontent.com/23162772/53229626-15e1f600-36c8-11e9-8e39-ce7ae4fb0fdb.png',
      isShowModal: false,
      isVideoLoaded: false,
      clicked: ''
    }
  },

  computed: {
    ...mapState({
      contents: 'contents',
      videoId: 'videoId',
      casts: 'casts',
    })
  },
  methods: {
    onClickVideo: function(key) {
      this.isShowModal = true
      this.clicked = key
    },
    onLoad: function() {
      this.isVideoLoaded = true
    }
  }


}
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables.scss";

.tab-list__container {
  .tab-list__synopsis {
    margin-top: .8rem;
    margin-right: auto;
    margin: 1rem;
    width: 90%;
    max-height: 200px;
    overflow-y: hidden;
    .tab-list__synopsis-paragraph {
      font-size: .8rem;
      line-height: 1.8;
      font-weight: 300;
      text-align: left;
      letter-spacing: .5px;
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
            max-width: 80px;
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
    grid-gap: 5px;
    .tab-list__videos-embed {
      margin: 0 auto;
      .tab-list__videos-wrapper {
        position: relative;
        .video__icon {
          color: #000;
          opacity: .7;
          font-size: 4rem;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          cursor: pointer;
          &:hover {
            color: #f00;
            opacity: 1;
          }
        }
        .tab-list__videos-image {
          width: 100%;
        }
      }
    }
  }


}



</style>
