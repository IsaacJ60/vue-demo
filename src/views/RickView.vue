<template>
  <div class="about">
    <section class="intro">
      <h1>
        Hi, I'm Rick <span class="wave">👋</span>
      </h1>
      <p>
        I'm a second year Computational Mathematics student at the University of Waterloo.
        Growing up, I was always fascinated by problem-solving.
        That passion gradually led me to the world of programming.
        I've committed to learning deeply, working hard, and
        building cool projects.
      </p>
      <p>
        With curiosity and determination, I believe we can build solutions that make
        a real impact. I'm especially grateful for the chance to pursue an AI developer role, and I’m
        ready to give my full effort to be part of that journey!🌈
      </p>

      <!-- Vuetify Button -->
      <v-btn
        color="primary"
        variant="outlined"
        href="https://rick-mingyu-liu.github.io/personal-web/"
        target="_blank"
        class="mt-4"
      >
        Personal Website
      </v-btn>
    </section>
  </div>
</template>
<style scoped>
.about {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #333333;
}

.intro {
  background-color: white;
  padding: 2rem 3rem;
  border-radius: 20px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  max-width: 700px;
  text-align: center;
  transition: box-shadow 0.3s ease;
}

.intro:hover {
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.25);
}

@keyframes wave-animation {
  0% { transform: rotate(0deg); }
  15% { transform: rotate(14deg); }
  30% { transform: rotate(-8deg); }
  45% { transform: rotate(14deg); }
  60% { transform: rotate(-4deg); }
  75% { transform: rotate(10deg); }
  100% { transform: rotate(0deg); }
}

.wave {
  display: inline-block;
  transform-origin: 70% 70%;
  animation: wave-animation 1.5s ease-in-out 1;
}

h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  color: rgb(27, 252, 91);
}

p {
  font-size: 1.2rem;
  line-height: 1.6;
}
</style>
