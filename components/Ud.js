//Rotación de terreno
AFRAME.registerComponent("udc", {
    schema: {
      speedOfRotation: { type: "number", default: 0 },
      pos:{type:"number", default:0}    
    },
    init: function () {
      window.addEventListener("keydown", (e) => {
        this.data.speedOfRotation=this.el.getAttribute("rotation")
        this.data.pos=this.el.getAttribute("position")
        var sor=this.data.speedOfRotation
        var poss=this.data.pos
        if (e.key === "ArrowRight") {
          if (sor.x < 10) {
            sor.x += 0.5;
            this.el.setAttribute("rotation",sor)
          }
        }
        if (e.key === "ArrowLeft") {
          if (sor.x> -10) {
            sor.x -= 0.5;
            this.el.setAttribute("rotation",sor)
          }
        }
        if (e.key === "ArrowUp") {
            if (sor.z < 20) {
              sor.z += 0.5;
              this.el.setAttribute("rotation",sor)
            }
            if (poss.y < 2) {
                poss.y += 0.01;
                this.el.setAttribute("position",poss)
              }
          }
          if (e.key === "ArrowDown") {
            if (sor.z > -10) {
              sor.z -= 0.5;
              this.el.setAttribute("rotation",sor)
            }
            if (poss.y < -2) {
                poss.y -= 0.01;
                this.el.setAttribute("position",poss)
              }
          }
      });
    }
})