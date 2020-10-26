// ghim dòng heading đầu tiên (stick navigation)
// Ví dụ
// $(document).ready(
//     function(){
//         // $('h1'): lựa chọn phần tử h1
//         $('h1').click(
//             function(){
//                 $(this).css('color','red');
//                 // this ở đây chỉ h1
//             }
//         )
//     }
// )

$(document).ready(
    function () {
        $('.about-section').waypoint(
            function (direction) {
                if (direction == "down") {
                    $('nav').addClass('sticky');
                } else {
                    $('nav').removeClass('sticky');
                }
            }, {
            offset: '600px'
        }
        )//ý nghĩa: khi scroll xuống đến đoạn cách about section 600px (về phía trên) thì dòng stick navigation bắt đầu xuất hiện

        //scroll smoothy
        $('a').click(function (event) {
            $('html, body').animate(
                {
                    scrollTop: $($.attr(this, 'href')).offset().top
                }, 700);
            event.preventDefault();
        });

        //mobile navigation
        $('.mobile-nav-icon').click(
            function(){
                $('.main-nav').slideToggle(200);
                // khi click vào mobile-nav-icon thì display của main-nav chuyển từ none -> block
                
                if($('.mobile-nav-icon').hasClass('fa-bars')){
                    $('.mobile-nav-icon').addClass('fa-times')
                    $('.mobile-nav-icon').removeClass('fa-bars')
                }else{
                    $('.mobile-nav-icon').removeClass('fa-times')
                    $('.mobile-nav-icon').addClass('fa-bars')
                }
                //khi click vào icon bars sẽ chuyển thành icon times và ngc lại
            }
        )
    }
)