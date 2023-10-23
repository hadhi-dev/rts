import { lazy } from 'react';

export const moduleConfig = {
  1: lazy(() => import('../Modules/Dashboard')),
  2: lazy(() => import('../Modules/SwingDoorWardrobe')),
  3: lazy(() => import('../Modules/Settings.js')),
};
