<template>
<Modal>
  <div slot="body">
    <iframe     
      width="560px" 
      height="315px"
      :src="`https://www.youtube.com/embed/${video.key}?autoplay=1`"
      frameborder="0" 
      allowfullscreen
      target="_blank"
    />
  </div>
</Modal>
  
</template>

<script>
import Modal from './Modal.vue'
export default {
  props:['video'],
  components: { Modal },

  mounted() {
    this.onClickOutside(this.$el)
    this.onPressEscapeKey(this.$el)
  },
  
  methods: {
    onClickOutside: function(el) {
      document.querySelector('body').addEventListener('click', e => {
        this.$emit('close')
      })
    },
    
    onPressEscapeKey: function(el) {
      document.querySelector('body').addEventListener('keyup', e => { 
        if (e.keyCode === 27) {
          this.$emit('close')
        }
      })
    }
  }
}
</script>

<style>

</style>
