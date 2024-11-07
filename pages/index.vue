<template lang="">
<section id="request">
    <div class="home-description">
        <h1>Um Pedido Pode Mudar Tudo!</h1>
        <h2>Conectando Pessoas pela Força da Oração</h2>
    </div>
    <FormsPedidosForm />
</section>
<section id="requested">
    <div class="content-section">
        <DadosTagEstados/>
    </div>
</section>
<section id="join">
    <h2>Formulário para cadastro</h2>
    <UteisEmConstrucao/>
</section>
<section id="about">
    <div class="content-section">
        <h1>Sobre Nós</h1>
        <p>
            Bem-vindo ao nosso site de pedidos de oração!
        </p>
        <p>
            Criamos este espaço com o propósito de conectar 
            pessoas que precisam de um apoio em oração e aqueles dispostos a interceder. 
            Funcionando como uma urna digital, nosso site permite que você compartilhe seus pedidos 
            de oração de forma segura e anônima, caso assim desejar.
        </p>
        <p>
            Você também pode se cadastrar como um "intercessor", comprometendo-se a orar pelos pedidos 
            feitos por outros membros da comunidade. Juntos, buscamos cultivar um ambiente de amor, 
            solidariedade e fé, onde cada oração é um passo a mais rumo à esperança e à transformação. 
            Junte-se a nós e faça parte dessa missão sem fins lucrativos, onde cada clamor certamente
            será ouvido por Deus.
        </p>
    </div>
</section>
</template>

<script setup>
</script>

<style lang="css" scoped>
.home-description {
    width: 50%;
    min-height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
}

.content-section {
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 15px;
}

p {
    font-size: 22px;
}

h1 {
    margin-bottom: 10px;
    font-size: 50px;
    text-align: center;
}

h2 {
    font-size: 22px;
    color: #333;
    text-align: center;
}

#requested, #join {
flex-direction: column;
gap: 15px;
}
</style>
