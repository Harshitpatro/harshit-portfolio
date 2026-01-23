
import React from 'react';

const HUDDecorator: React.FC = () => {
  return (
    <>
      <div className="fixed top-24 left-0 h-[70vh] w-12 border-r border-white/5 hidden lg:flex flex-col items-center justify-between py-12 pointer-events-none z-40">
        <span className="text-[10px] text-white/20 rotate-90 uppercase tracking-[0.5em] whitespace-nowrap">SYSTEM_INIT_SEQ</span>
        <div className="space-y-4">
          <div className="w-1 h-1 bg-primary"></div>
          <div className="w-1 h-1 bg-white/20"></div>
          <div className="w-1 h-1 bg-white/20"></div>
        </div>
        <span className="text-[10px] text-white/20 rotate-90 uppercase tracking-[0.5em]">V.4.0.2</span>
      </div>

      <div className="fixed top-24 right-0 h-[70vh] w-12 border-l border-white/5 hidden lg:flex flex-col items-center justify-between py-12 pointer-events-none z-40">
        <div className="w-4 h-4 text-white/20">
          <span className="material-symbols-outlined text-sm">settings_input_component</span>
        </div>
        <div className="h-32 w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
        <div className="w-4 h-4 text-white/20">
          <span className="material-symbols-outlined text-sm">qr_code_2</span>
        </div>
      </div>
    </>
  );
};

export default HUDDecorator;
