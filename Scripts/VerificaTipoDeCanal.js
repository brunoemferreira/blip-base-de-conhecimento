// Script que verifica se o canal que esta sendo utilizado é blipchat ou WhatsApp
function run(source) {
    try {
        return source == "0mn.io"? "blipchat" : "whatsapp"; 
    } catch (e) {
        return "whatsapp";
    }
};
