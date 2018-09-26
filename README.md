# Dialogflow webhook quick-start

Este é um código extremamente básico só para facilitar a vida de quem quer rodar o primeiro webhook.

Dentro da pasta do projeto instale os modulos:
`npm i`

Depois rode o codigo:
`npm start`

Seu servidor estara rodando na porta 3000.
Acontece que para o dialogflow acessar o webhook é necessário ser em uma URL exposta e com https. Para isso é necessário algum serviço de tunnel como:

http://serveo.net/ (precisa de ssh, consegue usar no powershell)
https://localtunnel.github.io/www/ (modulo node, bem facil tbm)

Após isso basta habilitar o webhook na aba fulfillment do console do dialogflow e depois habilitar o fulfillment na intent desejada.
(Sim, você habilita o fulfillment para o agent e depois tem que habilitar em cada intent que voce deseja fazer webhook)

O código aqui de exemplo esta "tratando" as duas intents padrões quando se cria um agente, a intent de welcom e de fallback. Adicione a sua e seja feliz.


**PS**: o webhook precisa responder em até 5 segundos, se não ele falha e responde a mensagem padrão cadastrada na intent.
(Esses serviços de tunelamento podem ficar lento as vezes)


Dúvidas?
[Grupo Dialogflow Brasil](https://www.facebook.com/groups/dialogflowbrasil)
