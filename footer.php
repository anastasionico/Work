{* Empty Smarty Template *}
{* Logic *}
{$start_year = '2016'}
{$current_year = $smarty.now|date_format:'%Y'}

<footer id="footer" class="container-width padding-t8ab-2r overflow">
    <div class="container centred overflow padding-tab-2r">
        <div class="mgrid-24 grid-8" >
            <h3>kickfit consult</h3>
            <a>home</a>
            <a>about</a>
            <a>contact us</a>
        </div>
        <div class="mgrid-24 grid-8 ">
            <h3>news & events</h3>
            <a>events</a>
            <a>news</a>
            <a>blog</a>
        </div>
        <div class="mgrid-24  grid-8 end ">
            <h3>my account</h3>
            <a>login</a>
            <a>sign up</a>
        </div>
    </div>  
    <div id="footer_lowerside" class="container block centred align-c padding-b-1r">
        {*<div class="mgrid-24 grid-8" style="">
            <a>kpankiewicz@kickfit-academy.com</a>
        </div>*}
        <div class="mgrid-24 centred margin-b-1r" style="">
            <p>&copy; Copyright {$current_year} Kick Fit Consulting.  All rights reserved.</p>
        </div>
        <div class="mgrid-24 container align-c">
            <img src="uploads/images/social/facebook.png" alt="facebook"></img>
            <img src="uploads/images/social/linkedin.png" alt="linkedin"></img>
            <img src="uploads/images/social/twitter.png" alt="twitter"></img>
        </div>
    </div>
</footer>