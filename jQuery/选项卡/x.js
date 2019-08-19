$(function(){
    let btn = $(".boxSon")
    let sec = $(".sec")
    sec.eq(0).css({
        "z-index":10
    })
    btn.mouseenter(function(){
        let index = $(this).index()
        btn.css({
            "background-color":""
        }).eq(index).css({
            "background-color":"red"
        })
        sec.css({
            "z-index":0
        }).eq(index).css({
            "z-index":10
        })
    })
    
})