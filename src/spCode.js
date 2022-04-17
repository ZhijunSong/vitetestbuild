
export const spCode =  `
let i;
let scale = 2.0;
let s = getSpace();
let soundLevel = input();
let n = 0.5*noise(scale * s +time*0.02);
let hue = abs(sin(time*.2));
let saturation = 1;
let value = 0.9;

let col = hsv2rgb(vec3(hue+(soundLevel+s.z*5)+n, saturation, value+n));
color(col)
metal(1)
shine(0.8)
rotateY(time)
for(i=0;i<2;i++){
mirrorZ(); 
rotateX(n)
rotateY(time)  
displace(0.05+n,0.1,0);  
torus(0.3+0.2*sin(time)*0.01,0.05+n); 
mirrorXYZ();  
}


`;