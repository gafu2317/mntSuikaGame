export function preload (){
  this.load.image('boxbackground','../public/img/boxbackground.png');
  this.load.image(`boxframe`,`../public/img/boxframe.png`);
  this.load.image(`cloud`,`../public/img/cloud.jpg`);
  this.load.image(`evolutionRing`,`../public/img/evolutionRing.png`);
}

export function create (){
  this.cameras.main.setBackgroundColor('#fafad2'); // 例: 青色
  const boxbackground = this.add.image(650,410,'boxbackground');
  boxbackground.setScale(0.7);
  const boxframe = this.add.image(650,410,'boxframe');
  boxframe.setScale(0.7);
  const cloud = this.add.image(650,65,'cloud');
  cloud.setScale(0.7);
  const evolutionRing = this.add.image(1085,450,'evolutionRing');
  // evolutionRing.setScale(0.4);
}

export function update (){

}