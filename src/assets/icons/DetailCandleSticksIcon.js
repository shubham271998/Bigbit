import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SVGComponent = (props) => {
      const {color = '#A365F4'} = props;
      return(
  <Svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.8488 14.1318C10.8616 12.4896 11.4504 10.6633 11.6056 8.80259H14.344C14.0264 11.3343 12.2312 13.4104 9.8488 14.1318ZM8.004 14.0045C6.852 12.4456 6.1752 10.6465 5.996 8.80259H10.0048C9.828 10.6457 9.1536 12.4448 8.004 14.0045ZM1.6552 8.80259H4.3944C4.5512 10.6641 5.1432 12.4921 6.1592 14.1342C3.7728 13.4152 1.9736 11.3375 1.6552 8.80259ZM5.8304 1.98332C4.9408 3.61027 4.4592 5.39656 4.3736 7.20126H1.6552C1.9584 4.78485 3.6096 2.78799 5.8304 1.98332ZM7.9736 1.5974C7.9808 1.58779 7.988 1.57819 7.9952 1.56858C8.0024 1.57819 8.0088 1.58779 8.016 1.5974C9.244 3.26999 9.9144 5.22041 10.0256 7.20126H5.9736C6.0824 5.22121 6.7496 3.27159 7.9736 1.5974ZM14.344 7.20126H11.6256C11.5376 5.39495 11.0528 3.60787 10.1592 1.97932C12.3856 2.78239 14.0408 4.78085 14.344 7.20126ZM8.684 0.0296973C3.9536 -0.372239 0 3.35887 0 8.00192C0 12.3511 3.468 15.8741 7.768 15.9966C12.3096 16.1279 16 12.476 16 8.00192C16 3.87209 12.8544 0.385993 8.684 0.0296973Z"
      fill={color}
    />
  </Svg>
);
}

export default SVGComponent;
