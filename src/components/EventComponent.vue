<template>
  <div class="event"> 
    <div class="image">
      <img :src="image" alt="event image" />
    </div>
      <div class="title">
        <h4>{{ title }}</h4>
      </div>
      <div class="content">
        <p>{{ content }}</p>
      </div>
  </div>
</template>

<script>

export default {
    name: "EventComponent",
    props: {
    title: String,
    content: String,
    image: String,
    link: String,
    author: String,
  },
}
</script>

<style>
.event{
  padding: 15px;
  max-width: 400px;
  max-height: 550px;
   
}
img{
  max-width: 400px;
}

</style>