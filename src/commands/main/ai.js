import "dylux" 

case "chatgpt":
case "chatai":
case "ai":
  if (!q) {
    return reply(`Contoh:\n${prefix + command} Siapa pendiri WhatsApp`);
  }
    await fakeSend(`Tunggu bentar...\n\nJika lebih dari 30 detik tidak ada balasan mohon ulangi`);
  dylux
    .ChatGpt(`${encodeURIComponent(q)}`)
    .then((data) => {
    return fakeSend(data.text);
    })
    .catch((err) => {
      reply(err);
    });
  break;
