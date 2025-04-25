var headerList = [
  {
    name: "Trang chủ",
    leftMenuHeader: "Menu",
    leftMenuList: [
      { label: "Thông tin khai giảng", href: "classInfo" },
      { label: "Thông tin Seminar", href: "seminar" },
      { label: "Thông tin công ty quan tâm", href: "company" },
    ],
    containerId: "courseInfo",
  },
  {
    name: "Thông tin môn học",
    leftMenuHeader: "Thông tin môn học",
    leftMenuList: [
      { label: "Mô tả tóm tắt học phần (tiếng Việt) (*)", href: "summaryVN" },
      { label: "Mô tả tóm tắt học phần (tiếng Anh) (*)", href: "summaryEN" },
      { label: "Nội dung tóm tắt học phần (tiếng Việt) (*)", href: "contentVN" },
      { label: "Nội dung tóm tắt học phần (tiếng Anh) (*)", href: "contentEN" },
      { label: "Sách tham khảo", href: "reference" },
    ],
    containerId: "info",
  },
  {
    name: "Các công nghệ web",
    leftMenuHeader: "Công nghệ Web",
    leftMenuList: [
      { label: "1. Frontend (Giao diện người dùng)", href: "frontend" },
      { label: "2. Backend (Máy chủ và xử lý dữ liệu)", href: "backend" },
      { label: "3. Cơ sở dữ liệu", href: "database" },
      { label: "4. API và Tích hợp dịch vụ", href: "api" },
      { label: "5. DevOps và Triển khai", href: "devops" },
      { label: "6. Bảo mật", href: "security" },
      { label: "7. Testing và Debugging", href: "testing" },
      { label: "8. Performance Optimization", href: "optimization" },
      { label: "9. User Authentication & Authorization", href: "authentication" },
    ],
    containerId: "web-tech",
  },
  {
    name: "Thông tin sinh viên",
    leftMenuHeader: "Thông tin sinh viên",
    leftMenuList: [
      { label: "Curriculum vitae (CV)", href: "CV" },
      { label: "Các dự án đã tham gia", href: "projects" },
      { label: "Sinh hoạt cộng đồng", href: "community" },
    ],
    containerId: "student-info",
  },
  {
    name: "Admin page",
    leftMenuList: [],
    containerId: "admin-page",
  },
];

var subItem = [
  { name: "Thông tin khai giảng", item: ["title1", "title2"] },
  { name: "Thông tin Seminar", item: ["title1", "title2"] },
  { name: "Thông tin công ty quan tâm", item: ["title1", "nameCompany", "introCompany", "Ảnh FPT"] },
  { name: "Mô tả tóm tắt học phần (tiếng Việt) (*)", item: ["title1"] },
  { name: "Mô tả tóm tắt học phần (tiếng Anh) (*)", item: ["title1"] },
  { name: "Nội dung tóm tắt học phần (tiếng Việt) (*)", item: ["title1"] },
  { name: "Nội dung tóm tắt học phần (tiếng Anh) (*)", item: ["title1"] },
  { name: "Sách tham khảo", item: ["title1", "image1"] },
  { name: "1. Frontend (Giao diện người dùng)", item: ["title1", "title2"] },
  { name: "2. Backend (Máy chủ và xử lý dữ liệu)", item: ["title1"] },
  { name: "3. Cơ sở dữ liệu", item: ["title1"] },
  { name: "4. API và Tích hợp dịch vụ", item: ["title1"] },
  { name: "5. DevOps và Triển khai", item: ["title1",] },
  { name: "6. Bảo mật", item: ["title1"] },
  { name: "7. Testing và Debugging", item: ["title1"] },
  { name: "8. Performance Optimization", item: ["title1"] },
  { name: "9. User Authentication & Authorization", item: ["title1", "title2"] },
  { name: "Curriculum vitae (CV)", item: ["title", "image", "information"]},
  { name: "Các dự án đã tham gia", item: ["title", "content"] },
  { name: "Sinh hoạt cộng đồng", item: ["title", "content"] },
];

var subSubItem = [
  { parentName: "Thông tin khai giảng", name: "title1", content: "<h2><strong>Lịch Khai Giảng</strong></h2>", startCol: 1, endCol: 12, startRow: 1, endRow: 1 },
  { parentName: "Thông tin khai giảng", name: "title2", 
    content: `
      <div id="classInfo">
          <div class="section-header">Thông tin khai giảng</div>
          <table class="table-info">
            <tr>
              <th>Thứ</th>
              <td>Thứ 4</td>
            </tr>
            <tr>
              <th>Thời gian/Tiết</th>
              <td>Từ 3 đến 6</td>
            </tr>
            <tr>
              <th>Ngày/Tuần</th>
              <td>24-31,33-41</td>
            </tr>
            <tr>
              <th>Tại địa điểm</th>
              <td>TC-312</td>
            </tr>
          </table>
        </div>
    `,
    startCol: 1, endCol: 12, startRow: 2, endRow: 5
  },
  { parentName: "Thông tin Seminar", name: "title1", content: "<h2><strong>Một số thông tin về Seminar 2024.2</strong></h2>", startCol: 1, endCol: 12, startRow: 1, endRow: 1 },
  { parentName: "Thông tin Seminar", name: "title2", content: `
        <div id="seminar">
          <div class="section-header" style="margin-top: 20px;">Thông tin seminar</div>
          <table class="table-info">
            <tr>
              <th>Mã lớp</th>
              <td>157543</td>
            </tr>
            <tr>
              <th>Loại hình</th>
              <td>LT+BT</td>
            </tr>
            <tr>
              <th>Hệ</th>
              <td>Cử nhân</td>
            </tr>
            <tr>
              <th>GVHD</th>
              <td>Phạm Huy Hoàng</td>
            </tr>
            <tr>
              <th>Số lần vắng</th>
              <td>0</td>
            </tr>
            <tr>
              <th>Số sinh viên</th>
              <td>112</td>
            </tr>
            <tr>
              <th>Hình thức GD</th>
              <td>Offline</td>
            </tr>
          </table>
        </div>`, startCol: 1, endCol: 12, startRow: 2, endRow: 7 },
  { parentName: "Thông tin công ty quan tâm", name: "title1", content: `<h2><strong>Thông tin công ty quan tâm</strong></h2>`, startCol: 1, endCol: 12, startRow: 1, endRow: 1 },
  { parentName: "Thông tin công ty quan tâm", name: "nameCompany", content: `<h3><strong>FPT Software</strong></h3>`, startCol: 1, endCol: 6, startRow: 2, endRow: 2},
  { parentName: "Thông tin công ty quan tâm", name: "introCompany", content: `<p><span style="background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);">FPT Software là tên gọi khác của công ty TNHH Phần Mềm FPT với nhiệm vụ chính là gia công phần mềm tại Việt Nam và nước ngoài. Thành lập từ năm 1988 đến nay với 3 Trụ sở chính FPT Software đặt tại Việt Nam và một số nước trên toàn thế giới như Hoa Kỳ, Nhật Bản, Malaysia, Đức, Úc, Singapore, Malaysia, Thái Lan và Philipines hiện FPT Software đáp ứng nhu cầu gia công phần mềm lớn cho hơn 150 công ty hàng đầu tại 20 quốc gia lớn nhất trên thế giới hiện nay với các hợp đồng lớn có khi đạt cả 1 triệu USD dành cho một số đối tác lớn như Hitachi, NEOPOST, Petronas, Deutsche Bank, và Unilever với hơn 4000 nhân viên trên toàn thế giới.</span></p><p><span style="background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);">FPT Software theo đuổi mục tiêu gia công phần mềm để đáp ứng cho nhu cầu phát triển CNTT của các hãng phần mềm trong nước, các công ty lớn trong nước và tham vọng hơn là xuất khẩu phần mềm trên toàn thế giới cho các công ty nước ngoài biết đến tập đoàn FPT, mục đích chính là vươn đến tầm cao mới thông qua công nghệ nhằm nâng cao năng suất lao động.</span></p><p><span style="background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);">Kinh doanh của FPT Software xuất phát từ Công nghệ thông tin và Viễn Thông FPT là cốt lõi để đáp ứng cho khách hàng trên 63 tỉnh thành trên toàn lãnh thổ Việt Nam và mở rộng đến khách hàng toàn cầu. Từ khi được thành lập cho đến nay, FPT Software đã là công ty phần mềm số 1 tại Việt Nam trong lĩnh vực tích hợp hệ thống, phân phối và bán lẻ, dịch vụ Công Nghệ Thông tin, xuất khẩu gia công phần mềm, bán lẻ sản phẩm CNTT. Ở lĩnh vực Viễn Thông FPT là một trong 3 nhà cung cấp dịch vụ internet cáp quang FPT hàng đầu tại Việt Nam. Về lĩnh vực quảng cáo, FPT là đơn vị quảng cáo trực tuyến số 1 tại Việt Nam với trang báo điện tử VNexpress với hơn 42 triệu lượt truy cập mỗi ngày.</span></p>`, startCol: 1, endCol: 6, startRow: 3, endRow: 12 },
  { parentName: "Thông tin công ty quan tâm", name: "Ảnh FPT", content: `<img class="DRB" src="http://itde.hvnh.edu.vn/public/img/news/files/FPT%20tuy%E1%BB%83n%20d%E1%BB%A5ng%20(2).jpg" style="width: 100%;" />`, startRow: 2, endRow: 14, startCol: 7, endCol: 12 },
  { parentName: "Mô tả tóm tắt học phần (tiếng Việt) (*)", name: "title1", content: `<p><h2 style="font-weight:bold">Mô tả tóm tắt học phần (tiếng Việt)</h2><strong style="background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);">Mục tiêu:&nbsp;</strong><span style="background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);">Học phần cung cấp các kiến thức cần thiết để xây dựng và phát triển các ứng dụng, dịch vụ trực tuyến trên môi trường web. Sau khi học xong học phần này, sinh viên có khả năng:</span></p><ol><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span><span style="background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);">Có thể sử dụng một ngôn ngữ lập trình như JSP, PHP để phát triển ứng dụng web cho các lĩnh vực khác nhau như: hệ quản trị nội dung (CMS), cổng thông tin (Portal), hay các ứng dụng điện tử (eCommerce, eLearning, eGoverment,…)</span></li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span><span style="background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);">Nắm vững được các công nghệ web, các platform, framework hiện đang thịnh hành.</span></li></ol><p><span style="background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);">Ngoài ra học phần cũng cung cấp cho sinh viên các kỹ năng làm việc nhóm, thuyết trình và thái độ cần thiết để làm việc và ứng dụng các kỹ thuật trong các dự án, công ty về phần mềm sau này.</span></p>`, 
    startCol: 1, endCol: 12, startRow: 1, endRow: 5},
  { parentName: "Mô tả tóm tắt học phần (tiếng Anh) (*)", name: "title1", content: `<h2><strong>Mô tả tóm tắt học phần (tiếng Anh)</strong></h2><p><strong style="background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);">Objectives:</strong><span style="background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);">&nbsp;The course provides students with the necessary knowledge to build and develop online applications and services on the web environment. After completing this couse, students are able to:</span></p><ol><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span><span style="background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);">Use a programming language such as JSP, PHP to develop web applications for different areas such as content management system (CMS), portal, or online applications (eCommerce, eLearning, eGoverment, ...)</span></li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span><span style="background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);">Understand the popular web technologies, platforms, frameworks.</span></li></ol><p><span style="background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);">In addition, the course also provides students with skills of teamwork and presentation, and attitudes needed to work and apply the techniques in software projects and companies in the future.</span></p>`, 
    startCol: 1, endCol: 12, startRow: 1, endRow: 4 },
  { parentName: "Nội dung tóm tắt học phần (tiếng Việt) (*)", name: "title1", content: `<div><h2><strong>Nội dung tóm tắt của học phần (tiếng Việt)</strong></h2><p><span style="background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);">Internet, web, kiến trúc ứng dụng web,&nbsp;HTML, CSS, Javascript, PHP, JSP, Ajax, DOM, XML, SOA, An toàn bảo mật web, v.v.</span></p></div>`, 
    startCol: 1, endCol: 12, startRow: 1, endRow: 2 },
  { parentName: "Nội dung tóm tắt học phần (tiếng Anh) (*)", name: "title1", content: `<div><h2><strong>Nội dung tóm tắt của học phần (tiếng Anh)</strong></h2><p><span style="background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);">Internet, web, architecture of web application,&nbsp;HTML, CSS, Javascript, PHP, JSP, Ajax, DOM, XML, SOA,&nbsp;website security, etc.</span></p><p><br></p></div>`,
    startCol: 1, endCol: 12, startRow: 1, endRow: 2 },
  { parentName: "Sách tham khảo", name: "title1", content: `<h2><strong style="background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);">Sách tham khảo</strong></h2><p><span style="background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);">Sách Web Technologies: HTML, Javascript, PHP, Java, Jsp, XML and Ajax, Black Book</span></p>`, startCol: 1, endCol: 12, startRow: 1, endRow: 2 },
  { parentName: "Sách tham khảo", name: "image1", content: `<a href="https://www.amazon.com/Web-Technologies-HTML-Javascript-Black/dp/8177229974" target="_blank" style="flex: 1;margin-top: 20px;">
                          <img 
                            src="https://m.media-amazon.com/images/I/71t58FV+qFL._SY466_.jpg" 
                            style="width: 100%; height: 100%; object-fit: contain;">
                        </div>
                      </a>`, startCol: 1, endCol: 12, startRow: 3, endRow: 10 },
  { parentName: "1. Frontend (Giao diện người dùng)", name: "title1", content: 
    `<h2><strong>1. Frontend (Giao diện người dùng)</strong></h2>
    <ul>
        <li><strong>HTML, CSS, JavaScript</strong>: Các công nghệ cơ bản để xây dựng cấu trúc và giao diện người dùng.</li>
        <li><strong>ReactJS</strong>: Thư viện JavaScript để xây dựng giao diện người dùng động.</li>
        <li><strong>Angular</strong>: Framework JavaScript mạnh mẽ cho các ứng dụng Web quy mô lớn.</li>
        <li><strong>Vue.js</strong>: Framework linh hoạt giúp phát triển giao diện người dùng hiệu quả.</li>
        <li><strong>CSS Preprocessors (SASS, LESS)</strong>: Giúp cải thiện mã CSS với các tính năng như biến và hàm.</li>
        <li><strong>Responsive Design</strong>: Thiết kế giao diện phù hợp với mọi kích thước màn hình (sử dụng Bootstrap, Tailwind CSS).</li>
      </ul>`, startCol: 1, endCol: 12, startRow: 1, endRow: 4
  },
  { parentName: "2. Backend (Máy chủ và xử lý dữ liệu)", name: "title1", content: 
    `<h2><strong>2. Backend (Máy chủ và xử lý dữ liệu)</strong></h2>
      <ul>
        <li><strong>Node.js</strong>: Môi trường runtime JavaScript hiệu quả cho ứng dụng Web.</li>
        <li><strong>Express.js</strong>: Framework giúp xây dựng API và xử lý các yêu cầu HTTP nhanh chóng.</li>
        <li><strong>Django (Python)</strong>: Framework Python phù hợp cho các ứng dụng Web cần bảo mật cao.</li>
        <li><strong>Ruby on Rails</strong>: Framework giúp phát triển ứng dụng Web nhanh chóng và dễ dàng bảo trì.
        </li>
        <li><strong>Java Spring Boot</strong>: Framework mạnh mẽ cho ứng dụng Web Java với khả năng mở rộng cao.
        </li>
      </ul> 
    `, startCol: 1, endCol: 12, startRow: 1, endRow: 4},
    { parentName: "3. Cơ sở dữ liệu", name: "title1", content: 
      `<h3>3. Cơ sở dữ liệu</h3>
        <ul>
          <li><strong>MySQL</strong>: Cơ sở dữ liệu quan hệ phổ biến.</li>
          <li><strong>PostgreSQL</strong>: Cơ sở dữ liệu mạnh mẽ hỗ trợ truy vấn phức tạp.</li>
          <li><strong>MongoDB</strong>: Cơ sở dữ liệu NoSQL linh hoạt cho dữ liệu phi cấu trúc.</li>
          <li><strong>Cassandra</strong>: Cơ sở dữ liệu NoSQL phân tán phù hợp cho dữ liệu lớn.</li>
        </ul>`, startCol: 1, endCol: 12, startRow: 1, endRow: 3 },
  { parentName: "4. API và Tích hợp dịch vụ", name: "title1", content: 
      `<h3>4. API và Tích hợp dịch vụ</h3>
        <ul>
          <li><strong>RESTful APIs</strong>: Phương thức phổ biến để giao tiếp giữa các hệ thống qua HTTP.</li>
          <li><strong>GraphQL</strong>: Công nghệ API mạnh mẽ giúp lấy dữ liệu theo yêu cầu.</li>
          <li><strong>WebSockets</strong>: Giải pháp cho các ứng dụng thời gian thực.</li>
        </ul>`, startCol: 1, endCol: 12, startRow: 1, endRow: 3},
  { parentName: "5. DevOps và Triển khai", name: "title1", content: 
      `<h3>5. DevOps và Triển khai</h3>
        <ul>
          <li><strong>Docker</strong>: Giải pháp đóng gói ứng dụng và môi trường vào container.</li>
          <li><strong>CI/CD</strong>: Tự động hóa quy trình kiểm thử và triển khai (Jenkins, GitLab CI, GitHub
            Actions).
          </li>
          <li><strong>AWS, Azure, Google Cloud</strong>: Các dịch vụ đám mây linh hoạt cho phát triển và triển khai
            ứng
            dụng Web.</li>
        </ul>`, startCol: 1, endCol: 12, startRow: 1, endRow: 3 },
  { parentName: "6. Bảo mật", name: "title1", content: 
      `<h3>6. Bảo mật</h3>
        <ul>
          <li><strong>OAuth2 & JWT</strong>: Cơ chế xác thực và phân quyền người dùng an toàn.</li>
          <li><strong>HTTPS</strong>: Đảm bảo giao tiếp an toàn qua mã hóa SSL/TLS.</li>
          <li><strong>Helmet.js</strong>: Thư viện Node.js tăng cường bảo mật HTTP header.</li>
        </ul>`, startCol: 1, endCol: 12, startRow: 1, endRow: 3 },

  { parentName: "7. Testing và Debugging", name: "title1", content: 
      `<h3>7. Testing và Debugging</h3>
        <ul>
          <li><strong>Jest</strong>: Công cụ kiểm thử JavaScript, thường dùng với React và Node.js.</li>
          <li><strong>Mocha & Chai</strong>: Framework kiểm thử cho Node.js.</li>
          <li><strong>Cypress</strong>: Công cụ kiểm thử tích hợp mạnh mẽ cho các ứng dụng Web.</li>
          <li><strong>Postman</strong>: Công cụ kiểm thử API và làm việc với RESTful API.</li>
        </ul>`, startCol: 1, endCol: 12, startRow: 1, endRow: 3 },
  { parentName: "8. Performance Optimization", name: "title1", content: 
      `          <h3>8. Performance Optimization</h3>
        <ul>
          <li><strong>Lazy Loading</strong>: Tải tài nguyên theo yêu cầu để cải thiện tốc độ tải trang.</li>
          <li><strong>CDN (Content Delivery Network)</strong>: Mạng phân phối nội dung giúp giảm độ trễ và cải thiện
            tốc
            độ.</li>
          <li><strong>Caching</strong>: Sử dụng Redis hoặc Memcached để lưu trữ dữ liệu tạm thời và giảm tải cho
            server.
          </li>
        </ul>`, startCol: 1, endCol: 12, startRow: 1, endRow: 2},
  { parentName: "9. User Authentication & Authorization", name: "title1", content: 
      `          <h3>9. User Authentication & Authorization</h3>
        <ul>
          <li><strong>Firebase Authentication</strong>: Dịch vụ đăng nhập thông qua Google, Facebook, email/password.
          </li>
          <li><strong>Auth0</strong>: Dịch vụ bảo mật giúp quản lý xác thực và phân quyền người dùng dễ dàng.</li>
        </ul>`, startCol: 1, endCol: 12, startRow: 1, endRow: 2},
  {parentName: "Curriculum vitae (CV)", name: "title", content: `<h2><strong>Thông tin cá nhân</strong></h2>`, startCol: 1, endCol: 12, startRow: 1, endRow: 1},
  {parentName: "Curriculum vitae (CV)", name: "image", content: `<img src="./assets/ava.jpg" alt="Student Photo" style="width: 100%; height: 100%; object-fit:contain">`, startCol: 1, endCol: 5, startRow: 2, endRow: 6},
  {parentName: "Curriculum vitae (CV)", name: "information", content: `
    <div class="details"><span>Họ và tên: </span> Nguyễn Duy Khánh</div>
    <div class="details"><span>Năm vào trường: </span> 2022</div>
    <div class="details"><span>Bậc đào tạo: </span> Cử Nhân </div>
    <div class="details"><span>Chương trình: </span>Khoa học máy tính 2022</div>
    <div class="details"><span>MSSV: </span> 20225019 </div>
    <div class="details"><span>Giới tính: </span> Nam</div>
    <div class="details"><span>Lớp: </span> Khoa học máy tính 07 - K67 </div>
    <div class="details"><span>Khóa học: </span> 67</div>
    <div class="details"><span>Email: </span> Khanh.ND225019@sis.hust.edu.vn</div>
  `, startCol: 6, endCol: 12, startRow: 2, endRow: 6},
  {parentName: "Các dự án đã tham gia", name: "title", content: `<h2><strong>Các dự án đã tham gia</strong></h2>`, startCol: 1, endCol: 12, startRow: 1, endRow: 1},
  {parentName: "Các dự án đã tham gia", name: "content", content: `
    <div id="projects-info" class="projects-info">
      <div class="section-header" style="text-align: center;"><span style="text-decoration: underline;"><strong>c&aacute;c dự &aacute;n đ&atilde; tham gia từ năm 2022</strong></span></div>
      <div class="project">
        <table class="table-info">
          <tbody>
            <tr>
              <th>Ứng dụng Quản l&yacute; D&acirc;n số</th>
              <td>Nh&oacute;m 4 người <br>Nhiệm vụ: Thiết kế giao diện người d&ugrave;ng, ph&aacute;t triển c&aacute;c t&iacute;nh năng front-end <br>C&ocirc;ng nghệ sử dụng: Java, MySQL <br>Mục ti&ecirc;u: Tạo giao diện người d&ugrave;ng cho hệ thống</td>
            </tr>
            <tr>
              <th>Hệ thống quản l&yacute; tuyển sinh</th>
              <td>Nh&oacute;m 4 người <br>Nhiệm vụ: Ph&aacute;t triển front-end <br>C&ocirc;ng nghệ sử dụng: HTML, CSS, JavaScript, MySQL, PHP <br>Mục ti&ecirc;u: Tạo giao diện người d&ugrave;ng cho hệ thống</td>
            </tr>
            <tr>
              <th>Hệ thống đ&aacute;nh gi&aacute; dịch vụ sản phẩm</th>
              <td>C&aacute; nh&acirc;n <br>C&ocirc;ng nghệ sử dụng: HTML, CSS, JavaScript, MySQL, NodeJS, React</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `, startCol: 1, endCol: 12, startRow: 2, endRow: 7},
  {parentName: "Sinh hoạt cộng đồng", name: "title", content: `<h2><strong>Sinh hoạt cộng đồng</strong></h2>`, startCol: 1, endCol: 12, startRow: 1, endRow: 1},
  {parentName: "Sinh hoạt cộng đồng", name: "content", content: `
    <div class="section-header" style="text-align: center;"><span><strong>C&aacute;c hoạt động cộng đồng đ&atilde; tham gia</strong></span></div>
      <ul>
        <li><strong>10/2022: </strong>Tham gia hoạt động "Cốc tr&agrave; đ&aacute; v&igrave; cộng đồng"</li>
        <li><strong>5/2020: </strong>Tham gia chiến dịch t&igrave;nh nguyện "Hoa phượng đỏ"</li>
      </ul>
    `,  startCol: 1, endCol: 12, startRow: 2, endRow: 4}
];

// Initialize DOM elements inside window.onload with a slight delay
window.onload = function () {
  setTimeout(() => {
    // Initialize DOM elements
    var mySidebar = document.getElementById("mySidebar");
    var overlayBg = document.getElementById("myOverlay");
    var editing = false;

    if (!mySidebar || !overlayBg) {
      console.error("Failed to initialize DOM elements:", {
        mySidebar: mySidebar,
        overlayBg: overlayBg
      });
      return;
    }

    // Toggle between showing and hiding the sidebar, and add overlay effect
    window.w3_open = function () {
      if (mySidebar.style.display === 'block') {
        mySidebar.style.display = 'none';
        overlayBg.style.display = "none";
      } else {
        mySidebar.style.display = 'block';
        overlayBg.style.display = "block";
      }
    };

    // Close the sidebar with the close button
    window.w3_close = function () {
      mySidebar.style.display = "none";
      overlayBg.style.display = "none";
    };

    // Function to dynamically render the main content based on subItem and subSubItem
    function renderMainContent(header) {
      const container = document.getElementById(header.containerId);
      if (!container) {
        console.error(`Container with ID ${header.containerId} not found.`);
        return;
      }

      // Clear the existing content in the container
      container.innerHTML = '';

      // Special case for "admin-page" (no dynamic content rendering needed)
      if (header.containerId === "admin-page") {
        // Admin page will handle its own rendering via renderTopMenuTable
        return;
      }

      // Render each subsection (e.g., "Thông tin khai giảng", "Thông tin Seminar")
      header.leftMenuList.forEach((menuItem) => {
        const section = document.createElement("div");
        section.id = menuItem.href;
        section.classList.add("w3-container");

        const contents = subItem.find(e => e.name === menuItem.label)?.item || [];
        if (!contents.length) {
          section.innerHTML = `<h2>${menuItem.label}</h2><p>Chưa có nội dung.</p>`;
          container.appendChild(section);
          return;
        }

        // Determine the maximum row needed for the grid
        const maxRow = Math.max(
          ...contents.map(title => {
            const info = subSubItem.find(item => item.parentName === menuItem.label && item.name === title);
            return info ? (info.endRow || 1) : 1;
          }),
          1
        );

        // Create the content items
        const contentHTML = contents.map(title => {
          const info = subSubItem.find(item => item.parentName === menuItem.label && item.name === title);
          if (!info) return '';

          const startCol = info.startCol || 1;
          const endCol = info.endCol || 6;
          const startRow = info.startRow || 1;
          const endRow = info.endRow || 1;
          const displayText = info.content || `<div><strong>${title}</strong></div>`;

          return `
            <div style="
              grid-column: ${startCol} / ${endCol + 1}; 
              grid-row: ${startRow} / ${endRow + 1}; 
              padding: 8px;
              background: #fff;
              box-sizing: border-box;
            ">
              ${displayText}
            </div>
          `;
        }).join("");

        // Render the section with a grid layout
        section.innerHTML = `
          <div class="grid-layout" style="
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            grid-template-rows: repeat(${maxRow}, 60px);
            padding: 10px;
            background: white;
            gap: 1px;
          ">
            ${contentHTML}
          </div>
        `;

        container.appendChild(section);
      });
    }

    // Function to show content and update button style
    window.showContent = function (header, event) {
      // Hide all sections
      const sections = document.querySelectorAll(".w3-container");
      sections.forEach((section) => section.classList.add("hidden"));

      // Remove active class from all buttons
      const buttons = document.querySelectorAll(".w3-bar-item");
      buttons.forEach((button) => button.classList.remove("active"));

      const showButtons = document.querySelectorAll(".show-button");
      showButtons.forEach((button) => {
        button.classList.remove("active");
      });

      // Show selected section
      const container = document.getElementById(header.containerId);
      if (container) {
        container.classList.remove("hidden");
      } else {
        console.error(`Container with ID ${header.containerId} not found.`);
        return;
      }

      // Dynamically render the content based on subItem and subSubItem
      renderMainContent(header);

      // Render the sidebar
      renderSidebar(header);

      // Ensure admin page elements are visible
      if (header.containerId === "admin-page") {
        let adminPage = document.getElementById("admin-page");
        if (!adminPage) {
          console.warn("admin-page container not found, creating dynamically...");
          adminPage = document.createElement("div");
          adminPage.id = "admin-page";
          adminPage.classList.add("w3-container", "w3-padding-64");
          document.getElementById("content-container")?.appendChild(adminPage);
        }

        // Ensure required admin page elements exist, create them if missing
        let adminHeader = document.getElementById("admin-header");
        if (!adminHeader) {
          console.warn("admin-header not found, creating dynamically...");
          adminHeader = document.createElement("h3");
          adminHeader.id = "admin-header";
          adminHeader.classList.add("hidden");
          adminHeader.style.display = "flex";
          adminHeader.style.alignItems = "center";
          adminPage.appendChild(adminHeader);
        }

        let adminContent = document.getElementById("admin-content");
        if (!adminContent) {
          console.warn("admin-content not found, creating dynamically...");
          adminContent = document.createElement("div");
          adminContent.id = "admin-content";
          adminContent.classList.add("w3-container");
          adminPage.appendChild(adminContent);
        }

        let adminTable = document.getElementById("admin-table");
        if (!adminTable) {
          console.warn("admin-table not found, creating dynamically...");
          adminTable = document.createElement("table");
          adminTable.id = "admin-table";
          adminTable.classList.add("hidden");
          adminTable.setAttribute("cellspacing", "0");
          adminContent.appendChild(adminTable);
        }

        let preview = document.getElementById("preview-layout");
        if (!preview) {
          console.warn("preview-layout not found, creating dynamically...");
          preview = document.createElement("div");
          preview.id = "preview-layout";
          preview.classList.add("container", "hidden");
          preview.style.marginTop = "50px";
          adminPage.appendChild(preview);
        }

        let editContainer = document.getElementById("edit-container");
        if (!editContainer) {
          console.warn("edit-container not found, creating dynamically...");
          editContainer = document.createElement("div");
          editContainer.id = "edit-container";
          editContainer.classList.add("container", "hidden");
          editContainer.style.marginTop = "10px";
          adminPage.appendChild(editContainer);
        }

        console.log("Admin page elements after setup:", {
          adminHeader: adminHeader,
          adminTable: adminTable,
          preview: preview,
          editContainer: editContainer,
          adminPageContainer: adminPage
        });

        adminHeader.classList.remove("hidden");
        adminHeader.innerHTML = `Admin menu top: Chỉnh sửa menu top`;
        
        adminContent.classList.remove("hidden");
        adminTable.classList.remove("hidden");
        preview.classList.add("hidden");
        editContainer.classList.add("hidden");

        renderTopMenuTable();
      }

      if (event && event.target) {
        event.target.classList.add("active");
      } else {
        const button = document.getElementById(header.containerId + "-button");
        if (button) {
          button.classList.add("active");
        }
      }
      editing = false;
    };

    window.renderTopMenuTable = function () {
      const adminTable = document.getElementById("admin-table");
      if (!adminTable) {
        console.error("admin-table not found in renderTopMenuTable.");
        return;
      }
      adminTable.innerHTML = "";

      const firstRow = document.createElement("tr");
      firstRow.classList.add("admin-row");
      firstRow.innerHTML = `
        <td class="tab-name">Trang Chủ</td>
        <td class="icon-cell" onclick="renderAdminLeft(0)">
          <i class="fa-solid fa-eye"></i>
        </td>
        <td class="icon-cell" colspan="2"></td>
        <td class="icon-cell" onclick="handleClickAdd(-1)">
          <i class="fa-solid fa-plus"></i>
        </td>`;
      adminTable.appendChild(firstRow);

      headerList.slice(1, headerList.length - 1).forEach((header, index) => {
        const row = document.createElement("tr");
        row.classList.add("admin-row");
        row.innerHTML = `
          <td class="tab-name">${header.name}</td>
          <td class="icon-cell" onclick="renderAdminLeft(${index + 1})">
              <i class="fa-solid fa-eye"></i>
          </td>
          <td class="icon-cell" onclick="handleClickEdit(${index})">
              <i class="fa-solid fa-pen-to-square"></i>
          </td>
          <td class="icon-cell" onclick="handleClickDelete(${index})">
              <i class="fa-solid fa-trash"></i>
          </td>
          <td class="icon-cell" onclick="handleClickAdd(${index})">
              <i class="fa-solid fa-plus"></i>
          </td>`;
        adminTable.appendChild(row);
      });

      const preview = document.getElementById("preview-layout");
      const editContainer = document.getElementById("edit-container");
      if (preview) preview.classList.add("hidden");
      if (editContainer) editContainer.classList.add("hidden");
    };

    window.renderTopMenu = function () {
      const navBar = document.getElementById("nav-bar");
      if (!navBar) return;

      navBar.innerHTML = `
        <a class="w3-bar-item w3-button w3-right w3-hide-large w3-hover-white w3-theme-l1" 
        onclick="w3_open()" href="javascript:void(0)">
          <i class="fa-solid fa-bars"></i>
        </a>
      `;
      headerList.forEach((header, index) => {
        const navItem = document.createElement("a");
        navItem.classList.add("w3-bar-item", "w3-button");
        navItem.textContent = header.name;
        navItem.onclick = (event) => {
          const editContainer = document.getElementById("edit-container");
          const previewLayout = document.getElementById("preview-layout");
          const adminTable = document.getElementById("admin-table");
          if (editContainer) editContainer.classList.add("hidden");
          if (previewLayout) previewLayout.classList.add("hidden");
          if (adminTable) adminTable.classList.remove("hidden");
          showContent(header, event);
        };
        navItem.setAttribute("id", header.containerId + "-button");
        navBar.appendChild(navItem);
      });
    };

    function renderSidebar(header) {
      const sidebar = document.getElementById("mySidebar");
      if (!sidebar) return;

      sidebar.innerHTML = "";
      if (header.leftMenuHeader) {
        const headerEl = document.createElement("h4");
        headerEl.classList.add("w3-bar-item");
        headerEl.innerHTML = `<b>${header.leftMenuHeader}</b>`;
        sidebar.appendChild(headerEl);
      }
      (header.leftMenuList || []).forEach((item) => {
          const link = document.createElement("a");
          link.href = `#${item.href}`;
          link.textContent = item.label;
          link.classList.add("w3-bar-item", "w3-button", "w3-hover-black");
          sidebar.appendChild(link);
      });
    }

    window.renderLeftMenuTable = function (headerIndex) {
      const adminTable = document.getElementById("admin-table");
      if (!adminTable) return;

      adminTable.innerHTML = ``;
      if (headerList[headerIndex].leftMenuList.length) {
          headerList[headerIndex].leftMenuList.forEach((item, index) => {
              const row = document.createElement("tr");
              row.innerHTML = `
            <td class="tab-name">${item.label}</td> 
            <td class="show-button" onClick="renderAdminContentLayout(${headerIndex},${index + 1})"><i class="fa-solid fa-eye"></i></td>
            <td class="edit-button" onClick="handleClickEdit(${headerIndex},${index})"><i class="fa-solid fa-pen-to-square"></i></td>
            <td class="delete-button" onClick="handleClickDelete(${headerIndex}, ${index})"><i class="fa-solid fa-trash"></i></td>
            <td class="add-page-button" onClick="handleClickAdd(${headerIndex}, ${index})"><i class="fa-solid fa-plus"></i></td>
            `;
              adminTable.appendChild(row);
          });
      } else {
          const emptyNoti = document.createElement("tr");
          emptyNoti.innerHTML = `
            <td class="tab-name" style="font-style: italic">There isn't any left menu item in this header yet</td>
            <td class="save-button"><button onClick="handleClickAdd(${headerIndex},0)">Add</button></td>
        `;
          adminTable.appendChild(emptyNoti);
      }
      const preview = document.getElementById("preview-layout");
      const editContainer = document.getElementById("edit-container");
      if (preview) preview.classList.add("hidden");
      if (editContainer) editContainer.classList.add("hidden");
    };

    window.handleClickEdit = function (sectionIndex, itemIndex) {
      if (editing) return;
      const adminTable = document.getElementById("admin-table");
      if (!adminTable) return;

      const targetRow = typeof itemIndex === "number"
        ? adminTable.rows[itemIndex]
        : adminTable.rows[sectionIndex + 1];
      const nameCell = targetRow.querySelector(".tab-name");
      const currentName = nameCell.textContent.trim();
      nameCell.innerHTML = `<input class="menu-rename-input" value="${currentName}" />`;
      nameCell.querySelector("input").focus();

      const actionCell = document.createElement("td");
      actionCell.setAttribute("colspan", "5");
      actionCell.classList.add("save-btn-cell");
      actionCell.innerHTML = `
        <button class="btn-save" onclick="confirmRename(${sectionIndex}, ${typeof itemIndex === "number" ? itemIndex : 'undefined'})">Lưu</button>
      `;
      targetRow.appendChild(actionCell);
      editing = true;
    };

    window.confirmRename = function (sectionIndex, itemIndex) {
      const adminTable = document.getElementById("admin-table");
      if (!adminTable) return;

      const isSubItem = typeof itemIndex === "number";
      const targetRow = isSubItem ? adminTable.rows[itemIndex] : adminTable.rows[sectionIndex + 1];
      const input = targetRow.querySelector("input.menu-rename-input");
      const updatedName = input ? input.value.trim() : "";

      if (!updatedName) return;
      if (isSubItem) {
        const oldLabel = headerList[sectionIndex].leftMenuList[itemIndex].label;
        headerList[sectionIndex].leftMenuList[itemIndex].label = updatedName;

        const sub = subItem.find(s => s.name === oldLabel);
        if (sub) {
          sub.name = updatedName;
          subSubItem.forEach(item => {
            if (item.parentName === oldLabel) {
              item.parentName = updatedName;
            }
          });
        }

        renderSidebar(headerList[sectionIndex]);
        renderLeftMenuTable(sectionIndex);
      } else {
        const oldName = headerList[sectionIndex + 1].name;
        headerList[sectionIndex + 1].name = updatedName;
        headerList[sectionIndex + 1].leftMenuHeader = updatedName;

        renderTopMenu();
        renderTopMenuTable();
      }

      editing = false;
    };

    window.handleClickDelete = function (sectionIndex, itemIndex) {
      if (typeof itemIndex === "number") {
        const itemLabel = headerList[sectionIndex].leftMenuList[itemIndex].label;
        const itemHref = headerList[sectionIndex].leftMenuList[itemIndex].href;
        const sectionElement = document.getElementById(itemHref);
        if (sectionElement) {
          sectionElement.remove();
        }

        const subIndex = subItem.findIndex(s => s.name === itemLabel);
        if (subIndex !== -1) {
          subItem.splice(subIndex, 1);
        }
        const subSubIndices = subSubItem
          .map((item, idx) => (item.parentName === itemLabel ? idx : -1))
          .filter(idx => idx !== -1);
        subSubIndices.reverse().forEach(idx => subSubItem.splice(idx, 1));

        headerList[sectionIndex].leftMenuList.splice(itemIndex, 1);
        renderSidebar(headerList[sectionIndex]);
        renderLeftMenuTable(sectionIndex);
      } else {
        const containerId = headerList[sectionIndex + 1].containerId;
        const containerElement = document.getElementById(containerId);
        if (containerElement) {
          containerElement.remove();
        }

        headerList[sectionIndex + 1].leftMenuList.forEach(item => {
          const subIndex = subItem.findIndex(s => s.name === item.label);
          if (subIndex !== -1) {
            subItem.splice(subIndex, 1);
          }
          const subSubIndices = subSubItem
            .map((subSub, idx) => (subSub.parentName === item.label ? idx : -1))
            .filter(idx => idx !== -1);
          subSubIndices.reverse().forEach(idx => subSubItem.splice(idx, 1));
        });

        headerList.splice(sectionIndex + 1, 1);
        renderTopMenu();
        renderTopMenuTable();
      }

      editing = false;
    };

    window.handleClickAdd = function (sectionIndex, itemIndex) {
      if (editing) return;

      const adminTable = document.getElementById("admin-table");
      if (!adminTable) return;

      const newRow = document.createElement("tr");
      newRow.innerHTML = `
        <td class="tab-name">
          <input class="menu-rename-input" placeholder="Nhập tên mục mới..." />
        </td>
        <td colspan="4">
          <button class="btn-save" onclick="confirmAdd(${sectionIndex}, ${typeof itemIndex === "number" ? itemIndex : 'undefined'})">Lưu</button>
          <button onclick="this.closest('tr').remove(); editing = false;">Hủy</button>
        </td>
      `;

      const insertAfterRowIndex = typeof itemIndex === "number" ? itemIndex : sectionIndex + 1;
      const currentRow = adminTable.rows[insertAfterRowIndex];

      if (currentRow && currentRow.nextSibling) {
        adminTable.insertBefore(newRow, currentRow.nextSibling);
      } else {
        adminTable.appendChild(newRow); 
      }

      editing = true;
    };

    window.confirmAdd = function (sectionIndex, itemIndex) {
      const input = document.querySelector(".menu-rename-input");
      const label = input?.value.trim();
      if (!label) return;

      const href = label.toLowerCase().replace(/\s+/g, "-");

      if (typeof itemIndex === "number") {
        headerList[sectionIndex].leftMenuList.splice(itemIndex + 1, 0, {
          label,
          href
        });

        const newSection = document.createElement("div");
        newSection.id = href;
        newSection.innerHTML = `<h2>${label}</h2>`;
        document.getElementById(headerList[sectionIndex].containerId).appendChild(newSection);

        let sub = subItem.find(s => s.name === label);
        if (!sub) {
          sub = { name: label, item: [] };
          subItem.push(sub);
        }

        renderSidebar(headerList[sectionIndex]);
        renderLeftMenuTable(sectionIndex);
      } else {
        headerList.splice(sectionIndex + 2, 0, {
          name: label,
          leftMenuHeader: label,
          leftMenuList: [],
          containerId: href
        });

        const section = document.createElement("div");
        section.classList.add("w3-container", "w3-padding-64", "hidden");
        section.id = href;
        section.innerHTML = `<div class="header">${label}</div>`;

        const contentContainer = document.getElementById("content-container");
        const footer = document.getElementById("myFooter");
        if (footer && footer.parentNode === contentContainer) {
          contentContainer.insertBefore(section, footer);
        } else {
          contentContainer.appendChild(section);
        }
        renderTopMenu();
        renderTopMenuTable();
      }

      editing = false;
    };

    window.renderAdminLeft = function (index) {
      const header = headerList[index];
      
      document.querySelectorAll(".w3-bar-item, .show-button").forEach(btn => {
        btn.classList.remove("active");
      });

      renderSidebar(header);
      renderLeftMenuTable(index);

      const adminHeader = document.getElementById("admin-header");
      const isStudentInfo = header.containerId === "student-info";
      const adminIndex = headerList.length - 1;

      if (!adminHeader) {
        console.error("adminHeader not found in renderAdminLeft.");
        return;
      }

      let headerHTML = `
        <i class="fa-solid fa-arrow-left back-btn hover-btn" style="margin-right: 15px;" onClick="showContent(headerList[${adminIndex}])"></i>
        <span style="font-weight: bold; margin-right: 10px;">Admin menu left:</span> ${header.name}
      `;

      if (isStudentInfo) {
        headerHTML += `
          <i class="fa-solid fa-rotate-right back-btn" style="margin-left: 10px" onClick="resetStudentInfo(${index})"></i>
        `;
      }

      adminHeader.innerHTML = headerHTML;

      Array.from(mySidebar.children).forEach((item, i) => {
        if (i === 0) return;
        item.onclick = () => renderAdminContentLayout(index, i);
      });

      editing = false;
    };

    window.renderAdminContentLayout = function (sectionIndex, itemIndex) {
      const header = headerList[sectionIndex];
      const menuItem = header.leftMenuList[itemIndex - 1];
      const adminHeader = document.getElementById("admin-header");

      if (!adminHeader) {
        console.error("adminHeader not found in renderAdminContentLayout.");
        return;
      }

      adminHeader.innerHTML = `
        <i class="fa-solid fa-arrow-left back-btn hover-btn" style="margin-right: 15px;" onClick="renderAdminLeft(${sectionIndex})"></i>
        <span style="font-weight: bold; margin-right: 10px;">Admin contents layout:</span> "${header.name} / ${menuItem.label}"
        <i class="fa-solid fa-plus back-btn hover-btn" style="margin-left: 10px; cursor: pointer;" title="Thêm mới đầu"
         onClick="handleClickAddSection(${sectionIndex}, ${itemIndex - 1}, -1)"></i>
        <i class="fa-solid fa-circle-info back-btn hover-btn" style="margin-left: 10px; cursor: pointer;" title="Hướng dẫn layout" onClick="window.open('helper.html', '_blank')"></i>
      `;

      const preview = document.getElementById("preview-layout");
      const edit = document.getElementById("edit-container");
      const adminTable = document.getElementById("admin-table");
      if (!preview || !edit || !adminTable) {
        console.error("preview, edit container, or adminTable not found in renderAdminContentLayout.");
        return;
      }

      adminTable.innerHTML = "";

      const contents = subItem.find(e => e.name === menuItem.label)?.item || [];
      contents.forEach((title, idx) => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td class="tab-name">${title}</td>
          <td class="show-button" onClick="renderSectionEdit(${sectionIndex}, ${itemIndex}, ${idx + 1})"><i class="fa-solid fa-eye"></i></td>
          <td class="edit-button" onClick="handleClickEditSection(${sectionIndex}, ${itemIndex}, ${idx})"><i class="fa-solid fa-pen-to-square"></i></td>
          <td class="delete-button" onClick="handleClickDeleteSection(${sectionIndex}, ${itemIndex - 1}, ${idx})"><i class="fa-solid fa-trash"></i></td>
          <td class="add-page-button" onClick="handleClickAddSection(${sectionIndex}, ${itemIndex - 1}, ${idx})"><i class="fa-solid fa-plus"></i></td>
        `;
        adminTable.appendChild(row);
      });

      preview.classList.remove("hidden");
      edit.classList.add("hidden");

      const maxRow = Math.max(
        ...contents.map(title => {
          const info = subSubItem.find(item => item.parentName === menuItem.label && item.name === title);
          return info ? (info.endRow || 1) : 1;
        }),
        1
      );

      const previewHTML = contents.map(title => {
        const info = subSubItem.find(item => item.parentName === menuItem.label && item.name === title);
        if (!info) return '';

        const startCol = info.startCol || 1;
        const endCol = info.endCol || 6;
        const startRow = info.startRow || 1;
        const endRow = info.endRow || 1;
        const displayText = info.content || `<div><strong>${title}</strong></div>`;

        return `
          <div style="
            border: 2px solid #000; 
            grid-column: ${startCol} / ${endCol + 1}; 
            grid-row: ${startRow} / ${endRow + 1}; 
            padding: 8px;
            background: rgba(255, 255, 255, 0.9);
            box-sizing: border-box;
            z-index: 1;
            position: relative;
          ">
            ${displayText}
          </div>
        `;
      }).join("");

      preview.innerHTML = `
        <h4 style="background: #fbc02d; color: white; padding: 10px">${menuItem.label.toUpperCase()}</h4>
        <div class="grid-layout" style="
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          grid-template-rows: repeat(${maxRow}, 60px);
          padding: 10px;
          background: white;
          position: relative;
          border: 1px dashed #ccc;
          gap: 1px;
        ">
          ${Array.from({ length: maxRow * 12 }, (_, i) => `
            <div style="
              grid-column: ${(i % 12) + 1} / ${(i % 12) + 2};
              grid-row: ${Math.floor(i / 12) + 1} / ${Math.floor(i / 12) + 2};
              border: 1px dashed #ccc;
              background: #f9f9f9;
              z-index: 0;
            "></div>
          `).join("")}
          ${previewHTML}
        </div>
      `;
    };

    window.handleClickEditSection = function (sectionIndex, itemIndex, contentIndex) {
      const header = headerList[sectionIndex];
      const menuLabel = header.leftMenuList[itemIndex - 1].label;

      const title = subItem.find(s => s.name === menuLabel)?.item?.[contentIndex];
      const info = subSubItem.find(e => e.parentName === menuLabel && e.name === title);

      const startCol = info?.startCol || 1;
      const endCol = info?.endCol || 6;
      const startRow = info?.startRow || 1;
      const endRow = info?.endRow || 1;

      const editContainer = document.getElementById("edit-container");
      const preview = document.getElementById("preview-layout");
      if (!editContainer || !preview) {
        console.error("editContainer or preview not found in handleClickEditSection.");
        return;
      }

      preview.classList.add("hidden");
      editContainer.classList.remove("hidden");

      editContainer.innerHTML = `
        <h4>Chỉnh sửa tên và layout mục: <strong>${title}</strong></h4>
        <label>Tên mới (title):</label>
        <input id="edit-title" type="text" value="${title}" />
        <div style="margin: 10px 0">
          <label>Start Column (1-12):</label>
          <input id="edit-start-col" type="number" value="${startCol}" min="1" max="12" />
          <label style="margin-left:10px">End Column (1-12):</label>
          <input id="edit-end-col" type="number" value="${endCol}" min="1" max="12" />
        </div>
        <div style="margin: 10px 0">
          <label>Start Row:</label>
          <input id="edit-start-row" type="number" value="${startRow}" min="1" max="12" />
          <label style="margin-left:10px">End Row:</label>
          <input id="edit-end-row" type="number" value="${endRow}" min="1" max="12" />
        </div>
        <button onclick="saveEditedContent('${menuLabel}', '${title}', ${sectionIndex}, ${itemIndex}, ${contentIndex})">Lưu</button>
      `;
    };

    window.saveEditedContent = function (parentName, oldTitle, sectionIndex, itemIndex, contentIndex) {
      const newTitle = document.getElementById("edit-title").value.trim();
      const startCol = parseInt(document.getElementById("edit-start-col").value) || 1;
      const endCol = parseInt(document.getElementById("edit-end-col").value) || 6;
      const startRow = parseInt(document.getElementById("edit-start-row").value) || 1;
      const endRow = parseInt(document.getElementById("edit-end-row").value) || 1;

      if (!newTitle) {
        alert("Tên title không được để trống!");
        return;
      }
      if (startCol > endCol || startRow > endRow) {
        alert("Giá trị bắt đầu phải nhỏ hơn hoặc bằng giá trị kết thúc!");
        return;
      }
      if (startCol < 1 || endCol > 12 || startRow < 1 || endRow < 1) {
        alert("Giá trị cột và hàng phải nằm trong khoảng từ 1 đến 12!");
        return;
      }

      const sub = subItem.find(s => s.name === parentName);
      if (sub) {
        const titleIndex = sub.item.findIndex(i => i === oldTitle);
        if (titleIndex !== -1) sub.item[titleIndex] = newTitle;
      }

      const contentObj = subSubItem.find(i => i.parentName === parentName && i.name === oldTitle);
      if (contentObj) {
        contentObj.name = newTitle;
        contentObj.startCol = startCol;
        contentObj.endCol = endCol;
        contentObj.startRow = startRow;
        contentObj.endRow = endRow;
      }

      renderAdminContentLayout(sectionIndex, itemIndex);
    };

    window.handleClickAddSection = function (sectionIndex, itemIndex, insertAfter) {
      const header = headerList[sectionIndex];
      const menuLabel = header.leftMenuList[itemIndex].label;

      const editContainer = document.getElementById("edit-container");
      const preview = document.getElementById("preview-layout");
      if (!editContainer || !preview) {
        console.error("editContainer or preview not found in handleClickAddSection.");
        return;
      }

      preview.classList.add("hidden");
      editContainer.classList.remove("hidden");

      editContainer.innerHTML = `
        <h4>Thêm mục content mới vào "${menuLabel}"</h4>
        <div style="display: flex; flex-direction: column; gap: 10px;">
          <label>Tiêu đề (title):</label>
          <input type="text" id="new-title" placeholder="Ví dụ: Thông tin lớp học" />
          <label>Start Column (1-12):</label>
          <input type="number" id="new-start-col" min="1" max="12" value="1" />
          <label>End Column (1-12):</label>
          <input type="number" id="new-end-col" min="1" max="12" value="6" />
          <label>Start Row:</label>
          <input type="number" id="new-start-row" min="1" value="1" />
          <label>End Row:</label>
          <input type="number" id="new-end-row" min="1" value="1" />
          <button onclick="confirmAddSection(${sectionIndex}, ${itemIndex}, ${insertAfter})">Thêm mục content</button>
        </div>
      `;
    };

    window.confirmAddSection = function (sectionIndex, itemIndex, insertAfter) {
      const header = headerList[sectionIndex];
      const menuLabel = header.leftMenuList[itemIndex].label;

      const title = document.getElementById("new-title")?.value.trim();
      const startCol = parseInt(document.getElementById("new-start-col")?.value) || 1;
      const endCol = parseInt(document.getElementById("new-end-col")?.value) || 6;
      const startRow = parseInt(document.getElementById("new-start-row")?.value) || 1;
      const endRow = parseInt(document.getElementById("new-end-row")?.value) || 1;

      if (!title) {
        alert("Vui lòng nhập tiêu đề.");
        return;
      }
      if (startCol > endCol || startRow > endRow) {
        alert("Giá trị bắt đầu phải nhỏ hơn hoặc bằng giá trị kết thúc!");
        return;
      }
      if (startCol < 1 || endCol > 12 || startRow < 1 || endRow < 1) {
        alert("Giá trị cột và hàng phải nằm trong khoảng từ 1 đến 12!");
        return;
      }

      let sub = subItem.find(s => s.name === menuLabel);
      if (!sub) {
        sub = { name: menuLabel, item: [] };
        subItem.push(sub);
      }
      const insertAt = insertAfter + 1;
      sub.item.splice(insertAt, 0, title);

      subSubItem.push({
        parentName: menuLabel,
        name: title,
        content: "",
        startCol,
        endCol,
        startRow,
        endRow
      });

      renderAdminContentLayout(sectionIndex, itemIndex + 1);
    };

    window.handleClickDeleteSection = function (sectionIndex, itemIndex, deleteIndex) {
      const header = headerList[sectionIndex];
      const menuLabel = header.leftMenuList[itemIndex].label;

      const sub = subItem.find(s => s.name === menuLabel);
      if (!sub || !sub.item[deleteIndex]) return;

      const titleToDelete = sub.item[deleteIndex];
      sub.item.splice(deleteIndex, 1);

      const indexInSubSub = subSubItem.findIndex(
        e => e.parentName === menuLabel && e.name === titleToDelete
      );
      if (indexInSubSub !== -1) {
        subSubItem.splice(indexInSubSub, 1);
      }

      renderAdminContentLayout(sectionIndex, itemIndex + 1);
    };

    window.renderSectionEdit = function (sectionIndex, itemIndex, contentIndex) {
      const header = headerList[sectionIndex];
      const menuLabel = header.leftMenuList[itemIndex - 1].label;
      const title = subItem.find(s => s.name === menuLabel)?.item?.[contentIndex - 1];
      const info = subSubItem.find(e => e.parentName === menuLabel && e.name === title);
    
      const content = info?.content || "";
    
      const adminHeader = document.getElementById("admin-header");
      const adminTable = document.getElementById("admin-table");
      const preview = document.getElementById("preview-layout");
      const editContainer = document.getElementById("edit-container");
    
      if (!adminHeader || !adminTable || !preview || !editContainer) {
        console.error("One or more elements not found in renderSectionEdit.");
        return;
      }
    
      adminTable.parentElement.classList.add("hidden");
      preview.classList.add("hidden");
      adminHeader.classList.add("hidden");
      editContainer.classList.remove("hidden");
    
      if (tinymce.get('tinymce-editor')) {
        tinymce.get('tinymce-editor').remove();
      }
    
      editContainer.innerHTML = `
        <h4>Admin contents: "Trang chủ / ${menuLabel} / ${title}"</h4>
        <div id="editor-container">
          <textarea id="tinymce-editor" style="width: 100%; height: 200px;">${content}</textarea>
        </div>
        <button onclick="saveTinyMCEContent('${menuLabel}', '${title}', ${sectionIndex}, ${itemIndex}, ${contentIndex - 1})" style="margin: 10px 0;">Lưu</button>
        <hr>
        <h4>Preview:</h4>
        <div id="live-preview" style="border: 1px solid #ccc; padding: 10px;"></div>
      `;
    
      tinymce.init({
        selector: '#tinymce-editor',
        height: 200,
        menubar: false,
        plugins: [
          'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
          'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
          'insertdatetime', 'media', 'table', 'help', 'wordcount'
        ],
        toolbar: 'undo redo | blocks | bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image media table | removeformat | code | preview',
        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
        setup: function (editor) {
          editor.on('input', function () {
            const updatedContent = editor.getContent();
            renderPreview(updatedContent);
          });
          editor.on('init', function () {
            renderPreview(content);
          });
        }
      });
    
      const contents = subItem.find(e => e.name === menuLabel)?.item || [];
    
      const renderPreview = (editedContent) => {
        const previewHTML = contents.map((contentTitle, idx) => {
          const contentInfo = subSubItem.find(item => item.parentName === menuLabel && item.name === contentTitle);
          if (!contentInfo) return '';
    
          const startCol = contentInfo.startCol || 1;
          const endCol = contentInfo.endCol || 6;
          const startRow = contentInfo.startRow || 1;
          const endRow = contentInfo.endRow || 1;
          const displayContent = idx === contentIndex - 1 ? editedContent : (contentInfo.content || `<div><strong>${contentTitle}</strong></div>`);
    
          return `
            <div style="
              grid-column: ${startCol} / ${endCol + 1}; 
              grid-row: ${startRow} / ${endRow + 1}; 
              padding: 8px;
              background: #fff;
              box-sizing: border-box;
            " class="content-item">
              ${displayContent}
            </div>
          `;
        }).join("");
    
        const livePreview = document.getElementById("live-preview");
        if (livePreview) {
          livePreview.innerHTML = `
            <h4 style="background: #fbc02d; color: white; padding: 10px">${menuLabel.toUpperCase()}</h4>
            <div class="grid-layout" style="
              display: grid;
              grid-template-columns: repeat(12, 1fr);
              grid-auto-rows: 60px;
              padding: 10px;
              background: white;
            ">
              ${previewHTML}
            </div>
          `;
        }
      };
    };

    window.saveTinyMCEContent = function (parentName, title, sectionIndex, itemIndex, contentIndex) {
      const editor = tinymce.get('tinymce-editor');
      const html = editor ? editor.getContent() : '';
    
      const item = subSubItem.find(e => e.parentName === parentName && e.name === title);
      if (item) {
        item.content = html;
      }
    
      const href = headerList[sectionIndex].leftMenuList[itemIndex - 1].href;
      const sectionElement = document.getElementById(href);
      if (sectionElement) {
        const contentElements = sectionElement.querySelectorAll('.grid-layout > div');
        if (contentElements[contentIndex]) {
          contentElements[contentIndex].innerHTML = html;
        }
      }
    
      const adminHeader = document.getElementById("admin-header");
      const adminTable = document.getElementById("admin-table");
      const preview = document.getElementById("preview-layout");
      const editContainer = document.getElementById("edit-container");
    
      if (!adminHeader || !adminTable || !preview || !editContainer) {
        console.error("One or more elements not found in saveTinyMCEContent.");
        return;
      }
    
      adminHeader.classList.remove("hidden");
      adminTable.parentElement.classList.remove("hidden");
      preview.classList.remove("hidden");
      editContainer.classList.add("hidden");
    
      renderAdminContentLayout(sectionIndex, itemIndex);
    
      if (editor) {
        editor.remove();
      }
    };

    window.reloadStudentInfor = function (index) {
      const header = headerList[index];
      renderMainContent(header);
    };

    window.resetStudentInfo = function (index) {
      const header = headerList[index];
    
      // Reset left menu items to the initial state
      header.leftMenuList = [
        { label: "Curriculum vitae (CV)", href: "CV" },
        { label: "Các dự án đã tham gia", href: "projects" },
        { label: "Sinh hoạt cộng đồng", href: "community" },
      ];
    
      // Reset subItem for "Thông tin sinh viên"
      subItem = subItem.filter(item => !header.leftMenuList.some(menu => menu.label === item.name));
      subItem.push(
        { name: "Curriculum vitae (CV)", item: ["title1", "title2"] },
        { name: "Các dự án đã tham gia", item: ["title1"] },
        { name: "Sinh hoạt cộng đồng", item: ["title1"] }
      );
    
      // Reset subSubItem for "Thông tin sinh viên"
      subSubItem = subSubItem.filter(item => !header.leftMenuList.some(menu => menu.label === item.parentName));
      subSubItem.push(
        {parentName: "Curriculum vitae (CV)", name: "title1", content: `<img src="./assets/ava.jpg" alt="Student Photo" class="profile-photo">`, startCol: 1, endCol: 4, startRow: 1, endRow: 8},
        {parentName: "Curriculum vitae (CV)", name: "title2", content: `
          <div class="details"><span>Họ và tên: </span> Nguyễn Duy Khánh</div>
          <div class="details"><span>Năm vào trường: </span> 2022</div>
          <div class="details"><span>Bậc đào tạo: </span> Cử Nhân </div>
          <div class="details"><span>Chương trình: </span>Khoa học máy tính 2022</div>
          <div class="details"><span>MSSV: </span> 20225019 </div>
          <div class="details"><span>Giới tính: </span> Nam</div>
          <div class="details"><span>Lớp: </span> Khoa học máy tính 07 - K67 </div>
          <div class="details"><span>Khóa học: </span> 67</div>
          <div class="details"><span>Email: </span> Khanh.ND225019@sis.hust.edu.vn</div>
        `, startCol: 5, endCol: 12, startRow: 1, endRow: 8},
        {parentName: "Các dự án đã tham gia", name: "title1", content: `
          <div id="projects-info" class="projects-info">
            <div class="section-header" style="text-align: center;"><span style="text-decoration: underline;"><strong>các dự án đã tham gia từ năm 2022</strong></span></div>
            <div class="project">
              <table class="table-info">
                <tbody>
                  <tr>
                    <th>Ứng dụng Quản lý Dân số</th>
                    <td>Nhóm 4 người <br>Nhiệm vụ: Thiết kế giao diện người dùng, phát triển các tính năng front-end <br>Công nghệ sử dụng: Java, MySQL <br>Mục tiêu: Tạo giao diện người dùng cho hệ thống</td>
                  </tr>
                  <tr>
                    <th>Hệ thống quản lý tuyển sinh</th>
                    <td>Nhóm 4 người <br>Nhiệm vụ: Phát triển front-end <br>Công nghệ sử dụng: HTML, CSS, JavaScript, MySQL, PHP <br>Mục tiêu: Tạo giao diện người dùng cho hệ thống</td>
                  </tr>
                  <tr>
                    <th>Hệ thống đánh giá dịch vụ sản phẩm</th>
                    <td>Cá nhân <br>Công nghệ sử dụng: HTML, CSS, JavaScript, MySQL, NodeJS, React</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        `, startCol: 1, endCol: 12, startRow: 1, endRow: 6},
        {parentName: "Sinh hoạt cộng đồng", name: "title1", content: `
          <div class="section-header" style="text-align: center;"><span><strong>Các hoạt động cộng đồng đã tham gia</strong></span></div>
            <ul>
              <li><strong>10/2022: </strong>Tham gia hoạt động "Cốc trà đá vì cộng đồng"</li>
              <li><strong>5/2020: </strong>Tham gia chiến dịch tình nguyện "Hoa phượng đỏ"</li>
            </ul>
          `, startCol: 1, endCol: 12, startRow: 1, endRow: 3}
      );
    
      // Re-render the content and sidebar
      renderMainContent(header);
      renderSidebar(header);
    
      // Hiển thị thông báo reset thành công
      alert("Đã reset mục 'Thông tin sinh viên' về trạng thái ban đầu!");
      location.reload();
    };

    // Initialize the page
    renderTopMenu();
    showContent(headerList[0]);
  }, 500);
};