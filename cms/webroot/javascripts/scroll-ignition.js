/***
    class : ScrollIgnition
        description - this class is ignition process define on windows scroll event.
        add    :: add new window scroll ignition event.
        start  :: start work.
***/
class ScrollIgnition {
    constructor() {
        this.distance = 0
        this.objects = []
    }
    setDistance( value ) {
        this.distance = value
    }
    /***
        name : target element search on this parameter. this argument must it is exist tag name.
        ignitionArea : scroll ignition point is "target element offset y" - "ignitionArea".
        executeProcess : iginition in bounds. please took process write on. 
    ***/
    add( targetName , ignitionArea , executeProcess ) {
        var obj = new Object();
        obj.targetName = targetName
        obj.ignitionArea = ignitionArea
        obj.executeProcess = executeProcess
        this.objects.push( obj )
    }
    start() {
        var distance = this.distance
        var objects = this.objects
        $(window).scroll(function (){
            for( var i = 0 ; i < objects.length ; i++ ) {
                if( objects[i] != null ) {
                    var element = $("*[name=" + objects[i].targetName + "]")
                    var top = element.offset().top;
                    console.log(top);
                    var scrollY = $(window).scrollTop();
                    var windowHeight = $(window).height();
                    var ignitionArea = objects[i].ignitionArea
                    // if ( top - ignitionArea - distance < scrollY && scrollY < top + ignitionArea + distance ){
                    if ( scrollY > top - windowHeight + ignitionArea + distance ){
                        objects[i].executeProcess()
                        delete objects[i]
                    }
                }
            }
        })
    }
}
