 Na pasta boasaude:

    - setpath.bat - incluir executáveis do Kafka no PATH: 
    - start-servers.bat - iniciar Zookeeper e Kafka Server (às vezes tem um atraso e precisamos iniciar o Kafka Server separadamente)
    - create-topics.bat - cria (ou recria) o(s) topic(s) de Dados Pessoais e Histórico de Saúde. Por enquanto está só com o primeiro.
    - start-conectors.bat - inicia conectores de arquivos tanto do producer quanto do consumer. Consumer não está funcionando
    - start-console-consumer-MCI-Dados Pessoais.bat - inicia conecto para console para Dados Pessoais

Na pasta API:

    - node index.js - iniciar o servidor Node Express para simulação do backend
    - teste-curl-atualizar-dados-pessoais - executa uma chamada para a API usando curl para simular atualização de dados por associado
    - teste-curl-incluir-historico-saude - executa uma chamada para a API  usando curl para simular inclusão de dados por prestador

Ao final do teste (pasta boasaude):

    - stop-servers.bat - desatva o Zookeeper e o Kafka Server