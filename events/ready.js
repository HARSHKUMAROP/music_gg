module.exports = async (client) => {
  (client.Ready = true),
    client.user.setPresence({
      status: "dnd", // You can show online, idle, and dnd
      activity: {
        name: "MADE BYE HARSH_OP", // The message shown
        type: "PLAYING", // PLAYING, WATCHING, LISTENING, STREAMING,
      },
    });
  client.Manager.init(client.user.id);
  client.log("Successfully Logged in as " + client.user.tag); // You can change the text if you want, but DO NOT REMOVE "client.user.tag"
  client.RegisterSlashCommands();
};
