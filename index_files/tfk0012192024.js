﻿const StoreHeaderHtmlScript=`
<!DOCTYPE html>
<html lang="ar">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" c>
    <link rel="icon" href="https://sections.storebooks.shop/SB-logo.png" type="image/png">
    <title> StoreBooks  - الجامعات 
    </title>
    <style>
      .iframe-container {
        width: 100%;
        height: 1450px;
        /* زودنا الارتفاع 3 أضعاف */
        border: none;
        justify-content: center;
        overflow: hidden;
        z-index: 2;
      }
      iframe {
        width: 100%;
        height: 100%;
        border: none;
      }
      /* إخفاء أي container آخر في الصفحة */
      .container {
        width: 100%;
        margin: 20px auto;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        padding: 15px;
      }
      .items-home-header {
        display: none !important;
      }
      .mx-auto {
        display: none !important;
      }
      .section-title {
        font-size: 1.5em;
        color: #000000;
        margin: 20px 0;
        text-align: center;
      }
      .whatsapp-float {
        position: fixed;
        bottom: 20px;
        right: 20px;
        background-color: #25d366;
        color: white;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
        z-index: 1000;
        cursor: pointer;
        transition: 0.3s;
      }
      .whatsapp-float:hover {
        background-color: #1ebe57;
      }
      .whatsapp-float img {
        width: 35px;
        height: 35px;
      }
      /* تعديل تصميم البطاقات عند الشاشات الصغيرة */
      @media (max-width: 768px) {
        .iframe-container {
          height: 3400px;
        }
      }
    </style>
  </head>
  <body>
    <!--html code of store header-->
    <header class="header-hero position-relative">
      <div style="background:url('https://fatoradrive.blob.core.windows.net/media/tfk0012192024-L2YAJ.jpg');background-position: center center;background-size: cover;position: absolute;top: 0;height: 100%;width: 100%;">   
      </div> 
      <h1>الكتب الجامعية..📚
      </h1> 
      <h3>كافة الكتب الجامعيه من مختلف الجامعات ... 📚
      </h3>  
      <a href="https://storebooks.shop" class="btn hvr-glow hvr-icon-push"> 
        <i class="hvr-icon" data-feather="shopping-bag">
        </i>
        <span class='ar-only'> الصفحة الرئيسية
        </span>
        <span class='en-only'> Home page 
        </span>
      </a>   
      <a href="https://summaries.storebooks.shop" class="btn hvr-glow hvr-icon-push" style="margin-left: 10px;"> 
        <i class="hvr-icon" data-feather="book">
        </i>
        <span class='ar-only'> ملخصات ومراجعات 
        </span>
        <span class='en-only'> Summaries & Reviews 
        </span>
      </a>   
    </header>
    <!-- إضافة الفريم -->
    <div class="iframe-container">
      <iframe src="https://university-departments.storebooks.shop/" scrolling="no">
      </iframe>
    </div>
    <a href="https://api.whatsapp.com/send?phone=201009749274&text=✨اهلا%20يا%20استوربوكس" class="whatsapp-float">
      <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp">
    </a>
  </body>
</html>
`;
