<template>
  <div class="heroContainer">
    <img src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1296&q=80" alt="real estate vue" class="homeBG" />
    <h1>Encuentra la propiedad que estas buscando en neustras opciones </h1>
    <div>
        <input 
            placeholder="Busca propiedad por tipo o lugar!"
            type="text"
        />
        <font-awesome-icon class="searchIcon" icon="fa-solid fa-magnifying-glass" />
    </div>
  </div>

  <OurRecommendations />
</template>

<script>
import OurRecommendations from '@/components/OurRecommendations.vue';

export default {
    components: { OurRecommendations }
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

    > div {
        z-index: 10;
        margin-top: 20px;
        display: flex;
        align-items: center;
        gap: 1rem;

        > input {
            min-width: 400px;
            border-radius: 12px;
            font-size: 16px;
            border: 2px solid #634bff;
            outline: none;
            padding: 10px;
            background: #ffffffc4;
            backdrop-filter: blur(20px);
            color: #000;
        }

        .searchIcon {
            background: #634bff;
            height: 16px;
            font-size: 16px;
            color: #fff;
            border-radius: 8px;
            padding: 10px;
            cursor: pointer;
            transition: all 0.2s ease-in-out;

            &:hover{
                transform: scale(110%);
                opacity: 0.8;
            }
        }
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