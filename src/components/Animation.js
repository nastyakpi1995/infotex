import React from 'react';
import './Animation.css'

const Animation = () => {
  return (
    <div className="mc__VsScreen_box_animation">
    <div className="mc__VsScreen_wall_animation_right">
      <img className="mc__VsScreen__img-right_animation" alt="" src="img/metal.jpg" />
    </div>
    
    <div className="mc__VsScreen_wall_animation">
      <img alt="" className="mc__VsScreen__img-left_animation" src="img/metal.jpg" />
    </div>
  </div>
  )
}

export default Animation;