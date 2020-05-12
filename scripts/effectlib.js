// Shortcuts for common draw methods used in effects.
// Lib by JerichoFletcher
module.exports = {
  outlineCircle(x, y, col, thickness, radius){
    Draw.color(col);
    Lines.stroke(thickness);
    Lines.circle(x, y, radius);
    Draw.color();
    Lines.stroke(1);
  },
  fillCircle(x, y, col, alpha, radius){
    Draw.color(col);
    Draw.alpha(alpha);
    Fill.circle(x, y, radius);
    Draw.color();
  },
  splashLines(x, y, col, thickness, distance, length, count, seed){
    Draw.color(col);
    Lines.stroke(thickness);
    Angles.randLenVectors(seed, count, distance, new Floatc2(){get: (a, b) => {
      Lines.lineAngle(x + a, y + b, Mathf.angle(a, b), length);
    }});
    Draw.color();
    Lines.stroke(1);
  },
};