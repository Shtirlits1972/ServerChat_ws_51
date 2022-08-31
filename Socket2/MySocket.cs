using System;
using System.Net.WebSockets;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using ServerChat_ws_51.Models;

namespace ServerChat_ws_51.Socket2
{
    public class MySocket
    {
        public string LoginEmail { get; set; } = String.Empty;
        public string UserName { get; set; } = String.Empty;
        public bool IsAutorize { get; set; } = false;
        public WebSocket webSocket { get; set; }


        public MySocket() { }

        public MySocket(string Id, string UserName, bool IsAutorize, WebSocket webSocket) { }

        public override string ToString()
        {
            return $"LoginEmail = {LoginEmail}, UserName = {UserName}, IsAutorize = {IsAutorize}";
        }
    }
}
