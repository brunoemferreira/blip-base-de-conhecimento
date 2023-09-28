// Script define qual é o templateMessageType deve ser utilizado se blipchat protocolo lime se whatsapp json
// Esse script é geralmente utilizado no início do bot após a verificação do canal
function run(channel) {
    return channel == 'blipchat' ? 'application/vnd.lime.select+json' : 'application/json'
}
