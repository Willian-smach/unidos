<template lang="">
    <div class="tag-estado">
        <div class="estado-sigla">RS</div>
        <div class="pedidos">2233</div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="css" scoped>
    .tag-estado {
        width: 125px;
        min-width: 125px;
        height: 50px;
        max-height: 50px;
        padding: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        background-color: blueviolet;
        color: #fefefe;
        font-weight: bold;
    }

    .tag-estado div {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    .tag-estado .estado-sigla {
        width: 40%;
        border-right: 1px solid #333;
    }

    .tag-estado .pedidos {
        width: 60%;
        height: 100%;
    }
</style>