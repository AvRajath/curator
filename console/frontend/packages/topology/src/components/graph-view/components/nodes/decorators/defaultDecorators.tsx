import * as React from 'react';
import { Node } from '@patternfly/react-topology';
import EditDecorator from './EditDecorator';
import UrlDecorator from './UrlDecorator';
import MonitoringAlertsDecorator from './MonitoringAlertsDecorator';
import BuildDecorator from './BuildDecorator';

export const getEditDecorator = (element: Node, radius: number, x: number, y: number) => {
  return <EditDecorator key="edit" element={element} radius={radius} x={x} y={y} />;
};

export const getUrlDecorator = (element: Node, radius: number, x: number, y: number) => {
  return <UrlDecorator key="url" element={element} radius={radius} x={x} y={y} />;
};

export const getBuildDecorator = (element: Node, radius: number, x: number, y: number) => {
  return <BuildDecorator key="build" element={element} radius={radius} x={x} y={y} />;
};

export const getAlertsDecorator = (element: Node, radius: number, x: number, y: number) => {
  return <MonitoringAlertsDecorator key="alerts" element={element} radius={radius} x={x} y={y} />;
};
