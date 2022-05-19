/***
     this function is management object position values.
***/
function Position( x , y ) {
    var obj = new Object();
    obj.x = x
    obj.y = y
    return obj
}

/***
    method : setOrderAlphaAnimation
        description - this method is "alpha" animation order by "names".
        names :: Array on String. this argument must it is exist tag name.
        duration   :: animation duration time. this parameter unit is 'free'. "eg1.) 1s"  "eg2.) 500ms"
        comletion :: All Animation Ended Process. must it is null or function.
***/
function setOrderAlphaAnimation( names , duration , completion ) {
    var animationEndEvents = 'animationend webkitAnimationEnd oAnimationEnd mozAnimationEnd'
    function setAlphaAnimation( element ) {
        element.css('animation', "fadeIn " + duration + " ease 0s 1 normal" )
               .css('-webkit-animation', "fadeIn " + duration + " ease 0s 1 normal" )
    }
    // argument 'i' it value always equal names.length.
    // thats so bud. "i" must to be unique value.
    // so create closure method. "i" unique value hold. so good. 
    function process( i ) {
        var element = $("*[name=" + names[i] + "]")
        if( i == 0 ) {
            element.show()
            setAlphaAnimation( element )
        } else {
            beforeElement = $("*[name=" + names[i-1] + "]")
            beforeElement.on( animationEndEvents , function(){
                var element = $("*[name=" + names[i] + "]")
                element.show()
                setAlphaAnimation( element )
                if( i == names.length - 1 && completion != null ) {
                    element.on( animationEndEvents , function(){
                        completion()
                    });
                }
            });
        }
    }
    for( var i = 0 ; i < names.length ; i++ ) {
        process( i )
    }
}
/***
    method : setOrderTransitionAnimation
        description - this method is "transform" animation order by "translates".
        name       :: target element search on this parameter. this argument must it is exist tag name.
        translates :: Array on Position.
        duration   :: animation duration time. this parameter unit is 'free'. "eg1.) 1s"  "eg2.) 500ms"
        comletion  :: All Animation Ended Process. must it is null or function.
***/
function setOrderTransitionAnimation( name , translates , duration , completion ) {
    var stage = 1
    var animationEndEvents = 'transitionend webkitTransitionEnd'
    var element = $("*[name=" + name + "]")
    element
        .css('transition', duration )
        .css('-webkit-transition', duration )
        .css('transform',"translateX(" + translates[0].x + "px) translateY(" + translates[0].y + "px)")
    element.on( animationEndEvents , function(){
        if( stage < translates.length ) {
            element.css('transform',"translateX(" + translates[stage].x + "px) translateY(" + translates[stage].y + "px)")
            stage += 1
        } else if( completion != null ){
            completion()
        }
    });
}
/***
    method : setOrderTransitionAnimeJs
        description - this method is "transform" animation order by "translates". this animation process only js calculation.
        name       :: target element search on this parameter. this argument must it is exist tag name.
        translates :: Array on Position.
        duration   :: animation duration time. this parameter unit is 'free'. "eg1.) 1s"  "eg2.) 500ms"
        comletion  :: All Animation Ended Process. must it is null or function.
***/
function setOrderTransitionAnimeJs( name , translates , duration , delay , completion ) {
    var element = $("*[name=" + name + "]")
    var stage = 0
    function process() {
        anime({
            targets: "*[name=" + name + "]",
            translateX: translates[stage].x,
            translateY: translates[stage].y,
            duration: duration,
            delay: delay,
            easing: "easeInOutCubic",
            complete : function() {
                stage += 1
                if( stage < translates.length ) {
                    process()
                } else if( completion != null ){
                    completion()
                }
            }
        }); 
    }
    process()
}
/***
    method : setFlip
        description - this method is "flip" animation. this animation process only js calculation.
        name       :: target element search on this parameter. this argument must it is exist tag name and img elemental.
        imgSrc     :: put flipped img src.
        duration   :: animation duration time. this parameter unit is 'free'. "eg1.) 1s"  "eg2.) 500ms"
        comletion  :: All Animation Ended Process. must it is null or function.
***/
function setFlip( name , imgSrc , duration , delay , completion ) {
    var element = $("*[name=" + name + "]")
    var stage = 0
    function process() {
        var nextScaleX = stage == 0 ? 0 : 1
        var nextDelay = stage == 0 ? delay : "0ms"
        anime({
            targets: "*[name=" + name + "]",
            scaleX: nextScaleX ,
            duration: duration ,
            delay: nextDelay,
            easing: "easeInOutCubic",
            complete : function() {
                stage += 1
                if( stage == 1 ) {
                    element.attr("src", imgSrc );
                    process()
                } else if( completion != null ) {
                    completion()
                }
            }
        });
    }
    process()
}
