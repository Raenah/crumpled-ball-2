class Dustbin  {
 constructor (x,y)  {
     this.x=x
     this.y=y
     this.dustbinwidth=200
     this.dustbinheight=100
     this.wallthickness=20
     this.angle=0

     this.image=loadImage("dustbingreen.png")

this.bottombody=Bodies.rectangle(this.x,this.y,this.dustbinwidth,this.dustbinheight,{
    isStatic:true}) 

this.leftwallbody=Bodies.rectangle(this.x-this.dustbinwidth/2,this.y-this.dustbinheight/2,
this.wallthickness,this.dustbinheight,{isStatic:true})
Matter.Body.setAngle(this.leftwallbody,this.angle)

this.rightwallbody=Bodies.rectangle(this.x+this.dustbinwidth/2,this.y-this.dustbinheight/2,
    this.wallthickness,this.dustbinheight,{isStatic:true})

World.add(world,this.bottombody)
World.add(world,this.leftwallbody)
World.add(world,this.rightwallbody)

 }

display () {
    var bottompose=this.bottombody.position
    var poseleft=this.leftwallbody.position
    var poseright=this.rightwallbody.position
    push()
    translate(poseleft.x,poseleft.y)
    rectMode (CENTER)
    angleMode (RADIANS)
    fill(255)
    rotate(this.angle)
    rect(0,0,this.wallthickness,this.dustbinheight)
    pop()

    push()
    translate(poseright.x,poseright.y)
    rectMode (CENTER)
    angleMode (RADIANS)
    fill(255)
    rotate(-1*this.angle)
    rect(0,0,this.wallthickness,this.dustbinheight)
    pop()

    push()
    translate(bottompose.x,bottompose.y)
    rectMode (CENTER)
    angleMode (RADIANS)
    fill(255)
    rect(0,0,this.dustbinwidth,this.wallthickness)
    image(this.image,-this.dustbinheight/2,this.dustbinwidth,this.dustbinheight)
    pop()
}
}