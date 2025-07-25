// 1. definição do registro
const aluno1 = {
    Nome: 'Arrascaeta', 
    Idade: 27,
    Matricula: 2025001,
    Curso: "EC"
};


// 2. Criação da lista "turma"
const turma1 = [aluno1];



// 3. Função para add alunos
const addAluno = (turmaInicial = []) => {
    return (...alunos) =>{
        const novosAlunos = alunos.map(([nome, idade, matricula, curso]) => ({
            Nome: nome,
            Idade: idade,
            Matricula: matricula,
            Curso: curso
        }))
        return [...turmaInicial, ...novosAlunos]
    } 
};    

    // criação da nova turma
const turma2 = addAluno(turma1)(
    ['José', 18, 2025002, 'CC'],
    ['Ana', 17, 2025003, 'SI'],
    ['Eduardo', 18, 2025004, 'EC'],
    ['Mateus', 19, 2025005, 'EC'],
    ['Renato', 23, 2025006, 'CC'],
    ['Natália', 19, 2025007, 'CC'],
    ['Isabele', 19, 2025008, 'CC'],
    ['Maria Luiza', 19, 2025009, 'CC'],
    ['Adriel', 18, 2025010, 'CC'],
    ['Cleiton', 30, 2025011, 'SI'],
    ['Elizabeth II', 99, 1921001, 'CC'],
    ['Lulu Inácio', 70, 2025013, 'SI'],
    ['Alê de Morais', 60, 2025014, 'EC'],
    ['Rick Sanchez', 77, 2025015, 'EC'],
    ['Walter White', 80, 2025016, 'EC'],
    ['Zé da manga', 55, 2025017, 'SI'],
    ['Jairzin M. B.', 72, 2025018, 'SI'],
    ['Gandalf', 99, 2025019, 'EC'],
    ['Ramisés III', 19, 2025012, 'CC'],
    ['JC, The Goat', 2025, 1, 'CC']
    
);




// 4. Função para exibir dados dos alunos na turma
const listaAlunos = (turmaAtual = []) => {
    return turmaAtual
};
    //teste:
            console.log('Alunos matriculados:', listaAlunos(turma2));




// 5. Função para buscar por curso
const filtrarPorCurso = (turma, curso) => {
    return turma.filter(aluno => aluno.Curso === curso)
};

const alunosEC = filtrarPorCurso(turma2, 'EC');
const alunosCC = filtrarPorCurso(turma2, 'CC');
const alunosSI = filtrarPorCurso(turma2, "SI");

    //teste:
            console.log('Alunos de Eng. de Computação:', alunosEC);
            console.log('Alunos de Cien. da Computação:', alunosCC);
            console.log('Alunos de Sist. de Informação:', alunosSI);




// 6. Função para remover aluno da turma
const removerAluno = (turma, nome) => {
    return turma.filter(aluno => aluno.Nome !== nome)
};
    //teste:
        console.log('Atualização dos alunos matriculados:', removerAluno(turma2, 'Cleiton'));




// 7. Função que ordena por nº de matrícula (mais antiga p/ mais recente)
const ordenarPorMatricula = (turma) => {
    return [...turma].sort((a, b) => a.Matricula - b.Matricula)
};
    //teste:
        console.log('Lista dos alunos em ordem de matrícula:', ordenarPorMatricula(turma2));




// 8. Função para contabilizar os alunos de cada curso
const alunosPorCurso = (turma) => turma.reduce((acc, aluno) => {
    const curso = aluno.Curso
        return {...acc, [curso] : (acc[curso] || 0) +1}
},
{});
    //teste:
        console.log(alunosPorCurso(turma2))




// 9. Função para editar dados de um aluno identificado pela sua matrícula
const editarAluno = (turma, matricula, novosDados) => {
    return turma.map(aluno => aluno.Matricula === matricula ? {...aluno, ...novosDados} : aluno)
};
    //teste (editar o nome de Ana e sua idade):
        console.log(editarAluno(turma2, 2025003, {Nome: 'Ana Clara', Idade: 25}));
