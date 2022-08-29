using System;
using System.Net.WebSockets;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using ServerChat_ws_51.Models;

namespace ServerChat_ws_51.Socket2
{
    public class SocketMiddleware2
    {
        private readonly RequestDelegate _next;
        private SocketHandler_2 Handler { get; set; }

        public SocketMiddleware2(RequestDelegate next, SocketHandler_2 handler)
        {
            _next = next;
            Handler = handler;
        }

        public async Task InvokeAsync(HttpContext context)
        {
            //IRequestCookieCollection cookie2 = context.Request.Cookies;

            //string user = cookie2["user"].ToString();
            //string password = cookie2["password"].ToString();

            //Users users = UsersCrud.Login(user, password);

            if (!context.WebSockets.IsWebSocketRequest)
            {
                return;
            }

            //if (users != null && users.Id > 0)
            //{
                context.Request.Cookies = null;

                var socket = await context.WebSockets.AcceptWebSocketAsync();
                await Handler.OnConnected(socket);

                await Recieve(socket, async (result, buffer) =>
                {
                    var str = System.Text.Encoding.Default.GetString(buffer);
                    int y = 0;

                    if (result.MessageType == WebSocketMessageType.Text)
                    {
                        try
                        {
                            await Handler.Recieve(socket, result, buffer);
                        }
                        catch (Exception e)
                        {
                            Console.WriteLine(e);
                        }
                    }
                    else if (result.MessageType == WebSocketMessageType.Close)
                    {
                        await Handler.OnDisconnected(socket);
                    }
                });
           // }
        }

        private async Task Recieve(WebSocket webSocket, Action<WebSocketReceiveResult, byte[]> messageHandler)
        {
            //  var buffer = new byte[1024 * 4];
            var buffer = new byte[4096 * 8];
            while (webSocket.State == WebSocketState.Open)
            {
                try
                {
                    int a = 0;

                    var result = await webSocket.ReceiveAsync(new ArraySegment<byte>(buffer), CancellationToken.None);
                    messageHandler(result, buffer);

                    int y = 0;
                }
                catch (Exception e)
                {
                    Console.WriteLine(e);
                }
            }
        }
    }
}
