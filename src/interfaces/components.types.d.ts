import React from 'react';

import { TASK_VIEW } from '@constants/app';

export type ButtonType = 'outline' | 'solid';
export type TaskViewType = keyof typeof TASK_VIEW;
export type SvgIconType = React.FC<React.SVGProps<SVGSVGElement>>;
export type LoadingType = 'idle' | 'pending' | 'succeeded' | 'failed';
