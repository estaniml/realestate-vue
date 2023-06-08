<template>
  <nav class="navbar">
    <router-link to="/" class="logo"><font-awesome-icon icon="fa-solid fa-building" />Vue Estate</router-link>
    <div>
        <router-link to="/login" class="login-btn">Log in</router-link>
        <router-link to="/signin" class="signin-btn">Sign in</router-link>
    </div>
  </nav>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
.navbar{
    position: fixed;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60%;
    height: 20px;
    z-index: 10;
    background-color: rgba($color: #fff, $alpha: 0.2);
    border: 1px solid rgba($color: #fff, $alpha: 0.2);
    padding: 10px 40px;
    border-radius: 20px;
    backdrop-filter: blur(2px);
    box-shadow: 1px 2px 15px rgba($color: #585757, $alpha: 0.2);
    display: flex;
    justify-content: space-between;
    
    a {
        color: #000;
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

    .signin-btn {
        margin-left: 8px;
        font-size: 14px;
        background: transparent;
        padding: 4px 8px;
        border-radius: 16px;
        transition: all 0.2s ease-in;

    }
}
</style>