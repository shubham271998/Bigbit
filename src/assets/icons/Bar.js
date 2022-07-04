import React from 'react';
import Svg, {Rect} from 'react-native-svg';

const Bar = props => {
  let {
    width = 6,
    height = 103,
    color = '#6418C3',
    fill = 'none',
    style,
  } = props;

  return (
    <Svg
      width={width}
      height={height}
      fill={fill}
      style={style}
      xmlns="http://www.w3.org/2000/svg">
      <Rect width={width} height={height} rx="3" fill={color} />
    </Svg>
  );
};

export default Bar;
