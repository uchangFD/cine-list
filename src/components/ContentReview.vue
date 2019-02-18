<template>
  <div class="viewer__wrapper">
    <div 
      class="viewer__container"
      v-for="(item, index) in values" 
      :key="index"
    >
      <div class="viewer__header">
        <h3 class="viewer__title">{{item.value.userMail}}</h3>
        <div class="viewer__date-wrapper">
          <span wrap class="viewer__date">{{new Date(item.value.timeStamp).toLocaleDateString("en-US")}}</span>
          <span wrap class="viewer__time">{{new Date(item.value.timeStamp).toLocaleTimeString("en-US")}}</span>
        </div>
      </div>
      <div class="viewer__body">
        <p class="viewer__description">{{item.value.description}}</p>
      </div>
      <div class="viewer__footer"></div>
    </div>
  </div>
</template>


<script>
export default {
  props: ['values']
}

</script>

<style lang="scss">
.viewer__wrapper {
  // grid-column: 3 / 8;
  // grid-row: 4;
  .viewer__container {
    border-radius: 4px;
    padding-top: .5rem;
    background: #faa;
    height: 100%;
    width: 100%;
    margin: 1.5rem auto;
    .viewer__header {
      background: #ad0;
      margin: .5rem;
      padding-right: .5rem;
      padding-left: .5rem;
      height: 1.5rem;
      display: flex;
      justify-content: space-between;
      .viewer__title {
        color: #333;
        display: inline;
        vertical-align: middle;
        font-size: 1.2rem;
      }
      .viewer__date-wrapper {
        font-size: 1.1rem;

        .viewer__date {
          color: #888;
          vertical-align: middle;
        }
        .viewer__time {
          color: #888;
          vertical-align: middle;

        }
      }
    }
    .viewer__body {
      background: #0ad;
      margin: .5rem;
      height: 100px;
      .viewer__description {

      }
    }
    .viewer__footer {
      background: #afa;
      height: 1.5rem;
      margin: .5rem;
    }
  }
}

</style>
