using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ServerChat_ws_51.Models;
using System.Security.Claims;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;

namespace ServerChat_ws_51.Controllers
{
    public class AccountController : Controller
    {
        [HttpGet]
        public IActionResult Login()
        {
            return View();
        }
        [HttpPost("/token")]
        public IActionResult Token(string username, string password)
        {
            Users model = UsersCrud.Login(username, password);

            if (model == null)
            {
                return BadRequest(new { errorText = "Invalid username or password." });
            }
            else
            {
                List<Claim> claims = new List<Claim>
            {
                new Claim(ClaimsIdentity.DefaultNameClaimType, model.email),
                new Claim("UserFio", model.userFio),
                new Claim(ClaimsIdentity.DefaultRoleClaimType, model.role)
            };

                ClaimsIdentity identity =
                new ClaimsIdentity(claims, JwtBearerDefaults.AuthenticationScheme, ClaimsIdentity.DefaultNameClaimType, ClaimsIdentity.DefaultRoleClaimType);
                identity.Label = model.userFio;

                var now = DateTime.UtcNow;
                // создаем JWT-токен
                var jwt = new JwtSecurityToken(
                        issuer: AuthOptions.ISSUER,
                        audience: AuthOptions.AUDIENCE,
                        notBefore: now,
                        claims: identity.Claims,
                        expires: now.AddMinutes(1),
                        signingCredentials: new SigningCredentials(AuthOptions.GetSymmetricSecurityKey(), SecurityAlgorithms.HmacSha256));
                var encodedJwt = new JwtSecurityTokenHandler().WriteToken(jwt);


                var result = new
                {
                    User = model,
                    token = encodedJwt.ToString()
                };

                return Ok(result);
            }
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Login(LoginModel model)
        {

            if (ModelState.IsValid)
            {
                Users user = UsersCrud.Login(model.Email, model.Password);

                if (user != null)
                {
                    //await Authenticate(user); // аутентификация
                    ClaimsIdentity identity = GetIdentity(model.Email, model.Password);

                    var now = DateTime.UtcNow;
                    // создаем JWT-токен
                    var jwt = new JwtSecurityToken(
                            issuer: AuthOptions.ISSUER,
                            audience: AuthOptions.AUDIENCE,
                            notBefore: now,
                            claims: identity.Claims,
                            expires: now.AddMinutes(1),
                            signingCredentials: new SigningCredentials(AuthOptions.GetSymmetricSecurityKey(), SecurityAlgorithms.HmacSha256));
                    var encodedJwt = new JwtSecurityTokenHandler().WriteToken(jwt);

                    HttpContext.Response.Cookies.Append(AuthOptions.CookiesName, encodedJwt.ToString(),
                       new CookieOptions
                       {
                           MaxAge = TimeSpan.FromMinutes(1)
                       });

                    return RedirectToAction("Index", "Home");
                }
                ModelState.AddModelError("", "Некорректные логин и(или) пароль");
            }
            return View(model);
        }

        private ClaimsIdentity GetIdentity(string username, string password)
        {
            Users user = UsersCrud.Login(username, password);
            if (user != null)
            {
                List<Claim> claims = new List<Claim>
                {
                    new Claim(ClaimsIdentity.DefaultNameClaimType, user.email),
                    new Claim("UserFio", user.userFio),
                    new Claim(ClaimsIdentity.DefaultRoleClaimType, user.role)
                };

                ClaimsIdentity claimsIdentity =
                new ClaimsIdentity(claims, JwtBearerDefaults.AuthenticationScheme, ClaimsIdentity.DefaultNameClaimType, ClaimsIdentity.DefaultRoleClaimType);
                claimsIdentity.Label = user.userFio;
                return claimsIdentity;
            }

            return null;
        }
        public IActionResult Logout()
        {
            HttpContext.Response.Cookies.Delete(AuthOptions.CookiesName);
            return RedirectToAction("Login", "Account");
        }
        [HttpPost]
     //   [ValidateAntiForgeryToken]
        public IActionResult LogOff()
        {
            HttpContext.Response.Cookies.Delete(AuthOptions.CookiesName);
            return RedirectToAction("Index", "Home");
        }
    }
}
