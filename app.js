const buyBtns = document.querySelectorAll('.js-buy-ticket')
        const modal = document.querySelector('.js-modal')
        const modalContainer = document.querySelector('.js-modal-container')
        const modalClose = document.querySelector('.js-modal-close')
        
        // Hàm hiển thị modal mua vé (thêm class vào modal)
        function showBuyTickets() {
            modal.classList.add('open')
        }

        // Hàm ẩn modal mua vé (gỡ bỏ class open của modal)
        function hideBuyTickets() {
            modal.classList.remove('open')
        }

        //Lặp qua từng thẻ button và nghe hành vi click
        for (const buyBtn of buyBtns) {
            buyBtn.addEventListener('click', showBuyTickets)
        } 

        //Nghe hành vi click vào button close
        modalClose.addEventListener('click', hideBuyTickets )

        modal.addEventListener('click', hideBuyTickets)

        modalContainer.addEventListener('click', function(event) {
            event.stopPropagation()
        })
//
//
var header =document.getElementById('header');
    mobileMenu =document.getElementById('mobile-menu');
var headerHeight = header.clientHeight;

// Đóng/ mở Mobile Menu
    mobileMenu.onclick = function(){
        var isClosed = header.clientHeight === headerHeight ; //===: phép so sánh
        if(isClosed){
            header.style.height = 'auto';
        }else{
            header.style.height = null;

        }
    }

    //Tự động đóng khi chọn menu
    var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
    for (var i = 0; i< menuItems.length; i++){
        var menuItem = menuItems[i];
        
        menuItem.onclick = function(event){
            // kiểm tra điều kiện ( lấy ra thẻ a có anh chị em liền kề và so sánh thẻ a đó có chứa 'subnav' hay k ? )
            var isParentMenu = this.nextElementSibling && menuItem.nextElementSibling.classList.contains('subnav');
            if(isParentMenu){
                event.preventDefault();//bỏ cái cài đặt mặc định
            }else{
                header.style.height = null;
            }
        }
    }