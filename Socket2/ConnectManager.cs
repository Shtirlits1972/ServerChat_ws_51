using System;
using System.Linq;
using System.Threading.Tasks;
using System.Collections.Generic;

using System.Collections.Concurrent;
using System.Net.WebSockets;
using System.Threading;

namespace ServerChat_ws_51.Socket2
{
    public class ConnectManager
    {
        private List<MySocket> _connections = new List<MySocket>();

        public MySocket GetSocketById(string id)
        {
            return _connections.FirstOrDefault(x => x.LoginEmail == id);
        }

        public List<MySocket> GetAllWebSockets()
        {
            return _connections;
        }

        public string GetId(WebSocket socket)
        {
            return _connections.FirstOrDefault(x => x.webSocket == socket).LoginEmail;
        }

        public async Task RemoveSocketAsync(string id)
        {
            var socket = GetSocketById(id);

            for(int i=0; i < _connections.Count; i++)
            {
                if (_connections[i].LoginEmail == id)
                {
                    _connections.RemoveAt(i);
                    break;
                }
            }
            await socket.webSocket.CloseAsync(WebSocketCloseStatus.NormalClosure, "socket connection closed", CancellationToken.None);
        }

        private string GetConnectionId()
        {
            return Guid.NewGuid().ToString("N");
        }

        public void AddSocket(WebSocket socket)
        {
            MySocket socket2 = new MySocket();
            socket2.webSocket = socket;
            socket2.LoginEmail = GetConnectionId();

            _connections.Add(socket2);
        }
    }
}
