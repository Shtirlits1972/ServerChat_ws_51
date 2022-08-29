namespace ServerChat_ws_51.Models
{
    public class Users
    {
        public int Id { get; set; }
        public string email { get; set; }
        public string pass { get; set; }
        public string role { get; set; } = "Юзер";  //  Админ
        public string userFio { get; set; } = "";
        public override string ToString()
        {
            return userFio;
        }
    }
}
