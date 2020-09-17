$(function () { $("body").slideDown("700")
    let x = `    <nav class="mb-1 navbar navbar-expand-lg navbar-dark default-color">
        <img src="../../../images/Logo.png" style="width:3%" />

        <a class="navbar-brand" href="#">
            امانة تبوك
        </a>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-333"
                aria-controls="navbarSupportedContent-333" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent-333">
            <ul class="navbar-nav mr-auto">

                <li class="nav-item ">
                    <a class="nav-link" href="#!">
                        الصفحة الرئيسية
                        <span class="sr-only">(current)</span>
                    </a>
                </li>
                <li class="nav-item dropdown active">
                    <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink-333" data-toggle="dropdown"
                       aria-haspopup="true" aria-expanded="false">
                        الجهات الخدمية
                    </a>
                    <div class="dropdown-menu dropdown-default" aria-labelledby="navbarDropdownMenuLink-333">
                        <a class="dropdown-item" href="#!">ادارة الجهات</a>
                    </div>
                </li>
            </ul>

            <ul class="navbar-nav ml-auto nav-flex-icons">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink-333" data-toggle="dropdown"
                       aria-haspopup="true" aria-expanded="false">
                        مرحبا /<span id="EmployeeIntr" class="user-name">
                            -
                        </span>
                        <i class="fas fa-user"></i>
                    </a>
                    <div class="dropdown-menu dropdown-menu-right dropdown-default"
                         aria-labelledby="navbarDropdownMenuLink-333">
                        <!--<a class="dropdown-item SignIn" href="#" data-toggle="modal" data-target="#sideModalTR">تسجيل دخول</a>-->
                        <a class="dropdown-item SignOut" href="#">تسجيل خروج</a>
                    </div>
                </li>
            </ul>
        </div>
    </nav>`;
    $(".page-wrapper").append(x);
    let tables=` <div class="Dnone">
    <div class=" card card-cascade narrower wow animate__backInUp" data-wow-duration="1s" data-wow-offset="50">
        <div class="view view-cascade gradient-card-header blue-gradient narrower py-2 mx-4 mb-3 d-flex justify-content-between align-items-center text-center">
            <a href="#!" class="white-text mx-3">
                متابعة محاضر المعاينة المفتوحة
                <span class="DateReport"></span>
            </a>
        </div>
        <div class="px-4">
            <div class="table-wrapper">
                <table id="InvestorsTab" class=" table table-sm table-responsive-sm table-hover" style="width: 100%">
                    <thead class="thead-dark">
                        <tr>
                            <th>التوجيه</th>
                            <th>طباعة</th>
                            <th>الجهة</th>
                            <th>المقاول</th>
                            <th>الحي</th>
                            <th>تاريخ</th>
                            <th>الحالة</th>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
    </div>
</div>`;
})