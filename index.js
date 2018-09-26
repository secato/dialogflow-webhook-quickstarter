/* essa bibilioteca de fulfillment facilita um pouco as coisas e
é a unica oficial feita pelo dialogflow e documentacao (a pouca que tem)
esta disponivel no github:
https://github.com/dialogflow/dialogflow-fulfillment-nodejs

PS: nao confunda com o sdk completo, que tem para outras linguagens. O sdk
completo é mais cabuloso de mexer mas tbm te da mais poderes, permite 
fazer tudo que é feito no console via codigo
https://dialogflow.com/docs/sdks
*/
const { WebhookClient } = require('dialogflow-fulfillment')
const express = require('express')
const app = express()

app.use(express.json())

// endpoint on o dialogflow fara um post
app.post('/webhook', (req, res) => {

    // o agente facilita a manipulacao da requisicao e resposta
    // evitando de mexer com o json puro
    const agent = new WebhookClient({ request: req, response: res })

    function welcome(agent) {
        agent.add('Meu primeiro webhook')
    }

    function fallback(agent) {
        agent.add('Vixi deu ruim')
    }

    // mapeia qual intent é tratada por qual funcao
    // note que é o nome da intent que você cadastrou la no console do dialogflow
    // além disso é case sensitive, cuidado!
    let intentMap = new Map();
    intentMap.set('Default Welcome Intent', welcome)
    intentMap.set('Default Fallback Intent', fallback)
    agent.handleRequest(intentMap)

})

app.listen(3000, () => {
    console.log('Webhook iniciado na porta 3000');
});