<template>
  <div class="outer">
    <myheader />

    <div style="display: flex">
      <div style="width: 70%; display: inline-block">
        <nuxt />
      </div>

      <div style="width: 25%; display: inline-block">
        <li v-for="breed in $store.state.breedlist" :key="breed">
          <a
            :style="{ color: breed == $store.state.breed ? 'green' : 'black' }"
            href="#"
            @click="selectBreed(breed)"
          >
            {{ breed }}</a
          >
        </li>
      </div>
    </div>
  </div>
</template>

<script>
import myheader from "~/components/myheader.vue";

export default {
  data() {
    return {};
  },
  components: {
    myheader,
  },
  mounted() {
    console.info("default mounted");

    // always query movies at the start of the app, no matter what
    // page gets loaded first (actually we just need the count in
    // the header but for simplicity there is no separate API for
    // count only)
    this.$store.dispatch("fetch_movies");
    this.$store.dispatch("fetch_breeds");
  },
  methods: {
    selectBreed(breed) {
      this.$store.commit("set_breed", breed);
      this.$store.dispatch("fetch_movies");
    },
  },
  head: {
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
    link: [],
  },
};
</script>

<style lang="sass"></style>
