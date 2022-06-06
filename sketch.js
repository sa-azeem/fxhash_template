let w=1000
function setup() {
  preDraw()
  noLoop()
}
function draw() {
  background(0)
  postDraw()
}



function preDraw(){
  let seed=floor(999999*fxrand())
  randomSeed(seed);
  noiseSeed(seed);
  let tempcan=createCanvas(w, w);
  tempcan.parent('fulllscreen');
  rectMode(CENTER)
  pixelDensity(1)
  colorMode(HSB);
}
function postDraw(){
  print('by artist')
  print('twitter.com/artist')
  print('fxhash.xyz/u/artist')
  fxpreview()
}
