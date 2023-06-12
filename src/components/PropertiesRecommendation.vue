<template>
  <h2>Other options in the location</h2>

  <ul class="list">
    <property-item 
      v-for="prop in this.recommendation.slice(0,3)"
      :key="prop.id"
      :prop="prop"
    />
  </ul>
</template>

<script>
import PropertyItem from './PropertyItem.vue';
export default {
  components: { PropertyItem },
  props: ['recommendation'],
}
</script>

<style scoped lang="scss">
h2 {
  margin-top: 100px;
}

.list {
  padding: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}
</style>