<template>
    <section class="container">
      <div class="tab">
        <h1>All results</h1>

        <ul class="typeFilter">
            <li @click="filterList('house')">
                <font-awesome-icon class="icon" icon="fa-solid fa-house" />
                <span>House</span>
            </li>
            <li @click="filterList('apartment')">
                <font-awesome-icon class="icon" icon="fa-solid fa-building" />
                <span>Apartment</span>
            </li>
            <li @click="filterList('cottage')">
                <font-awesome-icon class="icon" icon="fa-solid fa-tree" />
                <span>Cottage</span>
            </li>
            <li @click="filterList('beach')">
                <font-awesome-icon class="icon" icon="fa-solid fa-umbrella-beach" />
                <span>Beach House</span>
            </li>
        </ul>
      </div>

      <ul v-if="this.filterProps.length > 0" class="list">
        <property-item 
            v-for="prop in this.filterProps"
            :key="prop.id"
            :prop="prop"
        />
      </ul>

      <div v-else>
        <p>There are no options available</p>
        <h4>Add a property!</h4>
      </div>
    </section>
</template>

<script>
import PropertyItem from './PropertyItem.vue'
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/main"

export default {
  components: { PropertyItem },
  data() {
    return {
      properties: '',
      filterProps: ''
    }
  },
  mounted() {
    this.getProperties();
  },
  methods: {
    async getProperties() {
      const docRef = doc(db, "properties", "list");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        this.properties = docSnap.data().properties
        this.filterProps = docSnap.data().properties
      } else {
        console.log("No such document!");
      }
    },
  },
};
</script>

<style scoped lang="scss">
.container {
  width: 80%;
  margin: 0 auto;
  margin-bottom: 50px;

    .tab {    
        display: flex;
        align-items: center;
        gap: 2rem;
        .filter {
            display: flex;
            align-items: center;
            gap: 1rem;
            border: 1px solid black;
            padding: 10px 20px;
            border-radius: 8px;
            cursor: pointer;

            p { margin: 0;}
            }
    }
    .list {
        padding: 0;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1rem;
    }
}

.typeFilter {
    display: flex;
    align-items: center;
    gap: 1rem;

    > li {
        display: flex;
        flex-direction: column;
        gap: 4px;
        cursor: pointer;
        text-align: center;
        padding: 8px;
        border-radius: 8px;
        border: 1px solid white;

        &:hover {
            border: 1px solid black;
        }
    }
}
</style>