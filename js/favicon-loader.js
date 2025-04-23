// Thêm favicon vào các trang
const links = `
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
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
            <li><a href="index.html">Trang chủ</a></li>
            <li>
                <a href="#!">Phòng học</a>
                <ul>
                    <li><a target="_blank" class="has-link" href="https://teams.microsoft.com/dl/launcher/launcher.html?url=%2F_%23%2Fl%2Fmeetup-join%2F19%3Ameeting_Zjg4OGM4ZjQtMDJjZC00NmU5LWIxNDItYmE1YjkwNzBjMTI4%40thread.v2%2F0%3Fcontext%3D%257b%2522Tid%2522%253a%2522447080b4-b9c6-4b0b-92fd-b543a68b4e97%2522%252c%2522Oid%2522%253a%2522eeaec1aa-871c-47f6-b925-4155ef07483a%2522%257d%26anon%3Dtrue&type=meetup-join&deeplinkId=ff4687e4-bee3-4951-b2fe-c8d77d468047&directDl=true&msLaunch=true&enableMobilePage=true&suppressPrompt=true">PRF192</a></li>
                    <li><a href="#!">PRO192</a></li>
                    <li><a href="#!">DBI202</a></li>
                </ul>
            </li>
            <li>
                <a href="#!">Record</a>
                <ul>
                    <li><a class="has-link" href="#!">PRF192</a>
                        <ul>
                            <li><a class="has-link" target="_blank" href="https://youtu.be/JvjxLGX6ozA">Slot 1</a></li>
                            <li><a class="has-link" href="https://youtu.be/JK91YAhPGS4" target="_blank">Slot 2</a></li>
                            <li><a class="has-link" href="https://youtu.be/vQOur0x77eo">Slot 3</a></li>
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
                    <li><a class="has-link" target="_blank" href="https://drive.google.com/drive/folders/1vO8DlbflvlfEtLMJxv1ZnucQaYNCAAbM?usp=sharing">PRF192</a></li>
                    <li><a href="#!">PRO192</a></li>
                    <li><a href="#!">DBI202</a></li>
                </ul>
            </li>
            <li>
                <a href="login.html">Đăng nhập</a>
            </li>
            <li>
                <a target="_blank" href="https://forms.gle/VetBD48oXpFq7H3dA">Đăng ký học</a>
            </li>
        </ul>
    </div>
    `;

    // 2. Chèn vào body đầu trang
    document.body.insertAdjacentHTML("afterbegin", headerHTML);
})();

const linkCSS = `
    <link rel="stylesheet" href="./assest/css/style.css">
`;
document.body.insertAdjacentHTML("afterbegin", linkCSS);