import React from 'react';
import Svg, {Path, Rect} from 'react-native-svg';

const Line = props => {
  let {
    width = 1,
    height = 171,
    color = 'white',
    fill = 'none',
    style,
    opacity = 0.4,
  } = props;
  return (
    <Svg
      width={width}
      height={height}
      //   viewBox="0 0 1 171"
      fill={fill}
      style={style}
      xmlns="http://www.w3.org/2000/svg">
      <Rect opacity={opacity} width={width} height={height} fill={color} />
    </Svg>
  );
};

export default Line;
