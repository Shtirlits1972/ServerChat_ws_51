using System.Collections.Generic;
using System.Linq;
using System.Data;
using System.Data.SqlClient;
using Dapper;

namespace ServerChat_ws_51.Models
{
    public class UsersCrud
    {
        private static readonly string strConn = Ut.GetConnetString();


        public static Users Register(Users model)
        {
            Users userRegister = GetAll().Where(x => x.email == model.email).FirstOrDefault();

            if(userRegister != null && userRegister.Id > 0)
            {
                return null;
            }
            else
            {
                model = Add(model);
            }
            return model;
        }


        public static List<Users> GetAll()
        {
            List<Users> list = new List<Users>();

            using (IDbConnection db = new SqlConnection(strConn))
            {
                list = db.Query<Users>("SELECT Id, email, pass, [role], userFio FROM Users;").ToList();
            }

            return list;
        }
        public static Users GetOne(int Id)
        {
            Users model = null;

            using (IDbConnection db = new SqlConnection(strConn))
            {
                model = db.Query<Users>("SELECT Id, email, pass, [role], userFio FROM Users WHERE Id = @Id;", new { Id }).FirstOrDefault();
            }

            return model;
        }
        public static Users Login(string Email, string Pass)
        {
            Users model = null;

            using (IDbConnection db = new SqlConnection(strConn))
            {
                model = db.Query<Users>("SELECT TOP 1 Id, email, pass, [role], userFio FROM Users WHERE Email = @Email AND Pass = @Pass;", new { Email, Pass }).FirstOrDefault();
            }

            return model;
        }
        public static void Del(int Id)
        {
            using (IDbConnection db = new SqlConnection(strConn))
            {
                db.Execute("DELETE FROM Users WHERE Id = @Id;", new { Id });
            }
        }
        public static void Edit(Users model)
        {
            using (IDbConnection db = new SqlConnection(strConn))
            {
                var Query = "UPDATE Users SET email = @email, pass = @pass, role = @role, userFio = @userFio  WHERE Id = @Id;";
                db.Execute(Query, model);
            }
        }
        public static Users Add(Users model)
        {
            using (IDbConnection db = new SqlConnection(strConn))
            {
                var Query = "INSERT INTO Users (email, Pass, [role], userFio) VALUES(@email, @pass, @role, @userFio); SELECT CAST(SCOPE_IDENTITY() as int); ";
                int Id = db.Query<int>(Query, model).FirstOrDefault();
                model.Id = Id;
            }

            return model;
        }
    }
}
