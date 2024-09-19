function cadastra_aluno() {
    const no_al= document.getElementById('mostra_nome').value;
    const dn_al= document.getElementById('mostra_data').value;
    const no_tl= document.getElementById('mostra_telefone').value;
    const no_cp= document.getElementById('mostra_cpf').value;
    const dn_rg= document.getElementById('mostra_rg').value;
    const no_cep= document.getElementById('mostra_cep').value;

    document.getElementById('mostra_nome').innerText= no_al;
    document.getElementById('mostra_data').innerText= dn_al;
    document.getElementById('mostra_telefone').innerText= no_tl;
    document.getElementById('mostra_cpf').innerText= no_cpf;
    document.getElementById('mostra_rg').innerText= no_rg;
    document.getElementById('mostra_cep').innerText= no_cep;

    


    
}