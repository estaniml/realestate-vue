<template>
  <div class="heroContainer">
    <img src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1296&q=80" alt="real estate vue" class="homeBG" />
    <h1> Find the property you're looking for among our options. </h1>
    <p>"Discover a wide range of properties that cater to your specific needs and preferences. Whether you're seeking a cozy apartment, a spacious house, or a luxurious villa, we have an array of options to choose from. Explore our listings and let us guide you towards finding the perfect property that suits your lifestyle and aspirations." <strong>Sir Chad G. Pety</strong></p>
  </div>

  <OurRecommendations />

  <PropertiesList />
</template>

<script>
import OurRecommendations from '@/components/OurRecommendations.vue';
import PropertiesList from '@/components/PropertiesList.vue';

export default {
    components: { OurRecommendations, PropertiesList }
}
</script>

<style lang="scss" scoped>
.heroContainer {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    overflow: hidden;
    
    > h1 {
        color: #fff;
        z-index: 10;
        text-shadow: 1px 1px 4px grey;
    }

    > p {
        width: 70%;
        text-align: center;
        line-height: 1.7;
        color: #fff;
        z-index: 10;
        text-shadow: 1px 1px 4px rgb(0, 0, 0);
    }

    &:after {
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(0deg, #000000a1,#0000006b,transparent ) ;
        border-radius: 0 0 50px 50px;
    }


    
}

.homeBG {
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 0 0 50px 50px;
}
</style>