using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace ServerChat_ws_51
{
    public class Ut
    {
        public static string GetConnetString()
        {
            var builder = new ConfigurationBuilder().SetBasePath(Directory.GetCurrentDirectory()).AddJsonFile("appsettings.json");
            IConfiguration Configuration = builder.Build();
            return Configuration.GetConnectionString("SqlConnString");
        }
    }
}
