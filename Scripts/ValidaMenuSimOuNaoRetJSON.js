// Valida Menu de Sim ou Não por Regex e retorna um Json o input informado pelo usuário e a intenção que foi verificada através desse input 

function run(userInput) {
    try {     
        let sim = /\b(Vamos|aceito|1|sim|confirmado|um|aceitei|esse|confirmo|bora|quero|querer|primeiro|primeira|esquerda|esquerdo|yes|certo|ok)\b/gmi;
        let nao = /\b(2|n[a|ã]o|dois|segundo|segunda|direita|negativo|no|not|nop|direito|ultima|ultimo)\b/gmi;

        if (userInput.match(nao)) return {
            input: userInput,
            intention: "Nao"
        };

        else if (userInput.match(sim)) return {
            input: userInput,
            intention: "Sim"
        };

        else return {
            input: userInput,
            intention: "Input inesperado"
        };

    } catch (e) {
        return {
            input: userInput,
            intention: "Input inesperado"
        };
    }
}
