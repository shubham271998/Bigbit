import {
  DashboardAnalyst,
  DashboardBalance,
  DashboardManager,
  DashboardReport,
  DashboardTrading,
} from '../../assets';

export const DASHBOARD_DATA = [
  {image: DashboardManager, title: 'Manager', onclick: 'Manager'},
  {image: DashboardBalance, title: 'Currency', onclick: 'Currency'},
  {image: DashboardReport, title: 'Report', onclick: 'Report'},
  {image: DashboardAnalyst, title: 'Price', onclick: 'Price'},
  {image: DashboardTrading, title: 'Trading', onclick: 'Detail Trading'},
];

export const DROPDOWN_DATA = [
  {name: 'Today'},
  {name: 'Yesterday'},
  {name: 'Tomorrow'},
];
