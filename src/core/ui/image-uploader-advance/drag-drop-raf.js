export default class DragDropRaf {
  constructor({element}) {
    if (!element) {
      console.error('cannot register DragDroper') //eslint-disable-line no-console
      return null
    }
    const { height, top, left } = element.getBoundingClientRect()
    this.itemId = element.dataset.itemId
    this.raf = null
    this.itemHeight = height
    this.element = element
    this.initPos = {x: left, y: top}
    this.currentPosY = 0 
    this.destination = 0
    this.threshold = 1
    this.rafPending = false;
    if (!this.disabled) {
      this.registerRAF()
    }

  }

  reset = () => {
    this.currentPosY = 0 
    this.destination = 0
    this.rafPending = false
    this.doTransform('0px')
  } 

  goUp = () =>  {
    if(!this.initPos) {
      return;
    }

    this.destination = - this.itemHeight
    if(this.rafPending) {
      return;
    }

    this.rafPending = true;

    window.raf(this.onAnimFrame);
  }

  goDown = () => {
    if(!this.initPos) {
      return;
    }

    this.destination = this.itemHeight

    if(this.rafPending) {
      return;
    }

    this.rafPending = true;

    window.raf(this.onAnimFrame);

  }

  goNormal = () => {
    if(!this.initPos) {
      return;
    }

    this.destination = 0

    if(this.rafPending) {
      return;
    }

    this.rafPending = true;
    window.raf(this.onAnimFrame);
  }

  onAnimFrame = () => {
    if (!this.rafPending) {
      return
    }

    const dy = this.destination - this.currentPosY
    this.currentPosY += dy/10

    if (Math.abs(dy) > this.threshold) {
      const ty = this.currentPosY + 'px';
      this.doTransform(ty)
      window.raf(this.onAnimFrame);
    } else {
      const ty = this.destination + 'px';
      this.doTransform(ty)
      this.rafPending = false
    }
      
  }

  doTransform = (ty) => {
    const transformStyle = 'translateY('+ty+')';
    this.element.style.webkitTransform = transformStyle;
    this.element.style.MozTransform = transformStyle;
    this.element.style.msTransform = transformStyle;
    this.element.style.transform = transformStyle;
  }

  registerRAF = () => {
    window.raf = window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      function(cb) {window.setTimeout(cb, 1000/60)}
  }
}
