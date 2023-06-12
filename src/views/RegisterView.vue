<template>
  <main class="container">
    <form @submit.prevent="register">
      <h1>Register to continue</h1>
      <div v-if="error" class="alert alert-danger">{{error}}</div>
      <div class="inputControl">
        <label for="username">Your username</label>
        <input 
          placeholder="Username.."
          type="name"
          id="username"
          name="name"
          required
          v-model="name"
        />
      </div>

      <div class="inputControl">
        <label for="email">Your email</label>
        <input 
          placeholder="Email.."
          type="email"
          id="email"
          name="email"
          required
          v-model="email"
        />
      </div>

      <div class="inputControl">
        <label for="password">Your password</label>
        <input 
          placeholder="Password.."
          type="password"
          id="password"
          name="password"
          required
          v-model="password"
        />
      </div>

      <button type="submit">
        <span class="text">Sign in</span>
      </button>
      <span>Or sign in with</span>
      <div class="brands">
        <div>
          <font-awesome-icon icon="fa-brands fa-google" />
          <p>Google</p>
        </div>
        <!-- <div>
          <font-awesome-icon icon="fa-brands fa-github" />
          <p>Github</p>
        </div> -->
      </div>
    </form>
  </main>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register() {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, this.email, this.password)
      .then((userCredential) => {
        
        const user = userCredential.user;
        console.log(user);

        this.$router.push('/')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
    }
  },
}

</script>

<style lang="scss" scoped>
.container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(60deg, #fff1f2, #eff6ff, #fff, #fff, #fff, #eff6ff, #fff1f2, #fff, #fff,#fefce8 );
}

form {
  box-shadow: 1px 1px 1px #ccc;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 40px;
  min-width: 400px;

  > h1 {
    text-align: center;
    margin-bottom: 40px;
  }

  .inputControl {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 16px;

    > input {
      border: 2px solid #634bff;
      border-radius: 6px;
      padding: 6px;
      outline: none;
      transition: all 0.3s ease;

      &:focus { 
        border-left: 8px solid #634bff;
      }
    }
  }

  > button {
    display: block;
    margin: 0 auto;
    background: linear-gradient(45deg, #634bff, #634bff, #2207ce);
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
      opacity: 0.8;
    }
  }

  > span {
    display: block;
    margin-top: 20px;
    text-align: center;
  }
}

.brands {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  color: #706e6e;

  > div {
    margin-top: 10px;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    border: 1px solid #ccc;
    padding: 4px 8px;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
      color: #2207ce;
      border: 1px solid #2207ce;
    }

    > p {
      margin: 0;
    }
  }
}
</style>