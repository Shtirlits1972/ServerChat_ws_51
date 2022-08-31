using System;

namespace ServerChat_ws_51.Models
{
    public class MessageChat
    {
        public string LoginEmail { get; set; }
        public string NameUser { get; set; }
        public string Text { get; set; }
        public DateTime DataMsg { get; set; }
        public TypeOfMessage type { get; set; }
        public override string ToString()
        {
            return $"LoginEmail = {LoginEmail} NameUser = {NameUser}, Text = {Text}, DataMsg = {DataMsg.ToString("G")} ";
        }
    }
    public enum TypeOfMessage { Text, LogIn, Error, Success, ServerInfo, Register }
}
