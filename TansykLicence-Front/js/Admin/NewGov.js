$(function () {
  let EmployeeName = "م ناصر";
  $(".user-name").text(EmployeeName);

  let InsertVovInfo = (arr) => {
    $.ajax({
      type: "POST",
      dataType: "json",
      contentType: "application/json; charset=utf-8",
      url: "../../AlertEmp.asmx/PostAlertEmp",
      data: JSON.stringify({ Info: arr }),
      success: function (InsertDatas) {
        CallModel("تم ادراج الجهة بنجاح");
      },
    });
  };

  let CallModel = (Massage) => {
    let result = Massage;
    document.getElementById("statuslicense").innerHTML = result;
    $("#CloseAndCanselModel").modal("show");
  };
  $(".FilePdf").on("change", function (event) {
    var file = event.target.files[0];
    if (file.size >= 3 * 1024 * 1024) {
      $(this).val("");
      alert("PDF File of maximum 3MB");
      return;
    }
    if (file.type != "application/pdf") {
      alert("only pdf files");
      $(this).val("");
      return;
    }
  });
  $("#InsertBtn").click(function () {
    let GovName = $("#GovName").val().trim();
    let DelegateName = $("#DelegateName").val();
    let DelegateId = $("#DelegateId").val();
    let DelegateMob = $("#DelegateMob").val();
    let NumPaper = $("#NumPaper").val();
    var FilesReport = new FormData();
    var PicFile = $("#PaperPic").get(0).files;
    if (GovName == "" && GovName.length < 2) CallModel("ادخل اسم الجهة !!");
    else if (DelegateName == "") CallModel("ادخل اسم المندوب  !!");
    else if (DelegateId == "") CallModel("ادخل سجل المندوب  !!");
    else if (DelegateMob == "") CallModel("ادخل جوال المندوب  !!");
    else if (NumPaper == "") CallModel("ادخل رقم الخطاب   !!");
    else if (PicFile.length <= 0) CallModel("يجب ارفاق صورة الخطاب ");
    else {
      $("#InsertBtn").prop("disabled", true);
      FilesReport.append("Pic", PicFile[0]);
      let arr = {};

      $.ajax({
        type: "POST",
        contentType: false,
        processData: false,
        url: "#",
        data: FilesReport,
        success: function (response) {
          InsertVovInfo(arr);
        },
      });
    }
  });
});
