const VAGAS = []
function main(){
    const VAGAS = []
    let option;
    do{
        option = menu()
        switch(option){
            case "1":
                listarVaga();
                break
            case "2":
                criarVaga()
                break
            case "3":
                visualizarVaga()
                break
            case "4":
                cadastrarCandidato()
                break
            case "5":
                excluirVaga()
                break
            case "6":
                alert(`Saindo...`)
                break
            default:
                alert(`Escolha uma opção válida!`)
                break
        }
    }while(option != "6")
}

function menu(){
    return prompt(`Seja bem vindo ao JB.JOBS\n\nEscolha uma opção:\n1- Listar Vagas Disponíveis\n2- Criar Nova Vaga\n3- Vizualizar Nova Vaga\n4- Inscrever um Candidato em um vaga\n5- Excluir uma vaga\n6- Sair`)
}

//
//

function criarVaga(){
    VAGAS
    const vaga = {}
        vaga.candidatos = []
        vaga.qntd_inscritos = 0;
        vaga.indice = VAGAS.length + 1
        vaga.nome_vaga = prompt(`Informe o nome da vaga que deseja cadastrar: `)
        vaga.descricao_vaga = prompt(`Descrição da vaga: `)
        function solicitando_data(){
            let data_valida = false;
            let data_limite;

            while(!data_valida){
                data_limite = prompt(`Informe até quando essa vaga estará disponível (dd/mm/yyyy): `);

                if (/^\d{2}\/\d{2}\/\d{4}$/.test(data_limite)){
                    data_valida = true;
                }else{
                    alert(`Por favor, insíra a data no formado dd/mm/yyyy ultizando apenas números`)
                }
            }
            return data_limite
        }
        vaga.data_limite = solicitando_data();

    let confirmacao = confirm(`Deseja crirar esta vaga?\n\nIndice: ${vaga.indice}\nVaga: ${vaga.nome_vaga}\nDescrição da vaga: ${vaga.descricao_vaga}\nExpiração: ${vaga.data_limite}\nAplicações na vaga: ${vaga.qntd_inscritos}`)
    if(confirmacao){
        VAGAS.push(vaga)
        alert(`Vaga cadastrada com sucesso!`)
    }else{
        alert(`Voltando ao menu inicial`)
    }
    
}
function listarVaga(){
    VAGAS
    if(VAGAS.length === 0){
        alert(`Não há vagas cadastradas`)
        return
    }
    let exibir_vagas = [] 
    "Vagas dispponíveis: \n\n";
    VAGAS.forEach(vaga => {
        exibir_vagas += `Linguagem: ${vaga.nome_vaga}\n`
        exibir_vagas += `Índice: ${vaga.indice}\n`
        exibir_vagas += `Descrição: ${vaga.descricao_vaga}\n`
        exibir_vagas += `Expiração: ${vaga.data_limite}\n`
        exibir_vagas += `Aplicações na vaga: ${vaga.qntd_inscritos}\n`
        exibir_vagas += `-------------------------------------\n`
    })
    alert(exibir_vagas)
}
function visualizarVaga(){
    VAGAS
    if(VAGAS.length === 0){
        alert(`Ainda não há vagas cadastradas`)
        return
    }

    let indice_vaga = prompt("Informe o indice da vaga que deseja vizualizar: ")

    let vaga = VAGAS[indice_vaga - 1];
        let exibir_vaga = "Vaga de Índice número:" + indice_vaga + "\n\n";
        exibir_vaga += `Linguagem: ${vaga.nome_vaga}\n`
        exibir_vaga += `Índice: ${vaga.indice}\n`
        exibir_vaga += `Descrição: ${vaga.descricao_vaga}\n`
        exibir_vaga += `Expiração: ${vaga.data_limite}\n`
        exibir_vaga += `Aplicações na vaga: ${vaga.qntd_inscritos}\n`
        exibir_vaga += `Candidatos aplicados na vaga:\n`;

        if (vaga.candidatos && vaga.candidatos.length > 0){
            vaga.candidatos.forEach((candidato, indice) => {
                exibir_vaga += `${indice + 1 }. ${candidato}\n`
            });
        }else{
            exibir_vaga += ("Nenhum candidato inscrito!")
        }

    alert(exibir_vaga)

}

function cadastrarCandidato(){
    VAGAS
    let nome_candidato = prompt("Informe seu nome: ")
    let indice_vaga = prompt("Informe o indice da vaga pra qual deseja se candidatar: ")

    let vaga = VAGAS[indice_vaga - 1];

    if(!vaga){
        alert("Índice inválido! Vaga não encontrada.")
        return
    }

    let confirmacao = confirm(`Deseja se inscrever na vaga: ${vaga.nome_vaga}?\nLinguagem: ${vaga.nome_vaga}\nÍndice: ${vaga.indice}\nDescrição: ${vaga.descricao_vaga}\nExpiração: ${vaga.data_limite}\nAplicações na vaga: ${vaga.qntd_inscritos}\n`)

    if(confirmacao){
        vaga.candidatos = vaga.candidatos || [];
        vaga.candidatos.push(nome_candidato)
        vaga.qntd_inscritos += 1
        alert(`Inscrição realizada com sucesso!`)
    }else{
        return 
    }

}

function excluirVaga(){
    let indice_vaga = prompt("Informe o indice da vaga que deseja excluir: ")

    const vaga = VAGAS[indice_vaga - 1];

    let confirmacao = confirm(`Deseja excluir a vaga: ${vaga.nome_vaga}?\nLinguagem: ${vaga.nome_vaga}\nÍndice: ${vaga.indice}\nDescrição: ${vaga.descricao_vaga}\nExpiração: ${vaga.data_limite}\nAplicações na vaga: ${vaga.qntd_inscritos}\n`)

    if(confirmacao){
        VAGAS.splice(indice_vaga - 1, 1)
        alert(`a vaga: ${vaga.nome_vaga}\nLinguagem: ${vaga.nome_vaga}\nÍndice: ${vaga.indice}\nDescrição: ${vaga.descricao_vaga}\nExpiração: ${vaga.data_limite}\nAplicações na vaga: ${vaga.qntd_inscritos}\n\nFoi excluida!`);
    }
}

main()