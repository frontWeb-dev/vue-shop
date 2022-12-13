<template>
  <div id="app">
    <Header />
    <MainPage />
  </div>
</template>
<script lang="ts">
import MainPage from './pages/MainPage.vue';
import Header from './components/Header.vue';
export default {
  name: 'app',
  components: { MainPage, Header },
};
</script>
<style></style>
