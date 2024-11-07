<template lang="html">
    <nav>
        <div class="logo">
            <img src="~/assets/img/icons/pena-verde.png" alt="">
        </div>
        <ul class="list-links">
            <li>
                <nuxt-link to="#requested">Pedidos</nuxt-link>
            </li>
            <li>
                <nuxt-link to="#request">Solicitar</nuxt-link>
            </li>
            <li>
                <nuxt-link to="#join">Junte-se</nuxt-link>
            </li>
            <li>
                <nuxt-link to="#about">Sobre</nuxt-link>
            </li>
        </ul>
    </nav>
</template>

<script lang="ts" setup>

</script>

<style lang="css" scoped>
nav {
    height: 100%;
    padding: 0px 15px;
    top: 0; /* Posicionar no topo */
    left: 0; /* Posicionar à esquerda */
    right: 0; /* Estender até a direita */
    display: flex;
    gap: 25px;
    align-items: center;
    box-shadow: 0px 1px 5px 2px rgba(0,0,0,0.1);
    background-color: #fff;
    z-index: 1000;
}

.logo {
    width: 100px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.logo img {
    width: 60%;
}

nav ul {
    display: flex;
    gap: 15px;
    list-style: none;
}

nav ul li {
    font-size: 18px;
    font-weight: bold;
    color: #222;
}

a {
    text-decoration: none;
    color: #222
}

a:hover {
    color: #555;
}
</style>