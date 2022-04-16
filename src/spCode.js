
export const spCode =  `
rotateY(time * PI / 2 + time*.5);
rotateX(time * PI / 2);
metal(.5);
shine(.4);
color(getRayDirection()+.2);
rotateY(getRayDirection().y*4+time)
boxFrame(vec3(.4), .02);
expand(.02);
blend(nsin(time)*.6)
sphere(.2);


`;