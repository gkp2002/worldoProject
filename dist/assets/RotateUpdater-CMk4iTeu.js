import{s as a,G as c,H as i,J as r,ab as u}from"./index-BVr5DAqn.js";import{V as f}from"./ValueWithRandom-DcbDW4ON.js";class h{constructor(){this.enable=!1,this.speed=0,this.decay=0,this.sync=!1}load(e){e&&(e.enable!==void 0&&(this.enable=e.enable),e.speed!==void 0&&(this.speed=a(e.speed)),e.decay!==void 0&&(this.decay=a(e.decay)),e.sync!==void 0&&(this.sync=e.sync))}}class l extends f{constructor(){super(),this.animation=new h,this.direction="clockwise",this.path=!1,this.value=0}load(e){e&&(super.load(e),e.direction!==void 0&&(this.direction=e.direction),this.animation.load(e.animation),e.path!==void 0&&(this.path=e.path))}}const d=2,m=Math.PI*d,b=1,y=360;class p{constructor(e){this.container=e}init(e){const t=e.options.rotate;if(!t)return;e.rotate={enable:t.animation.enable,value:c(i(t.value)),min:0,max:m},e.pathRotation=t.path;let n=t.direction;switch(n==="random"&&(n=Math.floor(r()*d)>0?"counter-clockwise":"clockwise"),n){case"counter-clockwise":case"counterClockwise":e.rotate.status="decreasing";break;case"clockwise":e.rotate.status="increasing";break}const o=t.animation;o.enable&&(e.rotate.decay=b-i(o.decay),e.rotate.velocity=i(o.speed)/y*this.container.retina.reduceFactor,o.sync||(e.rotate.velocity*=r())),e.rotation=e.rotate.value}isEnabled(e){const t=e.options.rotate;return t?!e.destroyed&&!e.spawning&&t.animation.enable&&!t.path:!1}loadOptions(e,...t){e.rotate||(e.rotate=new l);for(const n of t)e.rotate.load(n==null?void 0:n.rotate)}update(e,t){this.isEnabled(e)&&e.rotate&&(u(e,e.rotate,!1,"none",t),e.rotation=e.rotate.value)}}export{p as RotateUpdater};
