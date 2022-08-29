using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ServerChat_ws_51.Models;
using Microsoft.AspNetCore.Authorization;

namespace ServerChat_ws_51.Controllers
{
    [Authorize]
    [Authorize(Roles = "админ")]
    public class UsersController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        public JsonResult GetData()
        {
            List<Users> list = UsersCrud.GetAll();
            return Json(list);
        }

        [HttpPost]
        public JsonResult Add(Users model)
        {
            model = UsersCrud.Add(model);
            return Json(model);
        }
        [HttpPost]
        public void Edit(Users model)
        {
            UsersCrud.Edit(model);
        }
        [HttpPost]
        public void Del(int Id)
        {
            UsersCrud.Del(Id);
        }
    }
}
