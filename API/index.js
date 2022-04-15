const express = require('express');
const app = express();
const port = 3010;
const basePath = '/adrianoorsi/boaSaudeAPI/1.0.0';

const producerMICTopicDadosPessoais = 'C:\\tmp\\kafka\\boasaude\\MIC-topics\\dados.pessoais.source.txt';
const producerMICTopicHistoricoSaude = 'C:\\tmp\\kafka\\boasaude\\MIC-topics\\historico.saude.source.txt';

const fs = require('fs');

// For parsing application/json
app.use(express.json());
  
// For parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

/*
const alunos = ["Eu", "Outro cara", "Outro mané"];
app.get('/drico', (req, res) => {
    res.send('Método get-drico'.toString().concat(alunos.reduce((saida, aluno) => saida.concat("<br>" + aluno), "<br>Começo")));
});

app.get('/dricox', (req, res) => {
    alunos.push("Mais um sujeito");
    res.send('Método post-drico');
});

app.post('/drico', (req, res) => {
    var chaves = Object.keys(req.query);
    for (let index = 0; index < chaves.length; index++) {
        var chave = chaves[index];
        var data = chave.concat('=').concat(req.query[chave]).concat('\n');
        fs.appendFile('C:\\tmp\\kafka\\boasaude\\mic.dados.pessoais.database.source.txt', data, function (err) {
            if (err) throw err;
        });
    }
    res.send('Método post-drico');
});
*/
app.get(basePath, (req, res) => {
    res.send("<HTTP><BODY><CENTER><h1><BR><BR><BR><BR>GISA - Gestão Integral da Saúde do Associado<BR></h1><h2>Trabalho de Conclusão de Curso<br>Especialização em Arquitetura de Software Distribuído - 2020</h2><h3><br>Aluno: Adriano Orsi<br><br>Orientador: Prof. Dr. Pedro Alves de Oliveira</h3><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><h5>API Versão 1.0.0</h5></CENTER></BODY></HTTP>");
});

app.listen(port, () => {
    console.log(`API - GISA executando em http://localhost:${port}`);
});

app.post(basePath + '/dadosPessoais/alterar/:id', (req, res) => {
    
    var data = req.body;    
    var registro = "[".concat(data.id)
                    .concat(" | ").concat(data.nome)
                    .concat(" | ").concat(data.endereco)
                    .concat(" | ").concat(data.estadoCivil)
                    .concat("]\n");
    fs.appendFile(producerMICTopicDadosPessoais, registro, function (err) {
        if (err) throw err;
    });

    res.send('Método dadosPessoais/alterar/' + req.params['id']);
});


app.put(basePath + '/historicoSaude/incluir', (req, res) => {
    
    var data = req.body;    
    var registro = "[".concat(data.id)
                    .concat(" | ").concat(data.tipo)
                    .concat(" | ").concat(data.dataOcorrencia)
                    .concat(" | ").concat(data.dataTermino)
                    .concat(" | ").concat(data.situacao)
                    .concat(" | ").concat(data.CID.id)
                    .concat(" | ").concat(data.CID.codigo)
                    .concat(" | ").concat(data.CID.descricao)
                    .concat("]\n");
    fs.appendFile(producerMICTopicHistoricoSaude, registro, function (err) {
        if (err) throw err;
    });

    res.send('historicoSaude/incluir');
});
