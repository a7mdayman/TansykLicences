using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;


namespace DigNewWebService
{
    public class ObjPay
    {
        public double DaysLicence { get; set; }
        public int CountLicence { get; set; }
        public int CategoriesId { get; set; }
        public int WorkTypeId { get; set; }
        public int Days { get; set; }
        public double longway { get; set; }
        public int Type { get; set; }
    }
    public class LicencePay
    {
        //CategoriesId
        // خطوط انشائية 1 - توصيلات منزلية2
        // هل الراجع قيمة مقربة ؟ هل طول الطريق مقرب ؟ الحفر الافقي تصنيف ؟ غير مجهز
        //Type 1 = New - Type 2 = Renew
        public double GetPrice(ObjPay objPaj)
        {
            if (objPaj.WorkTypeId > 0 && objPaj.CategoriesId > 0)
            {
                if (objPaj.Type == 1) return PriceNewLicence(objPaj.CategoriesId, (DigEnumWorkType)objPaj.WorkTypeId, objPaj.Days, objPaj.longway);
                else return PriceRenewLicence(objPaj.DaysLicence, objPaj.CountLicence, objPaj.CategoriesId, objPaj.WorkTypeId, objPaj.Days, objPaj.longway);
            }
            return 0;
        }
        // عدد الرخص
        // عدد ايام الرخصة السابقة
        private double PriceRenewLicence(double DaysLicence, int CountLicence, int categoriesId, int workTypeId, int days, double longway)
        {
            double x = 0.01 * Math.Ceiling(DaysLicence / 2);
            if (CountLicence >= 2 && days <= x)
                // عدد الرخص * المعامل * الايام * الطول
                return 0.01 * GetFactor(categoriesId, (DigEnumWorkType)workTypeId) * days * Math.Pow(2, (CountLicence - 1)) * longway;
            return 0;
        }

        private double PriceNewLicence(int categoriesId, DigEnumWorkType workTypeId, int days, double longway)
        {
            return GetFactor(categoriesId, workTypeId) * (days * longway * 0.08);
        }
        private double GetFactor(int categoriesId, DigEnumWorkType workTypeId)
        {
            switch (workTypeId)
            {
                // ( كهرباء و مياه و صرف صحي و توصيلات حكومية)
                case (DigEnumWorkType.Electricity):
                case (DigEnumWorkType.Water):
                case (DigEnumWorkType.Sanitation):
                case (DigEnumWorkType.WslaGov):
                    ///  خطوط رئيسية
                    if (categoriesId == 1) return (0.08);
                    ///  توصيلات 
                    else return (0.20);
                // (اتصالات)
                case (DigEnumWorkType.Mobiles):
                case (DigEnumWorkType.Cameras):
                    ///  توصيلات  - خطوط رئيسية
                    return (0.20);
                // (درء اخطار سيول - تصريف مياه الامطار)
                case (DigEnumWorkType.Flood):
                case (DigEnumWorkType.RainOut):
                    return (0.08);
                // ( اعمال تطويرية - تركيب كاميرات - مواقف سيارات - لوحات دعائية - مطبات)
                case (DigEnumWorkType.Devolopment):
                case (DigEnumWorkType.Parking):
                case (DigEnumWorkType.Panels):
                case (DigEnumWorkType.Pitfalls):
                    return (0.04);
            }

            return 0;
        }
    }
}
