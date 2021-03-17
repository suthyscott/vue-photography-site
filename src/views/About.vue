<template>
  <div>
    <h1>This is an about page</h1>
    <button @click="add()">Aboutify</button>
    <p>{{ aboutness }}</p>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      aboutness: 1
    };
  },
  components: {},
  beforeCreate() {
    console.log("before create");
  },
  created() {
    console.log("created");
  },
  beforeMount() {
    console.log("beforeMount");
  },
  mounted() {
    console.log("mounted");
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  updated() {
    console.log("updated");
  },
  beforeDestroy() {
    console.log("beforeDestroy");
  },
  destroyed() {
    console.log("destroyed");
  },
  methods: {
    add() {
      console.log("hitttttt");
      this.aboutness = this.aboutness + 1;
    }
  }
};
</script>
