import React from 'react';

import {
  OnboardingAnalytics,
  OnboardingManagement,
  OnboardingSafe,
  OnboardingKeep,
} from '../../assets';

export const ONBOARDING_PAGES = [
  {
    key: 0,
    image: <OnboardingManagement />,
    heading: 'Management Wallet',
    subTitle:
      'Store and manage all your digital currencies with ease in the smart wallet interface',
  },
  {
    key: 1,
    image: <OnboardingAnalytics />,
    heading: 'Analytics & Statistics',
    subTitle:
      'Just sending out a few ads is not going to do it. Not if you want to be a real success.',
  },
  {
    key: 2,
    image: <OnboardingSafe />,
    heading: 'Safe & Security',
    subTitle:
      'Change your cryptocurrency to another Digital assets or flat money safely, reliably',
  },
  {
    key: 3,
    image: <OnboardingKeep />,
    heading: 'Keep it organized',
    subTitle:
      'Buy and sell Bitcoin, other crypto currency with VISA and MasterCard right in the app',
  },
];
