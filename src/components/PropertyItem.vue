<template>
  <li class="propertyCard">
        <div class="imageContainer">
            <img :src="this.prop?.images[1]" :alt="this.prop?.title" >
        </div>
        <div>
            <h3>{{this.prop?.title}}</h3>
            <p>
                <font-awesome-icon class="icon" icon="fa-solid fa-location-dot" />
                {{  this.prop?.location }}
            </p>
            <div class="prices">
                <span>${{this.prop?.priceDay}} day</span>
                <small>${{this.prop?.priceWeek}} week</small>
            </div>
            <router-link 
                    :to="'/property/' + (this.prop && this.prop.slug)" 
                class="more"
            >
                See property
            </router-link>
        </div>
    </li>
</template>

<script>
export default {
    props: ['prop'],
    mounted() {
        console.log(this.prop);
    }
}
</script>

<style scoped lang="scss">
.propertyCard {
    width: 100%;
    box-shadow: 1px 1px 10px #ccc;
    border-radius: 8px;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        transform: translateY(-10px);
    }

    .imageContainer {
        padding: 0;
        width: 100%;
        height: 300px;
        position: relative;

        > img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    > div {
        padding: 10px;
        display: flex;
        flex-direction: column;
        gap: 8px;

        > h3 {
            margin: 0;
        }

        > p {
            margin: 0;
        }

        

        .more {
            background: #000;
            color: #fff;
            border: 1px solid #fff;
            padding: 6px 8px;
            border-radius: 8px;
            font-size: 14px;
            cursor: pointer;
            transition: all 0.2s ease-in;
            text-align: center;

            &:hover {
                background: #634bff;
                color: #fff;
                border: 1px solid #634bff;
            }
        }
    }
}

.prices {
    display: flex;
    align-items: center;
    gap: 1rem;

}


</style>