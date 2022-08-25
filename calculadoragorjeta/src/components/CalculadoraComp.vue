<script>
export default {
  data() {
    return {
      qualidades: [
        { qualidade: 5, servico: "5% (Péssimo)" },
        { qualidade: 10, servico: "10% (Ruim)" },
        { qualidade: 15, servico: "15% (OK)" },
        { qualidade: 20, servico: "20% (Bom)" },
        { qualidade: 25, servico: "25% (Mais que bom)" },
        { qualidade: 30, servico: "30% (Excepcional)" },
      ],
      valor: 0,
      pessoa: 1,
      qualidade_selecionada: "",
    };
  },
  computed: {
    valor_final() {
      return (
        (this.valor * (1 + this.qualidade_selecionada / 100)) /
        this.pessoa
      ).toFixed(2);
    },
  },
};
</script>
<template>
  <main>
    <div class="calc">
      <h1>Calculadora de <strong>Gorjetas</strong></h1>
      <div class="valores-forms">
        <label for="input-valor">Qual o valor da conta?</label>
        <input v-model="valor" placeholder="0" id="input-valor" type="number" />
      </div>
      <div class="valores-forms">
        <label for="select-servico">Como foi o serviço?</label>
        <select
          v-model="qualidade_selecionada"
          name="select-qualidade"
          id="select-servico"
        >
          <option disabled value="">Escolha um item</option>
          <option
            v-for="qualidade of qualidades"
            :key="qualidade.qualidade"
            for="select-servico"
            :value="qualidade.qualidade"
          >
            {{ qualidade.servico }}
          </option>
        </select>
      </div>
      <div class="valores-forms">
        <label for="input-pessoas"
          >Quantas pessoas estão pagando a conta?</label
        >
        <input
          v-model="pessoa"
          placeholder="1"
          id="input-pessoas"
          type="number"
        />
      </div>
    </div>
    <div class="resultado">
      <h2>Valor da conta:</h2>
      <span>R$ {{ valor_final }} por pessoa</span>
    </div>
  </main>
</template>
