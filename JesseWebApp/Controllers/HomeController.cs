using JesseWebApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace JesseWebApp.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public JsonResult GetProducts()
        {
            ProductEntities p = new ProductEntities();
            var result = p.Products.ToList();
            return Json(result, JsonRequestBehavior.AllowGet);
        }
    }
}