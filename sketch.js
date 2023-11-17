function setup()
{
  createCanvas(400, 400);
}
//Methods go HERE
  function projectX( x, y, z)
  {
      return (x*fov)/(z+fov);
  }
  function projectY( x, y, z)
  {
      return (y*fov)/(z+fov);
  }
  function rotY( i, j)
  {
      return (int)((Math.cos(rot)*i)-(Math.sin(rot)*j));
  }
  function rotZ( i, j)
  {
      return (int)((Math.sin(rot)*i)+(Math.cos(rot)*j));
  }

    let fov = 500;
    let angle = 0;
    let rot = 0;
    let rotType = 2;
    let hostX = [-50, 50, 50, -50, -50, 50, 50, -50];
    let hostY = [-50, -50, -50, -50, 50, 50, 50, 50];
    let hostZ = [-50, -50, 50, 50, 50, 50, -50, -50];
    function draw()
    { 
        background(255)
        fill(20,0,0);
        rot += 0.05;
        x = [0,0,0,0,0,0,0,0];
        y = [0,0,0,0,0,0,0,0];
        z = [0,0,0,0,0,0,0,0];
        if(rotType == 1)
        {
            for(i = 0; i < 8; i++)
            {
                x[i] = hostX[i]+200;
            }
            for(i = 0; i < 8; i++)
            {
                y[i] = rotY(hostY[i], hostZ[i])+200;
            }
            for(i = 0; i < 8; i++)
            {
                z[i] = rotZ(hostY[i], hostZ[i]);
            }
        }
        else if(rotType == 2)
        {
            for(i = 0; i < 8; i++)
            {
                y[i] = hostY[i]+200;
            }
            for(i = 0; i < 8; i++)
            {
                x[i] = rotY(hostX[i], hostZ[i])+200;
            }
            for(i = 0; i < 8; i++)
            {
                z[i] = rotZ(hostX[i], hostZ[i]);
            }
        }
        for (let i = 0; i < 7; i += 1)
        {
          line(projectX(x[i], y[i], z[i]), projectY(x[i], y[i], z[i]), projectX(x[i+1], y[i+1], z[i+1]), projectY(x[i+1], y[i+1], z[i+1]));
        }
        for (let i = 5; i < 8; i++)
        {
            line(projectX(x[i], y[i], z[i]), projectY(x[i], y[i], z[i]), projectX(x[Math.abs(i-7)], y[Math.abs(i-7)], z[Math.abs(i-7)]), projectY(x[Math.abs(i-7)], y[Math.abs(i-7)], z[Math.abs(i-7)]));
        }
        line(projectX(x[7], y[7], z[7]), projectY(x[7], y[7], z[7]), projectX(x[4], y[4], z[4]), projectY(x[4], y[4], z[4]));
        line(projectX(x[0], y[0], z[0]), projectY(x[0], y[0], z[0]), projectX(x[3], y[3], z[3]), projectY(x[3], y[3], z[3]));
    }