AFRAME.registerComponent("arrow", {
    schema:{
        rotation: {type: "string", default: "0 0 0"},
        scale: {type: "number", default: 0.5},
        src: {type: "string", default: "./assets/arrow.png"},

        from: {type: "string", default: "0 0 0"},
        to: {type: "string", default: "0 0 0"},
        dur: {type: "number", default: 1500}
    },
    init: function(){
        const {
            rotation, 
            scale, 
            src, 
            from, 
            to, 
            dur
        } = this.data;

        this.el.setAttribute("rotation", rotation);
        this.el.setAttribute("scale", {x:scale, y:scale});
        this.el.setAttribute("src", src);

        this.el.setAttribute("animation", {
            property: "position",
            from: from,
            to: to,
            loop: true,
            easing: "linear",
            dur: dur,
        });
    }
})