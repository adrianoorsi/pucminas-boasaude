curl -X "POST" ^
  http://localhost:3010/adrianoorsi/boaSaudeAPI/1.0.0/dadosPessoais/alterar/1234 ^
  -H "accept: application/json" ^
  -H "Content-Type: application/json" ^
  -d ^
"{^
  ""id"": 1234,^
  ""nome"": ""Fulano de Tal"",^
  ""endereco"": ""Rua Principal, 123 - Centro - CEP 12345-678 - DF - Brasil"",^
  ""estadoCivil"": ""Solteiro""^
}"