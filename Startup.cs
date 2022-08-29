using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using ServerChat_ws_51.Socket2;
//using ServerChat_ws_51.SocketManagers;

using System.Globalization;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.CookiePolicy;
using Microsoft.AspNetCore.Http;
using Microsoft.IdentityModel.Tokens;

namespace ServerChat_ws_51
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
            .AddJwtBearer(options =>
            {
            options.RequireHttpsMetadata = false;
            options.TokenValidationParameters = new TokenValidationParameters
            {
                            // укзывает, будет ли валидироваться издатель при валидации токена
                ValidateIssuer = true,
                            // строка, представляющая издателя
                ValidIssuer = AuthOptions.ISSUER,

                            // будет ли валидироваться потребитель токена
                ValidateAudience = true,
                            // установка потребителя токена
                ValidAudience = AuthOptions.AUDIENCE,
                            // будет ли валидироваться время существования
                ValidateLifetime = true,

                            // установка ключа безопасности
                IssuerSigningKey = AuthOptions.GetSymmetricSecurityKey(),
                            // валидация ключа безопасности
                ValidateIssuerSigningKey = true,
            };
            });

            services.AddControllersWithViews();
            services.AddWebSocketManager();//  !!!!!!!!!!!!!!
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env, IServiceProvider serviceProvider)
        {
            CultureInfo cultureInfo = new CultureInfo("ru-RU");
            CultureInfo.DefaultThreadCurrentCulture = cultureInfo;
            CultureInfo.DefaultThreadCurrentUICulture = cultureInfo;

            app.UseRequestLocalization();

            app.Use(async (context, next) =>
            {
                var token = context.Request.Cookies[AuthOptions.CookiesName];

                if (!string.IsNullOrEmpty(token))
                {
                    context.Request.Headers.Add("Authorization", "Bearer " + token);
                }

                await next.Invoke();
            });

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
                app.UseHsts();
            }

            // подключаем CORS
            app.UseCors(builder => builder.AllowAnyOrigin());

            //-----------------------------------------------------------
            app.UseWebSockets();
            app.MapSockets("/ws", serviceProvider.GetService<WebSocketHandler2>());
            //-----------------------------------------------------------

            app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseDefaultFiles();

            app.UseRouting();

            app.UseAuthorization();
            app.UseAuthentication();

            app.UseCookiePolicy(new CookiePolicyOptions
            {
                MinimumSameSitePolicy = SameSiteMode.Strict,
                HttpOnly = HttpOnlyPolicy.Always,
                Secure = CookieSecurePolicy.Always
            });

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller=Home}/{action=Index}/{id?}");
            });
        }
    }
}
