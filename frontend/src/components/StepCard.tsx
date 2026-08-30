import React from 'react';
import { CardContent, CardTitle } from './ui/card';

interface StepCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const StepCard: React.FC<StepCardProps> = ({ icon, title, description }) => {
  return (

    <div className="glass-panel p-lg rounded-xl relative overflow-hidden group">
<div className="absolute -right-10 -top-10 w-32 h-32 bg-tertiary/10 rounded-full blur-2xl group-hover:bg-tertiary/20 transition-all"></div>
<div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center mb-md border border-white/5">
<span className=" text-tertiary text-2xl">
    {icon}
</span>
</div>
<CardTitle  className="mb-sm text-lg">{title}</CardTitle>
<CardContent className=" text-sm text-on-surface-variant">{description}</CardContent>
</div>
  );
};

export default StepCard;