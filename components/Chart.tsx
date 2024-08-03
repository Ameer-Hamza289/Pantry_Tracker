'use client';
import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

const data = [
  { id: 0, value: 10, label: 'All Items' },
  { id: 1, value: 9, label: 'Fresh Items' },
  { id: 2, value: 1, label: 'Expired Items' },
];

export default function PieActiveArc() {
  return (
    <PieChart
      series={[
        {
          data,
          highlightScope: { faded: 'global', highlighted: 'item' },
          faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
        },
      ]}
      height={200}
      colors={['red','green','yellow']}
    />
  );
}
