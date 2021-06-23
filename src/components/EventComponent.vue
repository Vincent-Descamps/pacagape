<template>
<div>
    <div class="list">
      <div class="event" v-for="event in events" :key="event.id">
        <a :href="event.link">
          <div class="title">
            <h4>{{ event.title }}</h4>
          </div>
        <div class="image">
          <img :src="event.image" alt="event image" />
        </div>
          <div class="content">
            <p>{{ event.content }}</p>
            <date>le {{ event.date }}</date>
          </div>
        </a>
      </div>
  </div>
</div>  
</template>

<script>
import data from "@/data.json"

export default {
  name: "EventComponent",
    props: {
      events: {
        type: Array,
        required: true
      }
  },
    data () {
      return {
        title: data.title,
        image: data.event.image,
        content: data.event.content,
        author: data.event.author,
        link: data.event.link,
        date: data.event.date,
      }
    }
}
</script>

<style>
.event{
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 15px;
  max-width: 400px;
  max-height: 550px;
   
}
.list{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
img{
  max-width: 400px;
}
a{
  text-decoration: none;
  color: black;
}


</style>