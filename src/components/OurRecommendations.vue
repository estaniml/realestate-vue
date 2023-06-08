<template>
  <main class="container">
    <ul>
        <li>
            <font-awesome-icon class="icon" icon="fa-solid fa-house" />
            <h2>Houses for sell / rent</h2>
        </li>
        <li>
            <font-awesome-icon class="icon" icon="fa-solid fa-building" />
            <h2>Apartments for sell / rent</h2>
        </li>
        <li>
            <font-awesome-icon class="icon" icon="fa-solid fa-location" />
            <h2>Houses in New York</h2>
        </li>
        <li>
            <font-awesome-icon class="icon" icon="fa-solid fa-umbrella-beach" />
            <h2>Houses near the beach</h2>
        </li>
    </ul>
  </main>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.container {
    top: -60px;
    position: relative;
    padding: 0px 10%;
    margin: 0 auto;

    > ul {
        display: flex;
        justify-content: space-between;
        gap: 1rem;

        > li {
            height: 60px;
            background: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 1px 1px 4px #575757ab;
            font-size: 14px;
            border: 1px solid #634bff;
            cursor: pointer;
            transition: all 0.3s ease;

            &:hover {
                transform: translateY(-10px);
                box-shadow: 1px 1px 10px #575757ab;
            }

            .icon {
                font-size: 24px;
                color: #634bff;
            }
        }
    }
}
</style>