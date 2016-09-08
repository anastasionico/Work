<script type="text/javascript">
{* ---------------- Google Fonts embed code ----------------*}
    {literal}
        (function() {
            var link_element = document.createElement("link"),
                s = document.getElementsByTagName("script")[0];
            if (window.location.protocol !== "http:" && window.location.protocol !== "https:") {
                link_element.href = "http:";
            }
            link_element.href += "//fonts.googleapis.com/css?family=Montserrat:400,700";
            link_element.rel = "stylesheet";
            link_element.type = "text/css";
            s.parentNode.insertBefore(link_element, s);
        })();
    {/literal}
{* ---------------- end google Fonts embed code ----------------*}    

{* ---------------- start mobile menu ----------------*}
    {literal}
        $(function () {
            $("#mobile-nav").click(function () {
                $("nav").slideToggle("fast", "linear");
            });
        });
    {/literal}
{* ---------------- end mobile menu ----------------*}

{* ------------------ javascript for the search bar -----------------------------
    {literal}
    $(document).ready(function(){
                var submitIcon = $('.searchbox-icon');
                var inputBox = $('.searchbox-input');
                var searchBox = $('.searchbox');
                var isOpen = false;
                submitIcon.click(function(){
                    if(isOpen == false){
                        searchBox.addClass('searchbox-open');
                        inputBox.focus();
                        isOpen = true;
                    } else {
                        searchBox.removeClass('searchbox-open');
                        inputBox.focusout();
                        isOpen = false;
                    }
                });  
                 submitIcon.mouseup(function(){
                        return false;
                    });
                searchBox.mouseup(function(){
                        return false;
                    });
                $(document).mouseup(function(){
                        if(isOpen == true){
                            $('.searchbox-icon').css('display','block');
                            submitIcon.click();
                        }
                    });
            });
                function buttonUp(){
                    var inputVal = $('.searchbox-input').val();
                    inputVal = $.trim(inputVal).length;
                    if( inputVal !== 0){
                        $('.searchbox-icon').css('display','none');
                    } else {
                        $('.searchbox-input').val('');
                        $('.searchbox-icon').css('display','block');
                    }
                }
    {/literal} 
{* ------------------ javascript for the search bar -----------------------------*}

{* ---------------- javascript for showing & hiding tabs on click -------------- *}
    {literal}
        $(document).ready(function(){
            $("#tab-events").click(function(){
                $('#home-events').css("display", "block");
                $('#home-consulting').css("display", "none");
                $("#tab-consulting").css("color", "grey");
                $("#tab-consulting").removeClass("solid-b");
                $(this).css("color", "#e33");
                $(this).addClass("solid-b");
            });
            $("#tab-consulting").click(function(){
                $('#home-consulting').css("display", "block");
                $('#home-events').css("display", "none");
                $("#tab-events").css("color", "grey");
                $("#tab-events").removeClass("solid-b");
                $(this).css("color", "#e33");
                $(this).addClass("solid-b");
            });
            $("#tabone").click(function(){
                $('#home-blog').css("display", "block");
                $('#home-video').css("display", "none");
                $("#tabtwo").css("color", "grey");
                $("#tabtwo").removeClass("solid-b");
                $(this).css("color", "#e33");
                $(this).addClass("solid-b");
            });
            $("#tabtwo").click(function(){
                $('#home-blog').css("display", "none");
                $('#home-video').css("display", "block");
                $("#tabone").css("color", "grey");
                $("#tabone").removeClass("solid-b");
                $(this).css("color", "#e33");
                $(this).addClass("solid-b");
            });
            $("#tabthree").click(function(){
                $('#home-blog').css("display", "none");
                $('#home-video').css("display", "none");
            });
            
        });
    {/literal}
{* ---------------- javascript for showing & hiding tabs on click -------------- *}  

/*============================== news-events start page ===============================*/ 
    {literal}
        $(document).ready(function(){
            var dates = document.getElementsByClassName("calendar-date");
            dates[0].classList.add("calendar-date-active");
            
            var events = document.getElementsByClassName("calendar-event");
            events[0].classList.add("calendar-event-active");
        });
    {/literal}
    
        function setActive(x) {
            var dates = document.getElementsByClassName("calendar-date");
            for (i = 0; i < dates.length; i++) {
                dates[i].classList.remove("calendar-date-active");
                dates[x].classList.add("calendar-date-active");
            }
            var events = document.getElementsByClassName("calendar-event");
            for (i = 0; i < events.length; i++) {
                events[i].classList.remove("calendar-event-active");
                
                events[x].classList.add("calendar-event-active");
            }
            
        }
/*============================== news-events end page ===============================*/     

/*============================== old switch slide ===============================*/     
    function changeColor(){
        if(document.getElementById('labelBlog').style.color === "rgb(255, 0, 0)" || document.getElementById('labelBlog').style.color === "#f00"){
            document.getElementById("labelBlog").style.color="#aaa";
            document.getElementById("icoBlog").style.color="#aaa";
                    
            document.getElementById("labelVideo").style.color="#f00";
            document.getElementById("icoVideo").style.color="#f00";
        }else{
            document.getElementById("labelBlog").style.color="#f00";
            document.getElementById("icoBlog").style.color="#f00";
            
            document.getElementById("labelVideo").style.color="#aaa";
            document.getElementById("icoVideo").style.color="#aaa";
        }
        return false;
    }
/*============================== end old switch slide ===============================*/   


/*============================== start search bar ===============================*/   
    function hasClass(element, className) {
        return element.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(element.className);
    }
    
    function onSearch(){
        var searchbar = document.getElementById("searchbar");
        var authenticationDiv = document.getElementById("authentication-div");
        var magnifierButton = document.getElementById("magnifierButton");
        var verify = hasClass(searchbar, 'searchbox-isOpen');
        
        if(!verify){
            searchbar.className += " searchbox-isOpen";
            searchbar.focus();
            authenticationDiv.className += " authenticationDiv-moved";
            magnifierButton.className = " fa fa-1r fa-times";
            setTimeout(function(){
                if(searchbar.value =="" ){
                    searchbar.className = "searchbox-input searchbox-input-getSmaller ";
                    authenticationDiv.className = "grid-5 overflow float-r capitalize align-r mphide mlhide tphide tlhide fa-1r";
                    magnifierButton.className = " fa fa-1r fa-search";
                }
            },3000);
        }else{
        
            searchbar.className = "searchbox-input searchbox-input-getSmaller ";
            authenticationDiv.className = "grid-5 overflow float-r capitalize align-r mphide mlhide tphide tlhide fa-1r";
            magnifierButton.className = " fa fa-1r fa-search";
        }
    } 



    

    
    /*
        set this functionf in the onSearch function
    
    
/*============================== end search bar ===============================*/   


</script>