function run(identifier) {
  var channel = "";
  var contactDomain = identifier.split("@")[1];

  switch (contactDomain) {
    case "0mn.io":
      channel = "Blip Chat";
      return channel;
    case "tangram.com.br":
      channel = "SMS";
      return channel;
    case "take.io":
      channel = "SMS";
      return channel;
    case "messenger.gw.msging.net":
      channel = "Messenger";
      return channel;
    case "instagram.gw.msging.net":
      channel = "Instagram";
      return channel;
    case "wa.gw.msging.net":
      channel = "WhatsApp";
      return channel;
    case "abs.gw.msging.net":
      channel = "Microsoft Teams";
      return channel;
    case "businessmessages.gw.msging.net":
      channel = "GBM";
      return channel;
    case "skype.gw.msging.net":
      channel = "Skype";
      return channel;
    case "telegram.gw.msging.net":
      channel = "Telegram";
      return channel;
    case "workplace.gw.msging.net":
      channel = "Workplace";
      return channel;
    case "mailgun.gw.msging.net":
      channel = "Email";
      return channel;
    default:
      channel = "Other";
      return channel;
  }
}

const identifier = "";
const resultado = run(identifier);

console.log(resultado);