<script setup lang="ts">
import avatar from '../assets/isaac.jpg'
</script>

<template>
  <v-card title="About Isaac" class="about-hero text-white text-center">
    <v-avatar
      class="mx-auto mt-3"
      size="100"
      color="grey darken-3"
      :image="avatar"
      alt="Isaac's profile picture"
    ></v-avatar>
    <v-card-text class="text-white">
      <h1>Hi, I'm Isaac!</h1>
      <p>
        I'm a co-op student at the University of Waterloo, currently working with Vue and
        TypeScript.
      </p>
    </v-card-text>
    <v-card-actions class="justify-center">
      <v-btn
        class="ma-2"
        prepend-icon="mdi-web"
        variant="elevated"
        href="https://isaacjiang.ca"
        target="_blank"
        color="grey-darken-3"
      >
        Website</v-btn
      >
    </v-card-actions>

    <v-card-text class="text-white">
      <h2>Projects</h2>
      <v-card class="my-5" max-width="400">
        <v-card-title>Project 1</v-card-title>
        <v-card-text>
          <p>Details about project 1.</p>
        </v-card-text>
      </v-card>
      <v-card class="my-5" max-width="400">
        <v-card-title>Project 2</v-card-title>
        <v-card-text>
          <p>Details about project 2.</p>
        </v-card-text>
      </v-card>
    </v-card-text>
  </v-card>

  <div class="speed-dial-wrapper">
    <v-speed-dial location="top center" transition="fade-transition">
      <template v-slot:activator="{ props: activatorProps }">
        <v-fab v-bind="activatorProps" size="large" icon="$vuetify"></v-fab>
      </template>

      <v-btn key="1" icon="$success"></v-btn>
      <v-btn key="2" icon="$info"></v-btn>
      <v-btn key="3" icon="$warning"></v-btn>
      <v-btn key="4" icon="$error"></v-btn>
    </v-speed-dial>
  </div>
</template>

<style scoped>
.speed-dial-wrapper {
  position: fixed;
  bottom: 20px;
  right: 20px;
}

.about-hero {
  background: #272727;
  border-radius: 20px;
  max-width: 400px;
}
</style>
