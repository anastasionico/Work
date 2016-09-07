{* start header *}
<header class="container-width border-b white-border solid-b padding-t-1r">
    <section class="container overflow" style="margin-bottom: -3px">
        <div class="grid-22 overflow push-1">
            <div id="logo" class="mgrid-24 grid-4ng">
                <a href="{cms_selflink href='home'}" class="resetLine">
                    <img src="uploads/images/logo_cloud.png" alt="Kick Fit Consult" title="Home" />
                </a>
                <div id="mobile-nav" class="float-r">
                    <img src="uploads/images/assets/mobile-menu.png" alt="mobile-menu" />
               </div>
            </div>
            <div id="container-nav" class="mgrid-24 grid-20ng">
                <div class="align-r grid-24 margin-b-20 overflow" >
                    <div class="grid-1 float-r">
                        <div class="inline-block float-r mphide mlhide">{search resultpage="search-results-2"}</div>
                    </div>
                    {*---------------- log in----------------*}
                    <div id="authentication-div" class="grid-5 overflow float-r capitalize align-r mphide mlhide tphide tlhide fa-1r">
                        <i class="fa fa-lock" aria-hidden="true"></i>
                        <span class="inline-block add-1  fa-1r">{cms_selflink page="log-in" text="log in"}</span>
                        <i class="fa fa-user" aria-hidden="true"></i>
                        <span class="inline-block  fa-1r">{cms_selflink page="sign-up" text="sign up"}</span>
                    </div>
                    {*---------------- log in----------------*}
                    <img  id="btn_login" class="dhide mphide mlhide" src="uploads/images/assets/btn_login.png"><img>
                </div>
                <div class="clear"></div>
                <nav id="mobile-list" class="align-r">
                     {Navigator}
                     <span class="hide">{search resultpage="search-results-2"}</span>
                     <input class="block hide tphide tlhide " type="search">
                     <p class="block hide tphide tlhide">Log in / Sign in</p>
                </nav>
            </div> 
        </div>
    </section>
</header>