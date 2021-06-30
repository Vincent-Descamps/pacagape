<template>
  <div class="unity">
    <header>
      <h1>Unité</h1>
      <p>
        <cite>
          «Maintenant donc il y a plusieurs membres et un seul corps»
        </cite>
        1 Corinthiens 12:20
      </p>
    </header>
    <main>
      <h1>Évenements Chrétiens</h1>
      <!--Publication des evenements chrétiens de la région-->
      <event-component :events="events" />
      <h1>Trouver un église</h1>
      <map-component />
    </main>
  </div>
</template>

<script>
import data from "@/data.json";
//import axios from 'axios';
import EventComponent from "@/components/EventComponent.vue";
import MapComponent from "../components/MapComponent.vue";

export default {
  components: {
    EventComponent,
    MapComponent,
  },
  data() {
    return {
      events: data.event,
    };
  },
  //a remplacer par api bdd
  // mounted () {
  //     axios
  //     .get("https://newsapi.org/v2/top-headlines?country=fr&apiKey=e46b0aaf0ca445f1852d261b861e4eb0")
  //     .then(response => (this.data = response.data.articles));
  // }
};
</script>

<style scoped>
main h1 {
  text-align: center;
  padding: 80px;
}
</style>
