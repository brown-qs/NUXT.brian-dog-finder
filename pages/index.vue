<template>
  <div>
    <h2 style="text-align: center;">{{$store.state.movielist.length}} {{$store.state.breed}} dogs</h2>
    <div class="grid-container">
      <div v-for="movie in $store.state.movielist" :key="movie">
        <img
          class="grid-item grid-item-10"
          :src="movie"
          alt=""
        />
        <p>{{movie.slice(30)}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  mounted() {
    console.info("index mounted");

    // query movies and put into store, whenever this page gets activated
    this.$store.dispatch("fetch_movies");
  },
  data() {
    return {};
  },
  head: {
    title: "Dog Search",
  },
  methods: {
    detailslink(movie) {
      return "/moviedetails?id=" + movie.id;
    },
  },
};
</script>
