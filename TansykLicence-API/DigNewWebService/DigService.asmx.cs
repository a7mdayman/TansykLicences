using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Script.Serialization;
using System.Web.Script.Services;
using System.Web.Services;

namespace DigNewWebService
{
    /// <summary>
    /// Summary description for DigService
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    [System.Web.Script.Services.ScriptService]
    public class DigService : System.Web.Services.WebService
    {

        //[WebMethod]
        //public double GetPrice(ObjPay objPaj)
        //{
        //    LicencePay lp = new LicencePay();
        //    return lp.GetPrice(objPaj);
        //}


        [WebMethod]
        public double GetPrice(double OldLicenceDays, int CountLicence,  int CategoriesId, int WorkTypeId, int Days, double longway, int Type)
        {

            LicencePay lp = new LicencePay();

            ObjPay objPaj = new ObjPay
            {
                CategoriesId = CategoriesId,
                CountLicence = CountLicence,
                Days = Days,
                DaysLicence = OldLicenceDays,
                longway = longway,
                Type = Type,
                WorkTypeId = WorkTypeId
            };



            return lp.GetPrice(objPaj);
        }
    }
}
