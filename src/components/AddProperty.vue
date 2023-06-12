<template>
  <main class="container">
    <h1>Add a property</h1>

    <form 
        enctype="multipart/form-data" 
        class="input-control " 
        @submit.prevent="uploadImage"
    >
        <label for="image">Images</label>
        
        <div class="flex-container">
            <input 
                class="img"
                type="file"
                accept="image/*"
                id="image"
                @change="handleImage"
                :disabled="this.loading"
            />

            <button class="addImage">
                <div class="spinner" v-if="this.loading"></div>
                <span v-else>+</span>
            </button>
        </div>

        <div class="images" v-if="images.length > 0">
            <img v-for="img in images" :src="img" :alt="img" :key="img" />
        </div>
    </form>

    <form @submit.prevent="publish">
        <div class="input-control">
            <label for="title">Title</label>
            <input 
                type="text"
                id="title"
                v-model="title"
                placeholder="Write the title here.."
            />
        </div>
        <div class="flex-container">

            <div class="input-control">
                <label for="type">Property Type</label>
                <select 
                    id="type"
                    v-model="type"
                    value=""
                >
                    <option value="house">House</option>    
                    <option value="apartment">Apartment</option>
                    <option value="beach">Beach House</option>
                    <option value="cottage">Cottage</option>
                </select>
            </div>
            <div class="input-control">
                <label for="location">Location</label>
                <input 
                    type="text"
                    id="location"
                    v-model="location"
                    placeholder="Write the location here.."
                />
            </div>
        </div>


        <div class="flex-container">
            <div class="input-control">
                <label for="people">People</label>
                <input 
                    type="number"
                    id="people"
                    v-model="people"
                    placeholder="0"
                />
            </div>
            <div class="input-control">
                <label for="rooms">Rooms</label>
                <input 
                    type="number"
                    id="rooms"
                    v-model="rooms"
                    placeholder="0"
                />
            </div>
            <div class="input-control">
                <label for="beds">Beds</label>
                <input 
                    type="number"
                    id="beds"
                    v-model="beds"
                    placeholder="0"
                />
            </div>
            <div class="input-control">
                <label for="bathrooms">Bathrooms</label>
                <input 
                    type="number"
                    id="bathrooms"
                    v-model="bathrooms"
                    placeholder="0"
                />
            </div>
        </div>

        <div class="input-control">
            <label for="description">Description</label>
            <textarea 
                name="description" 
                id="description"
                v-model="description"
            ></textarea>
        </div>
        
        <div class="flex-container">
            <div class="input-control">
                <label for="priceDay">Price per day</label>
                <input type="number"
                    v-model="priceDay"
                    id="priceDay"
                />
            </div>
            <div class="input-control">
                <label for="priceWeek">Price per week</label>
                <input 
                    type="number"
                    v-model="priceWeek"
                    id="priceWeek"
                />
            </div>
        </div>

        
        
        <button
        type="submit"
        class="publishBtn"
        >Publish property</button>
    </form>

   
</main>
</template>

<script>
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { arrayUnion, doc, updateDoc } from "firebase/firestore"; 
import { db } from "@/main"
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
const storage = getStorage();

export default {
    data() {
        return {
            user: '',
            title: '',
            type: '',
            location: '',
            people: '',
            beds: '',
            rooms: '',
            bathrooms: '',
            description: '',
            priceDay: '',
            priceWeek: '',
            img: '',
            images: [],
            error: null,
            loading: false
        }
    },
    methods: {
        handleImage(e) {
            this.img = e.target.files[0]
        },
        async uploadImage(e) {
            const id = Date.now()
            const storageRef = ref(storage, JSON.stringify(id));

            this.loading = true;
            try {
                await uploadBytes(storageRef, this.img);
                const downloadURL = await getDownloadURL(storageRef);
                this.images.push(downloadURL);
                
            } catch (error) {
                console.log(error);
            } finally {
                this.loading = false;
                e.target.files = ''
                this.img = ''
            }
        },
        async publish() {
            const id = Date.now()
            const slug = this.title.split(' ').join('-').toLowerCase()
            
            await updateDoc(doc(db, "properties", "list"), {
                properties:  arrayUnion({
                    id: JSON.stringify(id),
                    title: this.title,
                    type: this.type,
                    location: this.location,
                    people: this.people,
                    beds: this.beds,
                    rooms: this.rooms,
                    bathrooms: this.bathrooms,
                    description: this.description,
                    user: this.user,
                    priceWeek: this.priceWeek,
                    priceDay: this.priceDay,
                    slug,
                    images: this.images
                })
            })

            this.user = ''
            this.title = ''
            this.type = ''
            this.location = ''
            this.people = ''
            this.beds = ''
            this.rooms = ''
            this.bathrooms = ''
            this.description = ''
            this.priceDay = ''
            this.priceWeek = ''
            this.img = ''
            this.images = []
        }
    },
    mounted() {
        
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (!user) {
                this.$router.push('/login')
            } else {
                this.user = user.email
            }
        });
    }
}
</script>

<style scoped lang="scss">
.container {
    width: 60%;
    margin: 100px auto;
}
.flex-container {
    display: flex;
    gap: 2rem;
    align-items: center;
    width: 100%;

    > div {
        width:50%;
    }
}

.input-control{
    display: flex;
    flex-direction: column;
    gap: 4px;
    margin-bottom: 16px;

    > input, textarea, select, .img {
        border-radius: 8px;
        border: 1px solid black;
        outline: none;
        padding: 8px;
        width: 100%;

        &:focus {
            border: 2px solid #634bff;
        }
    }
}

.addImage {
    display: block;
    background: linear-gradient(45deg, #000000, #000000, #075207);
    color: white;
    outline: none;
    border: none;
    font-size: 14px;
    font-weight: 600;
    padding: 8px 16px;
    box-shadow: 2px 2px 10px #ccc;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    border-radius: 8px;

    &:hover {
      opacity: 0.8;
    }
}
.publishBtn{
    display: block;
    background: linear-gradient(45deg, #11e22d, #0fc227, #07ce07);
    color: white;
    outline: none;
    border: none;
    font-size: 16px;
    font-weight: 600;
    padding: 12px 28px;
    box-shadow: 2px 2px 10px #ccc;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    border-radius: 8px;

    &:hover {
      transform: scale(1.1);
    }
}

.images {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;

    > img {
        height: 50px;
        width: fit-content;
        border-radius: 8px;
        box-shadow: 1px 1px 4px #ccc;
    }
}

.spinner {
  position: relative;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  animation: spin .7s infinite linear;
  background: transparent;
  border-top: 1px solid white;
}



@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>