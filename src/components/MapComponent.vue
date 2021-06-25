<template>
  <div style="height: 800px; width: 100%">
    <l-map
      :zoom="zoom"
      :center="center"
      :options="mapOptions"
      style="height: 90%"
      @update:center="centerUpdate"
      @update:zoom="zoomUpdate"
    >
      <l-tile-layer
        :url="url"
      />
      <l-marker 
        v-for="(marker, id) in markers"
        :key="id" 
        :latLng="[marker.x_coordinate, marker.y_coordinate]">
        <l-popup>
            <div><b>{{ marker.name }}</b></div>
              <div>{{ marker.address }}</div>
              <div> {{ marker.postcode }}, {{ marker.city }}.</div>
              <a :href="marker.website">Aller sur le site</a>
        </l-popup>
        <l-tooltip>{{ marker.name }}</l-tooltip>
        </l-marker>
    </l-map>
  </div>
</template>

<script>
import data from "@/data.json"
import { latLng } from "leaflet";
import { LMap, LTileLayer, LMarker, LTooltip, LPopup } from "vue2-leaflet";
import { Icon } from "leaflet";

delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

export default {
  name: "Example",
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LTooltip,
    LPopup
  },
  data() {
    return {
      zoom: 11,
      center: latLng(43.641351186888635, 7.15727424730847),
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      mapOptions: {
        zoomSnap: 0.5
      },
      markers: [],
      data,
    };
  },

  methods: {
    zoomUpdate(zoom) {
      this.currentZoom = zoom;
    },
    centerUpdate(center) {
      this.currentCenter = center;
    },
  },

  mounted: async function (){
    this.data.church.forEach((d) => {
      const {
          name,
          denomination,
          address,
          postcode,
          city,
          phone,
          website,
          x_coordinate,
          y_coordinate
        } = d;
    this.markers.push({
      name,
      denomination,
      address,
      postcode,
      city,
      phone,
      website,
      x_coordinate,
      y_coordinate
      });
      console.log(this.markers);
    }) 
    // console.log(this.data.church);
  }
}
</script>

<style>

</style>