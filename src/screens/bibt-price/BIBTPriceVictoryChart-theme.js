import {assign} from 'lodash';

import palette from '../../theme/palette';

const sansSerif = "'Helvetica Neue', 'Helvetica', sans-serif";
const letterSpacing = 'normal';
const fontSize = 15;

const padding = 15;
const baseProps = {
  height: 400,
  padding: 50,
  width: 400,
};

const baseLabelStyles = {
  fill: palette.white,
  fontFamily: sansSerif,
  fontSize,
  letterSpacing,
  padding,
  stroke: 'transparent',
  strokeWidth: 0,
};

const centeredLabelStyles = assign({textAnchor: 'middle'}, baseLabelStyles);

const strokeDasharray = '100, 1';
const strokeLinecap = 'round';
const strokeLinejoin = 'round';

export default {
  area: assign(
    {
      style: {
        labels: baseLabelStyles,
      },
    },
    baseProps,
  ),
  axis: assign(
    {
      style: {
        axis: {
          fill: 'transparent',
          stroke: palette.white,
          strokeLinecap,
          strokeLinejoin,
          strokeWidth: 0,
        },
        axisLabel: assign({}, centeredLabelStyles, {
          padding,
          stroke: 'transparent',
        }),
        grid: {
          fill: 'none',
          pointerEvents: 'painted',
          stroke: palette.opacity_white,
          strokeDasharray,
          strokeLinecap,
          strokeLinejoin,
        },
        ticks: {
          fill: 'transparent',
          size: 2,
          strokeLinecap,
          strokeLinejoin,
          strokeWidth: 0,
        },
        tickLabels: assign({}, baseLabelStyles, {
          fill: palette.white,
        }),
      },
    },
    baseProps,
  ),

  errorbar: assign(
    {
      borderWidth: 8,
      style: {
        data: {
          fill: 'transparent',
          opacity: 1,
          stroke: palette.white,
          strokeWidth: 2,
        },
        labels: baseLabelStyles,
      },
    },
    baseProps,
  ),
  voronoi: assign(
    {
      style: {
        data: {
          fill: 'transparent',
          stroke: 'transparent',
          strokeWidth: 2,
        },
        labels: assign({}, baseLabelStyles, {
          padding: 5,
          pointerEvents: 'none',
        }),
        flyout: {
          strokeWidth: 1,
          fill: palette.white,
          pointerEvents: 'none',
        },
      },
    },
    baseProps,
  ),
};
