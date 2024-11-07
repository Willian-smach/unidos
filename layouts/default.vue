<template lang="">
    <div class="page-container">
        <div class="navbar-container">
            <Navbar/>
        </div>
        <div class="content-container">
            <slot/>
        </div>
    </div>
</template>

<script>
</script>

<style lang="css" scoped>
.navbar-container {
    position: fixed;
    width: 100%;
    height: 80px;
    max-height: 80px;
    top: 0; /* Posicionar no topo */
  left: 0; /* Posicionar à esquerda */
  right: 0; /* Estender até a direita */
  z-index: 1000;
}
</style>