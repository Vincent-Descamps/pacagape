<template>
  <div class="app">
    <header class="jesus">
      <h1>Jésus</h1>
      <p>
        <cite>
          «C’est moi qui suis le chemin, la vérité et la vie. On ne vient au
          Père qu’en passant par moi.»
        </cite>
        Jean 14:6
      </p>
    </header>
    <main>
      <h1>Pourquoi Jésus ?</h1>
      <div class="container">
        <div class="flip-card">
          <div class="card">
            <div class="card-front">
              <h2>Dieu existe.</h2>
              <img
                src="@/assets/hands.jpg"
                alt="photo of hands reaching for each other"
              />
            </div>
            <div class="card-back">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Explicabo, dolores provident labore molestiae ex perspiciatis
                porro quam, illo ab in quas neque magnam maiores! Magni recusandae
                quod dolore temporibus optio!
              </p>
            </div>
          </div>
        </div>
        <div class="flip-card">
          <div class="card">
            <div class="card-front">
              <h2>Dieu existe.</h2>
              <img
                src="@/assets/hands.jpg"
                alt="photo of hands reaching for each other"
              />
            </div>
            <div class="card-back">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Explicabo, dolores provident labore molestiae ex perspiciatis
                porro quam, illo ab in quas neque magnam maiores! Magni recusandae
                quod dolore temporibus optio!
              </p>
            </div>
          </div>
        </div>
        <div class="flip-card">
          <div class="card">
            <div class="card-front">
              <h2>Dieu existe.</h2>
              <img
                src="@/assets/hands.jpg"
                alt="photo of hands reaching for each other"
              />
            </div>
            <div class="card-back">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Explicabo, dolores provident labore molestiae ex perspiciatis
                porro quam, illo ab in quas neque magnam maiores! Magni recusandae
                quod dolore temporibus optio!
              </p>
            </div>
          </div>
        </div>
        <div class="flip-card">
          <div class="card">
            <div class="card-front">
              <h2>Dieu existe.</h2>
              <img
                src="@/assets/hands.jpg"
                alt="photo of hands reaching for each other"
              />
            </div>
            <div class="card-back">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Explicabo, dolores provident labore molestiae ex perspiciatis
                porro quam, illo ab in quas neque magnam maiores! Magni recusandae
                quod dolore temporibus optio!
              </p>
            </div>
          </div>
        </div>
        <div class="flip-card">
          <div class="card">
            <div class="card-front">
              <h2>Dieu existe.</h2>
              <img
                src="@/assets/hands.jpg"
                alt="photo of hands reaching for each other"
              />
            </div>
            <div class="card-back">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Explicabo, dolores provident labore molestiae ex perspiciatis
                porro quam, illo ab in quas neque magnam maiores! Magni recusandae
                quod dolore temporibus optio!
              </p>
            </div>
          </div>
        </div>
        <div class="flip-card">
          <div class="card">
            <div class="card-front">
              <h2>Dieu existe.</h2>
              <img
                src="@/assets/hands.jpg"
                alt="photo of hands reaching for each other"
              />
            </div>
            <div class="card-back">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Explicabo, dolores provident labore molestiae ex perspiciatis
                porro quam, illo ab in quas neque magnam maiores! Magni recusandae
                quod dolore temporibus optio!
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
main h1 {
  text-align: center;
  padding: 80px;
}
.container{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.flip-card {
  margin: 50px;
  background-color: transparent;
  width: 400px;
  height: 300px;
  perspective: 1000px; /* Remove this if you don't want the 3D effect */
}

/* This container is needed to position the front and back side */
.card {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.9s;
  transform-style: preserve-3d;
}

/* Do an horizontal flip when you move the mouse over the flip box container */
.flip-card:hover .card {
  transform: rotateY(180deg);
}

/* Position the front and back side */
.card-front,
.card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
}

/* Style the front side (fallback if image is missing) */
.card-front {
  /* background-color: #bbb; */
  color: #2F819C;
}

/* Style the back side */
.card-back {
  background-color: dodgerblue;
  color: white;
  transform: rotateY(180deg);
}
img{
  max-width: 400px;
}
</style>
