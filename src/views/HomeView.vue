<script setup lang="ts">
import isaac from '../assets/isaac.jpg'
import raj from '../assets/raj.jpg'
import rick from '../assets/rick.jpg'
import { RouterLink } from 'vue-router'
</script>

<template>
  <main class="mainpage">
    <v-container class="app">
      <v-container class="home flex flex-row align-center justify-center text-center">
        <v-text class="title text-h3 font-weight-bold text-center"> Meet the Interns! </v-text>
        <v-row class="flex flex-row align-center justify-center space-evenly ma-10">
          <div class="container-avatar mx-auto mt-3">
            <div class="mx-auto mt-3">
              <RouterLink to="/isaac">
                <v-avatar
                  class="outlined-avatar mx-auto mt-3"
                  size="250"
                  :image="isaac"
                  alt="Isaac's profile picture"
                />
              </RouterLink>
              <v-text class="names"> Isaac Jiang </v-text>
            </div>
          </div>
          <div class="container-avatar mx-auto mt-3">
            <div class="mx-auto mt-3">
              <RouterLink to="/raj">
                <v-avatar
                  class="outlined-avatar mx-auto mt-3"
                  size="250"
                  :image="raj"
                  alt="Raj's profile picture"
                ></v-avatar>
              </RouterLink>
              <v-text class="names"> Raj Shah </v-text>
            </div>
          </div>
          <div class="container-avatar mx-auto mt-3">
            <div class="mx-auto mt-3">
              <RouterLink to="/rick">
                <v-avatar
                  class="outlined-avatar mx-auto mt-3"
                  size="250"
                  :image="rick"
                  alt="Rick's profile picture"
                ></v-avatar>
              </RouterLink>
              <v-text class="names"> Rick Liu </v-text>
            </div>
          </div>
        </v-row>
        <br />
        <br />
        <v-text class="title text-h3 font-weight-bold text-center"> Reach out to us! </v-text>
      </v-container>
    </v-container>
  </main>
</template>

<style scoped>
.container-avatar {
  padding-top: 1rem;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-bottom: 3rem;
  background-color: #ffffff;
  border-radius: 30px;
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
}

.container-avatar:hover {
  scale: 1.03;
  transition: all 0.3s ease;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
}

.names {
  font-family: 'DM Sans', sans-serif;
  font-size: large;
  color: #000000;
}

.mainpage {
  font-family: 'DM Sans', sans-serif;
  width: 100vw;
  height: 100vh;
  background: #f5f7fa;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
}

.title {
  font-family: 'DM Sans', sans-serif;
  margin-bottom: 2rem;
}

.outlined-avatar {
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  margin-bottom: 2rem;
}

.outlined-avatar.thick {
  border-width: 10px;
}

.outlined-avatar.round {
  border-radius: 50%;
}
</style>
