curl -X "PUT" ^
  "http://localhost:3010/adrianoorsi/boaSaudeAPI/1.0.0/historicoSaude/incluir" ^
  -H "accept: application/json" ^
  -H "Content-Type: application/json" ^
  -d ^
"{^
  ""id"": 1234,^
  ""tipo"": ""Consulta"",^
  ""dataOcorrencia"": ""26/04/2022"",^
  ""dataTermino"": ""26/04/2022"",^
  ""situacao"": ""Agendada"",^
  ""CID"": {^
    ""id"": 5678,^
    ""codigo"": ""6A40"",^
    ""descricao"": ""Catatonia associada a outro transtorno mental""^
  }^
}"