using System;
using System.Net.WebSockets;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;
using ServerChat_ws_51.Models;
using ServerChat_ws_51.SocketManagers;

namespace ServerChat_ws_51.Socket2
{
    public class WebSocketHandler2 : SocketHandler_2
    {
        public WebSocketHandler2(ConnectManager connections) : base(connections)
        {

        }

        public override async Task OnConnected(WebSocket socket)
        {
            await base.OnConnected(socket);
            var socketId = Connections.GetId(socket);
            DateTime time = DateTime.Now;

            MessageChat message = new MessageChat { LoginEmail = "Server", NameUser = "Server", Text = "You connected", DataMsg = time, type = TypeOfMessage.ServerInfo };
            string strMessage = JsonConvert.SerializeObject(message);

            await SendMessage(socket, strMessage);
            //  await SendMessageToAll($"{socketId}  just joined the party ************");
        }

        public override async Task Recieve(WebSocket socket, WebSocketReceiveResult result, byte[] buffer)
        {
            string message = Encoding.UTF8.GetString(buffer, 0, result.Count);
            DateTime time = DateTime.Now;

            MessageChat messageChat = JsonConvert.DeserializeObject<MessageChat>(message);
            var socketId = Connections.GetId(socket);
            MySocket mySocket = Connections.GetSocketById(socketId);

            if(messageChat.type == TypeOfMessage.Register)
            {
                Users model = JsonConvert.DeserializeObject<Users>(messageChat.Text);
                model = UsersCrud.Register(model);

                if(model == null || model.Id < 1)
                {
                    mySocket.IsAutorize = false;
                    
                    MessageChat error = new MessageChat { LoginEmail = "Server", NameUser = "Server", type = TypeOfMessage.Error, Text = "Error Register", DataMsg = time };
                    string strMessage = JsonConvert.SerializeObject(error);
                    await SendMessage(socket, strMessage);
                }
                else if(model != null || model.Id > 0)
                {
                    mySocket.UserName = model.userFio;
                    mySocket.IsAutorize = true;

                    MessageChat error = new MessageChat { LoginEmail = "Server", NameUser = "Server", type = TypeOfMessage.Success, Text = "Register Success", DataMsg = time };
                    string strMessage = JsonConvert.SerializeObject(error);
                    await SendMessage(socket, strMessage);
                }

            }
         else   if (messageChat.type == TypeOfMessage.LogIn)
            {
                string text = messageChat.Text;

                if(!string.IsNullOrWhiteSpace(text))
                {
                    string[] strArr = text.Split('$');

                    if(strArr.Length == 2)
                    {
                        Users users = UsersCrud.Login(strArr[0], strArr[1]);

                        if(users != null && users.Id > 0)
                        {
                            mySocket.LoginEmail = users.email;
                            mySocket.UserName = users.userFio;
                            mySocket.IsAutorize = true;

                            MessageChat error = new MessageChat {LoginEmail = "Server", NameUser = "Server", type = TypeOfMessage.Success, Text = "Autorize Success", DataMsg = time };
                            string strMessage = JsonConvert.SerializeObject(error);
                            await SendMessage(socket, strMessage);
                        }
                        else
                        {
                            mySocket.IsAutorize = false;

                            MessageChat error = new MessageChat {  LoginEmail = "Server", NameUser = "Server", type = TypeOfMessage.Error, Text = "Error Autorize", DataMsg = time };
                            string strMessage = JsonConvert.SerializeObject(error);
                            await SendMessage(socket, strMessage);
                        }
                    }
                    else
                    {
                        mySocket.IsAutorize = false;

                        MessageChat error = new MessageChat { LoginEmail = "Server", NameUser = "Server", type = TypeOfMessage.Error, Text = "Error Autorize", DataMsg = time };
                        string strMessage = JsonConvert.SerializeObject(error);
                        await SendMessage(socket, strMessage);
                    }
                }
                else
                {
                    mySocket.IsAutorize = false;

                    MessageChat error = new MessageChat { LoginEmail = "Server", NameUser = "Server", type = TypeOfMessage.Error, Text = "Error Autorize", DataMsg = time };
                    string strMessage = JsonConvert.SerializeObject(error);
                    await SendMessage(socket, strMessage);
                }
            }
            else if(messageChat.type == TypeOfMessage.Text)
            {
                if (mySocket.IsAutorize == true)
                {
                    MessageChat request = new MessageChat { type= TypeOfMessage.Text, Text = messageChat.Text, NameUser = mySocket.UserName, LoginEmail = mySocket.LoginEmail, DataMsg = time };
                    message = JsonConvert.SerializeObject(request);
                    await SendMessageToAll(message);
                }
                else
                {
                    MessageChat error = new MessageChat { LoginEmail = "Server", NameUser = "Server", type = TypeOfMessage.Error, Text = "Error Autorize", DataMsg = time };
                    string strMessage = JsonConvert.SerializeObject(error);
                    await SendMessage(socket, strMessage);
                }
            }
        }
    }
}
