<template lang="">
    <form action="">
        <div class="logo">
            <img src="~/assets/img/icons/pena-verde.png" alt="">
            <h2>Pedido</h2>
        </div>
        <div class="form-control">
            <div class="input-control">
                <label for="">E-mail</label>
                <input type="email">
            </div>
        </div>
        <div class="form-control">
            <div class="input-control">
                <label for="">Nome</label>
                <span>Este campo é opicional. Caso não preenchido, será exibido como Anônimo.</span>
                <input type="text" placeholder="">
            </div>
        </div>
        <div class="form-control">
            <div class="input-control">
                <label for="">Descrição</label>
                <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
        </div>
        <div class="form-control">
            <div class="input-control">
                <label for="">Estado</label>
                <select name="" id="">
                    <option v-for="uf in ufs.sort()" :value="uf">
                        {{uf}}
                    </option>
                </select>
            </div>
            <div class="input-control">
                <label for="">Cidade</label>
                <select name="" id="">Exemplo</select>
            </div>
        </div>

        <button>Enviar</button>
    </form>
</template>

<script lang="ts" setup>
const estadosAPI = await useFetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados');
const listaDeEstados: any = estadosAPI.data.value;
const ufs = [];
const listaUFs = async (estados: any[]) => {
    estados.forEach(e => {
        ufs.push(e.sigla);
    });
}
listaUFs(listaDeEstados);

</script>

<style lang="css" scoped>
form {
    width: 40%;
    min-height: 80%;
    padding: 25px;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-direction: column;
    background-color: #fff;
    /*-webkit-box-shadow: 7px 7px 5px 2px rgba(0,0,0,0.31);
    -moz-box-shadow: 7px 7px 5px 2px rgba(0,0,0,0.31);
    box-shadow: 0px 2px 5px 2px rgba(0,0,0,0.31); */  
    font-weight: bold;
}

.logo {
    width: 150px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;

    border-radius: 5px;
}

.logo img {
    width: 30%;
    height: 100%;
}

.logo h2 {
    color: var(--primary);
}

.form-control {
    width: 100%;
    display: flex;
    gap: 10px;
}

.input-control {
    width: 100%;
    display: flex;
    gap: 5px;
    flex-direction: column;
}

input, select, textarea {
    height: 30px;
    padding-left: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    outline: none;
    font-size: 14px;
}

textarea {
    max-width: 100%;
    min-width: 100%;
    padding: 10px;
    min-height: 100px;
    max-height: 100px;
}

button {
    width: 30%;
    height: 40px;
    margin-top: 20px;
    border-radius: 10px;
    border: none;
    color: #fff;
    font-size: 18px;
    background-color: var(--primary);
}
</style>