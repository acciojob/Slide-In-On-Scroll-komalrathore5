// Your JS code here.
function addSlide() {
            var scrolledImages = document.querySelectorAll('.slide-in');
            console.log("ScrolledImages",scrolledImages);
            scrolledImages.forEach((img) => {
                var scrolledHeight = window.scrollY + window.innerHeight - img.height / 2;
                var imageBottomHeight = img.offsetTop + img.height;
                var isImageHalfScrolled = scrolledHeight > img.offsetTop;

                var isImageFullyScrolled = window.scrollY > imageBottomHeight;
               
                console.log("Height", scrolledHeight,imageBottomHeight, img.offsetTop, window.innerHeight);
                if (isImageHalfScrolled && !isImageFullyScrolled) {
                    img.classList.add("active");
                } else {
                    img.classList.remove("active");
                }
            });
        }
        window.addEventListener('scroll', debounce(addSlide));