

<?php
 include ('../include/head.php'); 

 include ('../include/header.php') ;

 include ('../include/nav.php'); 
 ?>


<main class="checkout">
        <div class="stepper">
            <div class="step--1 step-active">Step 1</div>
            <div class="step--2">Step 2</div>
            <div class="step--3">Step 3</div>
            <div class="step--4">Finish</div>
        </div>
        <form class="form form-active">
            <div class="form--header-container">
                <h1 class="form--header-title">
                    معلوماتك الشخصية
                </h1>
            </div>
            <input type="text" placeholder="FullName">
            <input type="text" placeholder="Email">
            <input type="text" placeholder="mobile number">
            <button class="form__btn" id="btn-1">Next</button>
        </form>
        <form class="form">
            <div class="form--header-container">
                <h1 class="form--header-title">
                    منتجاتك
                </h1>
            </div>

            <div class="cart-item px-2 pt-2 mt-1">
                <div class="item-above d-flex">
                    <div class="ml-1">
                        <img src="Cart%20%D8%A7%D9%84%D8%B3%D9%84%D8%A9_files/book11.jpg" alt="user" width="40">
                    </div>
                    <div class="item-details">
                        <span class="h6">
                            البداية والنهاية الجزء الأول (كتاب إلكتروني)
                        </span>
                        <br>
                        <span class="subtitle">
                            منتج قابل للخصم لحاملي بطاقة خصم مكتبة جرير
                        </span>
                        <div>
                            <blockquote class="blockquote my-1">
                                <p>
                                    <b>ملاحظة:</b>
                                    هذا المنتج رقمي وسيتم توصيله عبر البريد الإلكتروني
                                </p>
                                <span>
                                    <a href="#">كيفية الحصول على منتج?</a>
                                </span>
                            </blockquote>
                        </div>
                    </div>
                </div>
                <div class="item-bottom py-1">
                    <span class="link">
                        <i class="fa fa-close"></i>
                        احذف
                    </span>
                </div>
            </div>
            
            <button class="form__btn" id="btn-2-prev">Previous</button>
            <button class="form__btn" id="btn-2-next">Next</button>
        </form>
        <form class="form">
            <div class="form--header-container">
                <h1 class="form--header-title">
                    طرق الدفع
                </h1>
            </div>
                <ul class="d-flex justify-content-space-between px-2">
                    <li><img src="images/46.JPG" alt="" width="40"> </li>
                    <li><img src="images/47.JPG" alt="" width="40"></li>
                    <li><img src="images/48.JPG" alt="" width="40"></li>
                    <li><img src="images/49.JPG" alt="" width="40"> </li>
                    <li><img src="images/50.JPG" alt="" width="40"></li>
                    <li><img src="images/51.JPG" alt="" width="40"></li>
                </ul>
            <input type="text" placeholder="card number">
            <input type="text" placeholder="expireDate">
            <input type="text" placeholder="PIN">
            <button class="form__btn" id="btn-3">Submit</button>
        </form>
        
        <div class="form--message"></div>
    </main>

<?php
 include ('../include/footer.php');
?>