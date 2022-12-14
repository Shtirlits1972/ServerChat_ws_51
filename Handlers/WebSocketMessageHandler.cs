using ServerChat_ws_51.SocketManagers;
using System.Net.WebSockets;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;
using ServerChat_ws_51.Models;
using System;

namespace ServerChat_ws_51.Handlers
{
    public class WebSocketMessageHandler : SocketHandler
    {
        public WebSocketMessageHandler(ConnectionManager connections) : base(connections)
        {

        }

        public override async Task OnConnected(WebSocket socket)
        {
            await base.OnConnected(socket);
            var socketId = Connections.GetId(socket);

            DateTime time = DateTime.Now;

            MessageChat message = new MessageChat { LoginEmail = "Server", NameUser = "Server", Text = "You in chat", DataMsg = time, type = TypeOfMessage.ServerInfo };
            string strMessage = JsonConvert.SerializeObject(message);

            await  SendMessage(socket, strMessage);
          //  await SendMessageToAll($"{socketId}  just joined the party ************");
        }

        public override async Task Recieve(WebSocket socket, WebSocketReceiveResult result, byte[] buffer)
        {
            var socketId = Connections.GetId(socket);
            await SendMessageToAll(Encoding.UTF8.GetString(buffer, 0, result.Count));
        }
    }
}
