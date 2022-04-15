start "Conectores Kafka - GISA" connect-standalone ..\config\connect-standalone.properties ^
connect-file-source-MIC-Dados-Pessoais.properties ^
connect-file-sink-MIC-Dados-Pessoais.properties ^
connect-file-sink-MGE-DW-Dados-Pessoais.properties ^
connect-file-source-MIC-Historico-Saude.properties ^
connect-file-sink-MIC-Historico-Saude.properties ^
connect-file-sink-MGE-DW-Historico-Saude.properties 