<template>
  <footer class="container">
    <div>
        <a href="https://www.linkedin.com/in/emartinezlacabe/" target="_blank" rel="noreferrer">
            <font-awesome-icon icon="fa-brands fa-linkedin" />
        </a>
        <a href="https://github.com/estaniml" target="_blank" rel="noreferrer">
            <font-awesome-icon icon="fa-brands fa-github" />
        </a>
        <h4>Estanislao Martinez Lacabe</h4>
        <p>Frontend Developer</p>
    </div>

    <ul>
        <p>Created with</p>
        <li>Javascript</li>
        <li>Vue JS</li>
        <li>SASS</li>
        <li>Firebase</li>
    </ul>
  </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
p, h1, h4, span, li, ul {
    margin: 0;
}
a{
    color: #fff;
}
.container {
    width: 70%;
    margin: 20px auto;
    background: linear-gradient(45deg , #4f46e5 , #3f36e5, #3f36e5);
    color: #fff;
    padding:20px;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;

    >div {
        display: flex;
        align-items: center;
        gap: 8px;

    }

    >ul {
        display: flex;
        align-items: center;
        gap: 6px;

        > li {
            border: 1px solid #ccc;
            color: #ccc;
            border-radius: 8px;
            font-size: 14px;
            padding: 4px 8px;
        }
    }
}
</style>