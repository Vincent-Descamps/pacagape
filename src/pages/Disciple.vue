<template>
  <div class="disciple">
    <h1>Disciple</h1>
    <br>
    <div class="verse">
    <verse-component />
    </div>
  </div>
</template>

<script>
import VerseComponent from '../components/VerseComponent.vue'
export default {
  components: { VerseComponent },

}
</script>

<style scoped>

.verse{
  margin: 0 auto;
  margin-top: 5%;
  width: 600px;
}

</style>