<template>
  <div>{{ info.name }}</div>
</template>

<script>
export default {
  name: "HomeSnippet",
  props: ["info"],
  data: {
    info: {
      name: "",
    },
  },
};
</script>

<script>
export default {};
</script>
