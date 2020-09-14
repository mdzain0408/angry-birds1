class ground{

 constructor(x,y,width,height) {

     var sta= {
         isStatic:true
     }
    
         this.body = Bodies.rectangle(x,y,width,height,sta);

         this.width = width;
         this.height = height;

         World.add(world,this.body);

         
 }


 display(){
       
       var posi= this.body.position;
       fill("white");
       rectMode(CENTER);
       rect(posi.x,posi.y,this.width,this.height);

 }

 
 



}