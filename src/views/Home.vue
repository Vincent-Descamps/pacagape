<template>
    <div class="home">
      <div class="title">
        <h1>PACAGAPÉ</h1>
      </div>
        <router-link id="link" class="share" :to="`/partage`">PARTAGE</router-link>
        <router-link id="link" class="unity" :to="`/unity`">UNITÉ</router-link>
        <router-link id="link" class="jesus" :to="`/jesus`">JÉSUS</router-link>
        <router-link id="link" class="disciple" :to="`/disciple`">DISCIPLE</router-link>
        <router-link id="link" class="evangelism" :to="`/evangelism`">ÉVANGÉLISATION</router-link>
        <router-link id="link" class="worship" :to="`/worship`">LOUANGES</router-link>
    </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
.home {
  position: relative; 
    height: 100vh;
    width: 100%;
}
.home::before {    
      content: "";
      background-image: url("../assets/lion.jpg");
      background-size: cover;
      position: absolute;
      z-index: -1;
      top: 0px;
      right: 0px;
      bottom: 0px;
      left: 0px;
      opacity: 0.4;
}
.title{
  padding: 3%; 
  position: relative;
}
h1{
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-size: 6rem;
  text-shadow:  5px 5px rgba(92, 92, 92, 0.534);
  line-height: 0.8;
  letter-spacing: 0.8rem;
  color: #2F819C;
}
#link:hover{
  transition: transform .2s;
  transform: scale(1.5);
}
#link{
  text-decoration: none;
  position: absolute;
}
.share{
  margin-left: 120vh;
  margin-top: -5vh;
  font-size: 3.3rem;
}
.unity{
  margin-left: 12vh;
  margin-top: 5vh;
  font-size: 3.4rem;
}
.jesus{
  margin-left: 80vh;
  margin-top: 20vh;
  font-size: 3.8rem;
}

.disciple{
  margin-left: 80%;
  margin-top: 13%;
  font-size: 3rem;
}
.evangelism{
  margin-left: 16vh;
  margin-top: 60vh;
  font-size: 3.6rem;
}
.worship{
  margin-left: 140vh;
  margin-top: 60vh;
  font-size: 3.5rem;
}
</style>