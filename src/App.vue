<script setup lang="ts"></script>

<template>
  <v-app class="app">
    <v-app-bar app color="white" dark>
      <v-toolbar-title class="navbar-text text-h6">
        <v-icon size="50" color="#000000" icon="mdi-ufo-outline"></v-icon>
        Portal Co-op Team Summer 2025</v-toolbar-title
      >

      <v-spacer />

      <v-btn to="/" variant="elevated" class="nav-btn text-black ma-5" exact :ripple="false">
        Home
      </v-btn>
      <v-btn to="/isaac" variant="outlined" class="nav-btn text-black ma-5" exact :ripple="false">
        Isaac
      </v-btn>
      <v-btn to="/raj" variant="outlined" class="nav-btn text-black ma-5" exact :ripple="false">
        Raj
      </v-btn>
      <v-btn to="/rick" variant="outlined" class="nav-btn text-black ma-5" exact :ripple="false">
        Rick
      </v-btn>
    </v-app-bar>

    <v-main class="mainpage align-center justify-center">
      <RouterView />
    </v-main>
  </v-app>
</template>

<style scoped>
body {
  font-family: 'DM Sans', sans-serif;
}

.mainpage {
  font-family: 'DM Sans', sans-serif;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
}

header {
  font-family: 'DM Sans', sans-serif;
  line-height: 1.5;
  max-height: 100vh;
}

.navbar-text {
  font-family: 'DM Sans', sans-serif;
  font-weight: bold;
}

.nav-btn {
  font-family: 'DM Sans', sans-serif;
  font-weight: bold;
  color: #000;
  text-decoration: none;
}

.nav-btn:hover {
  color: #ffffff;
}
</style>
