<template>
  <div id="app">
    <nav id="nav">
      <router-link :to="`/`">Acceuil</router-link>
      <router-link :to="`/unity`">Unité</router-link>
      <router-link :to="`/jesus`">Pourquoi Jésus</router-link>
      <router-link :to="`/disciple`">Disciple</router-link>
      <router-link :to="`/evangelism`">Evangélisation</router-link>
      <router-link :to="`/worship`">Louanges</router-link>
      <router-link :to="`/partage`">Partage</router-link>
      <router-link :to="`/about`">A Propos</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style>
*{
  margin: 0;
  padding: 0;
}
nav{
  display: flex;
  flex-direction: row;
  padding: 5px;
  right: 20px;
  position: absolute;
  justify-content: flex-end;
  z-index: 1;
}
#nav a {
  font-weight: bold;
  color: #8b8e8f;
  margin-right: 2%;
}

#nav a.router-link-exact-active {
  color: #CF2418;
}
</style>
