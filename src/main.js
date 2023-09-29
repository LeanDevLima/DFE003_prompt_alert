$(document).ready(function () {
    $("#calcularDobro").click(function () {
        const numero = $("#numero").val();
        const resultado = numero * 2;
        $("#resultadoDobro").text(`O dobro de ${numero} é ${resultado}.`);
    });

    $("#calcularJantar").click(function () {
        const valorConta = parseFloat($("#valorConta").val());
        const taxaGarcom = valorConta * 0.1; 
        const valorTotal = valorConta + taxaGarcom;
        $("#resultadoJantar").text(`O valor total do jantar, incluindo a taxa do garçom, é R$ ${valorTotal.toFixed(2)}.`);
    });

    $("#calcularDivisao").click(function () {
        const valorTotalConta = parseFloat($("#valorTotalConta").val());
        const quantidadeClientes = parseInt($("#quantidadeClientes").val());
        if (quantidadeClientes > 0) {
            const valorPorCliente = valorTotalConta / quantidadeClientes;
            $("#resultadoDivisao").text(`Cada cliente deve pagar R$ ${valorPorCliente.toFixed(2)}.`);
        } else {
            $("#resultadoDivisao").text("A quantidade de clientes deve ser maior que zero.");
        }
    });
});
