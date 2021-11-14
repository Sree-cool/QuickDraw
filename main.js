#score{
    float: left;
    margin-left: 5px;
    font-size: 20px;
    font-family: 'Oswald', sans-serif;
}
#timer{
    float: right;
    margin-right: 5px;
    font-size: 20px;
    font-family: 'Oswald', sans-serif;
}
body{
    background-color: rgb(255, 217, 0);
  }
  
  h1
  {
    font-family: 'Oswald';
    color:rgb(0, 0, 0);
    background-color: cornsilk;
  }
  
  #show_sketch
  {
    float:right;
  }
  
  #timer{
    float: right;
  }
  
  #sketch_to_be_drawn{
    color: red;
  }
  
  canvas 
    {
      border:2px solid white;
      border-radius:20px;
      margin-top:135px;
      animation-name: example;
      animation-duration: 4s;
      animation-iteration-count: infinite;
  }
  @keyframes example {
  
    from {box-shadow: 1px 1px 38px white;}
    to {box-shadow: 1px 1px 38px grey;}
  
  }
  
  
  p, span
  {
      padding-top:10px;
      font-family: 'Oswald';
      font-size:25px;
  }
