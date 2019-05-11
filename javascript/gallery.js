function main(){
    var modal = document.getElementById('modal');
    var modal_img = document.getElementById("modal_img");
    $('.gallery').click(function() {
        modal.style.display = "flex";
        modal_img.src = this.src;
    });
    var span = document.getElementById("close");
    span.onclick = function() { 
        modal.style.display = "none";
    };
}