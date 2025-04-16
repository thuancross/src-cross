// Thêm favicon vào các trang
const links = `
    <link rel="apple-touch-icon" sizes="57x57" href="../../assest/favicon/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="../../assest/favicon/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="../../assest/favicon/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="../../assest/favicon/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="../../assest/favicon/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="../../assest/favicon/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="../../assest/favicon/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="../../assest/favicon/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="../../assest/favicon/apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192" href="../../assest/favicon/android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="../../assest/favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="../../assest/favicon/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="../../assest/favicon/favicon-16x16.png">
    <link rel="manifest" href="../../assest/favicon/manifest.json">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="../../assest/favicon/ms-icon-144x144.png">
    <meta name="theme-color" content="#ffffff">
`;
document.head.insertAdjacentHTML("beforeend", links);
console.log("hi");

// Thêm header vào HTML
(function () {
    // 1. Tạo header HTML
    const headerHTML = `
      <div class="header">
        <ul>
            <li><a href="#!">Trang chủ</a></li>
            <li>
                <a href="#!">Lịch học</a>
                <ul>
                    <li><a target="_blank" href="schedule-prf192.html">PRF192</a></li>
                    <li><a target="_blank" href="schedule-pro192.html">PRO192</a></li>
                    <li><a target="_blank" href="schedule-dbi202.html">DBI202</a></li>
                </ul>
            </li>
            <li>
                <a target="_blank" href="record-page.html">Record</a>
                <ul>
                    <li><a href="#!">PRF192</a>
                        <ul>
                            <li><a href="#!">Slot 1</a></li>
                            <li><a href="#!">Slot 2</a></li>
                            <li><a href="#!">Slot 3</a></li>
                            <li><a href="#!">Slot 4</a></li>
                            <li><a href="#!">Slot 5</a></li>
                        </ul>
                    </li>
                    <li><a href="#!">PRO192</a>
                        <ul>
                            <li><a href="#!">Slot 1</a></li>
                            <li><a href="#!">Slot 2</a></li>
                            <li><a href="#!">Slot 3</a></li>
                            <li><a href="#!">Slot 4</a></li>
                            <li><a href="#!">Slot 5</a></li>
                        </ul>
                    </li>
                    <li><a href="#!">DBI202</a>
                        <ul>
                            <li><a href="#!">Slot 1</a></li>
                            <li><a href="#!">Slot 2</a></li>
                            <li><a href="#!">Slot 3</a></li>
                            <li><a href="#!">Slot 4</a></li>
                            <li><a href="#!">Slot 5</a></li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li>
                <a href="#!">Tài liệu</a>
                <ul>
                    <li><a href="#!">PRF192</a></li>
                    <li><a href="#!">PRO192</a></li>
                    <li><a href="#!">DBI202</a></li>
                </ul>
            </li>
            <li>
                <a target="_blank" href="login.html">Đăng nhập</a>
            </li>
        </ul>
    </div>
    `;

    // 2. Chèn vào body đầu trang
    document.body.insertAdjacentHTML("afterbegin", headerHTML);
})();

const linkCSS = `
    <link rel="stylesheet" href="../../assest/css/style.css">
`;
document.body.insertAdjacentHTML("afterbegin", linkCSS);