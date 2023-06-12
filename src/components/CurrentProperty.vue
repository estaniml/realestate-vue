<template>
  <section class="container">
    <div class="imageContainer">
      <img v-if="this.property" :src="this.property?.images[this.currentIndex]" :alt="this.property.title" >

      <span 
        class="prev"
        @click="prevImage"
        >▲</span>
      <span 
        class="next"
        @click="nextImage"
        >▲</span>
    </div>
    <div class="data">
      <div class="">
        <div class="title">
          <h1>{{ this.property?.title}}</h1>
          <p><font-awesome-icon class="icon" icon="fa-solid fa-house" />{{ this.property?.type}}</p>
        </div>
        <p>
          <font-awesome-icon class="icon" icon="fa-solid fa-location-dot" />
          {{ this.property?.location}}
        </p>


        <ul class="infoList">
          <li>{{ this.property?.people}} People</li>
          <li>{{ this.property?.rooms}} Rooms</li>
          <li>{{ this.property?.beds}} Beds</li>
          <li>{{ this.property?.bathrooms}} Bathrooms</li>
        </ul>

        <p>{{  this.property?.description }}</p>
      </div>

      <div class="payment">
        <h2>$100 a day</h2>
        <h3>$650 a week</h3>
        <button class="btn-secondary">Save</button>
        <button class="btn-primary">Contact</button>
      </div>
    </div>

    <properties-recommendation 
      :recommendation="this.recommendation"
    />
  </section>
</template>

<script>
import PropertiesRecommendation from './PropertiesRecommendation.vue'
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/main"

export default {
  components: { PropertiesRecommendation },
  props: ['prop'],
  data() {
    return {
      property: '',
      recommendation: [],
      currentIndex: 0,
      slug: ''
    }
  },
  mounted() {
    this.slug = this.$route.params.slug;
    this.getProperty();
  },
  beforeRouteUpdate(to, from, next) {
    this.slug = to.params.slug;
    this.getProperty();
    next();
  },
  methods: {
    async getProperty() {
      const docRef = doc(db, "properties", "list");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const list = await docSnap.data()?.properties

        const findProperty = await list.filter( p => p.slug == this.slug)
        this.property = findProperty[0]
        
        this.recommendation = await list.filter( p => p.location == this.property?.location)
    
      } else {
        console.log("No such document!");
      }
    },
    prevImage(){
      if (this.currentIndex > 0) {
        this.currentIndex--; 
      } else {
        this.currentIndex = this.property.images.length - 1
      }
    },
    nextImage(){
      if (this.currentIndex < this.property.images.length - 1) {
        this.currentIndex++; 
      } else {
        this.currentIndex = 0
      }
    }
  }

}
</script>

<style scoped lang="scss">
p, h3, h2{
  margin: 0;
}
.container {
  width: 70%;
  margin: 100px auto;
  min-height: 100vh;

  .title {
    display: flex;
    align-items: center;
    gap: 2rem;

    > p {
      color: #727272;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 14px;
      text-transform: uppercase;
    }
  }
}
.imageContainer {
  padding: 0;
  width: 100%;
  height: 500px;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 1px 1px 10px #ccc;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  span {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 50;
    background: white;
    color: #000;
    padding: 8px;
    border-radius: 100%;
    cursor: pointer;
    transition: all 0.3s ease;
  }
    .prev {
      left: 8px;
      transform: rotate(270deg);
      &:hover {
        transform: scale(1.2) rotate(270deg);
      }
    }

    .next { 
      right: 8px;
      transform: rotate(90deg);

      &:hover {
        transform: scale(1.2) rotate(90deg);
      }
    }
}
.data {
  display: flex;
  gap: 2rem;
  justify-content: space-between;
  margin: 20px 0px 40px 0;
}
.infoList {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 0;

  > li {
    border: 1px solid #727272;
    padding: 4px 8px;
    border-radius: 6px;
    color: #727272;
  }
}

.payment {
  margin: 20px 0px;
  padding: 20px 10px;
  box-shadow: 1px 1px 4px #ccc;
  border-radius: 10px;
  min-width: 200px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  >button {
    min-width: 200px;
    border: 1px solid #fff;
    padding: 10px 14px;
    border-radius: 10px;
    font-weight: bold;
    font-size: 18px;
    cursor: pointer;
    transition: all 0.2s ease-in;
    color: #fff;
  }

  .btn-primary {
    background: #03d372;

    &:hover {
      background: #01914e;
      color: #fff;
      border: 1px solid #01914e;
    }
  }

  .btn-secondary {
    background: #fff;
    border: 1px solid #03d372;
    color: #03d372;

    &:hover {
      background: #01914e;
      color: #fff;
      border: 1px solid #01914e;
    }
  }
}
</style>