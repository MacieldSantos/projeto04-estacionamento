class GerenciaEstacionamento{
    constructor(){
        if(GerenciaEstacionamento.instancia){
            return GerenciaEstacionamento.instancia;
        }
        this.veiculos = [];
        this.totalVagas = 10;
        GerenciaEstacionamento.instancia = this;

    }

    // Metodo para retornar a unica instancia
    static getInstance(){ //sempre devolve a mesma instância;
        if(!GerenciaEstacionamento.instancia){
            GerenciaEstacionamento.instancia = new GerenciaEstacionamento();
        }
        return GerenciaEstacionamento.instancia;
    }

    // Adicionar Veiculo:
    addVeiculo(placa, modelo) {
            placa = placa.trim().toUpperCase();
            modelo = modelo.trim();

            // Verifica se os campos foram preenchidos
            if (placa === "" || modelo === "") {
                return "Preencha a placa e o modelo.";
            }

            // Verifica se a placa já está estacionada
            for (const veiculo of this.veiculos) {
                if (veiculo.placa === placa) {
                    return "Veículo com esta placa já está estacionado.";
                }
            }

            // Verifica se há vagas disponíveis
            if (this.veiculos.length >= this.totalVagas) {
                return "Estacionamento Lotado!";
            }

            const veiculo = {
                placa: placa,
                modelo: modelo
            };

            this.veiculos.push(veiculo);

            console.log("VEÍCULO ADICIONADO ----------------");
            console.log(`${placa} - ${modelo}`);

            return "Veículo adicionado com sucesso.";
        }
        
    // Retorna a quantidade de vagas ocupadas
    getVagasOcupadas() {
        return this.veiculos.length;
    }

    // Retorna a quantidade de vagas disponíveis
    getVagasDisponiveis() {
        return this.totalVagas - this.veiculos.length;
    }

    // Remover Veiculo:
    removerVeiculo(placa) {
        placa = placa.trim().toUpperCase();

        if (placa === "") {
            return "Informe a placa do veículo.";
        }

        let indice = -1;

        for (let i = 0; i < this.veiculos.length; i++) {
            if (this.veiculos[i].placa === placa) {
                indice = i;
                break;
            }
        }

        if (indice === -1) {
            return "Veículo não encontrado.";
        }

        const veiculoRemovido = this.veiculos[indice];

        this.veiculos.splice(indice, 1);

        console.log("VEÍCULO REMOVIDO ----------------");
        console.log(`${veiculoRemovido.placa} - ${veiculoRemovido.modelo}`);

        return "Veículo removido com sucesso.";
    }

}

// Criando referencia ao Singleton:
const estacionamento1 = GerenciaEstacionamento.getInstance();
const estacionamento2 = GerenciaEstacionamento.getInstance();

// Verificando se são as mesmas instancias:
console.log("Estacionamento 1", estacionamento1);
console.log("Estacionamento 2", estacionamento2);
console.log("Mesma Instancia:", estacionamento1 === estacionamento2);

// Funcao para entrada de Veiculo:
function entrarVeiculo(){
    const placa = document.getElementById("placa").value;
    const modelo = document.getElementById("modelo").value;

    const estacionamento = GerenciaEstacionamento.getInstance();

    const mensagem = estacionamento.addVeiculo(placa, modelo);

    document.getElementById("mensagem").innerHTML = mensagem;

    atualizarInterface();

    console.log(estacionamento);

}

// Atualiza as informações na interface
function atualizarInterface() {
    const estacionamento = GerenciaEstacionamento.getInstance();

    document.getElementById("totalVagas").innerHTML = estacionamento.totalVagas;

    document.getElementById("vagasOcupadas").innerHTML = estacionamento.getVagasOcupadas();

    document.getElementById("vagasDisponiveis").innerHTML = estacionamento.getVagasDisponiveis();

    let html = "";

    if (estacionamento.veiculos.length === 0) {
        html = "<li>Nenhum veículo estacionado.</li>";
    } else {
        for (const veiculo of estacionamento.veiculos) {
            html += `<li>${veiculo.placa} - ${veiculo.modelo}</li>`;
        }
    }

    document.getElementById("listaVeiculos").innerHTML = html;
}

// Função para saída de veículo
function sairVeiculo() {
    const placa = document.getElementById("placa").value;

    const estacionamento = GerenciaEstacionamento.getInstance();

    const mensagem = estacionamento.removerVeiculo(placa);

    document.getElementById("mensagem").innerHTML = mensagem;

    atualizarInterface();

    console.log(estacionamento);
}

// Função para limpar os campos
function limparCampos() {
    document.getElementById("placa").value = "";
    document.getElementById("modelo").value = "";
    document.getElementById("mensagem").innerHTML = "";
}

atualizarInterface();