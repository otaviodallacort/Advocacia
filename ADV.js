function cadastra_aluno() {
    const no_al= document.getElementById('nome_aluno').value;
    const dn_al= document.getElementById('data_nascimento').value;
    const cg_al= document.getElementById('n_processo').value;

    document.getElementById('mostra_nome').innerText= no_al;
    document.getElementById('mostra_data').innerText= dn_al;
    document.getElementById('mostra_cgm').innerText= cg_al;


    
}