<template>
  <div class="flex h-screen ">
    <SideBar class="py-16"/>

    <div class="flex flex-col flex-1">
      <Header />
      <main class="flex-1 p-4 overflow-y-auto">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup>
import SideBar from './components/SideBar.vue'
import Header from './components/Header.vue'
</script>
