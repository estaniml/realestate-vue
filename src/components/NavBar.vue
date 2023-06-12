<template>
  <nav class="navbar">
    <router-link to="/" class="logo"><font-awesome-icon icon="fa-solid fa-building" />Vue Estate</router-link>
    <div v-if="!this.email">
        <router-link to="/login" class="login-btn">Log in</router-link>
        <router-link to="/register" class="register-btn">Sign in</router-link>
    </div>

    <div class="user" v-else>
        <router-link to="/add-property" class="login-btn">+ Add property</router-link>
        <p>Hola, {{ email }}</p>
        <button @click="logout">
            <font-awesome-icon class="icon" icon="fa-solid fa-sign-out" />
            Log out
        </button>
    </div>
  </nav>
</template>

<script>
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";


export default {
    data() {
        return {
            email: null
        }
    },
    mounted() {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
        if (user) {
            
           this.email = user?.email
           
        } else {
            this.email = null
        }
        });
    },
    methods: {
        logout() {
            const auth = getAuth();
            signOut(auth).then(() => {
                console.log('success');
            }).catch((error) => {
                console.log(error);
            });
        }
    }
}
</script>

<style scoped lang="scss">
.navbar{
    position: fixed;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    width: 70%;
    height: 20px;
    z-index: 40;
    background-color: rgba($color: #fff, $alpha: 0.2);
    border: 1px solid rgba($color: #fff, $alpha: 0.2);
    padding: 10px 40px;
    border-radius: 20px;
    backdrop-filter: blur(2px);
    box-shadow: 1px 2px 15px rgba($color: #585757, $alpha: 0.2);
    display: flex;
    justify-content: space-between;
    
    a {
        color: #362de7;
        font-weight: 600;
    }

    .logo {
        display: flex;
        gap: 8px;
        align-items: center;
        font-size: 18px;
        font-weight: 800;
        text-transform: uppercase;
    }

    .login-btn {
        background: white;
        color: #000;
        border: 1px solid #fff;
        padding: 4px 8px;
        border-radius: 8px;
        font-size: 14px;
        transition: all 0.2s ease-in;

        &:hover {
            background: #634bff;
            color: #fff;
            border: 1px solid #634bff;
        }
    }

    .register-btn {
        margin-left: 8px;
        font-size: 14px;
        background: transparent;
        padding: 4px 8px;
        border-radius: 16px;
        transition: all 0.2s ease-in;

    }
}

.user {
    display: flex;
    align-items: center;
    gap: 1rem;

    > p {
        font-size: 14px;
        color: #4e34f7;
        font-weight: 600;
    }

    > button {
        color: rgb(194, 12, 12);
        background: none;
        border: none;
        display: flex;
        align-items: center;
        gap: 4px;
        cursor: pointer;
    }
}
</style>