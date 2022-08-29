namespace ServerChat_ws_51.Models
{
    public class MessageChat
    {
        public string NameUser { get; set; }
        public string Text { get; set; }
        public TypeOfMessage type { get; set; }
        public override string ToString()
        {
            return $" NameUser = {NameUser}, Text = {Text} ";
        }
    }
    public enum TypeOfMessage { Text, LogIn, Error, Success, ServerInfo, Register }
}
