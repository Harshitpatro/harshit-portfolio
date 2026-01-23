
import React from 'react';

const Skills: React.FC = () => {
  const categories = [
    {
      id: '01',
      name: 'Programming Languages',
      level: 'LVL_EXPERT',
      icon: 'terminal',
      skills: [
        { name: 'C++ / ROS2', val: 90 },
        { name: 'Python / AI', val: 85 },
        { name: 'C / Embedded', val: 60 },
      ]
    },
    {
      id: '02',
      name: 'Robotics & Autonomy',
      level: 'LVL_EXPERT',
      icon: 'precision_manufacturing',
      skills: [
        { name: 'ROS2_Integration', val: 92 },
        { name: 'SLAM_Algorithms', val: 88 },
        { name: 'Path_Planning', val: 85 },
      ]
    },
    {
      id: '03',
      name: 'Hardware & Sensors',
      level: 'LVL_ADVANCED',
      icon: 'memory',
      skills: [
        { name: 'LiDAR_Integration', val: 90 },
        { name: 'Jetson_Orin_NX', val: 85 },
        { name: 'Arduino_ESP32', val: 82 },
      ]
    },
    {
      id: '04',
      name: 'Tools & Frameworks',
      level: 'LVL_EXPERT',
      icon: 'settings_applications',
      skills: [
        { name: 'Docker_Virtualization', val: 80 },
        { name: 'Linux_System', val: 90 },
        { name: 'Git_Version_Control', val: 60 },
      ]
    },
    {
    id: '05',
    name: 'Flight Control Systems',
    level: 'LVL_EXPERT',
    icon: 'flight',
    skills: [
      { name: 'PX4', val: 70 },
      { name: 'ArduPilot', val: 90 },
      { name: 'Betaflight', val: 70 },
    ]
  },
  {
    id: '06',
    name: 'Perception & Simulation',
    level: 'LVL_ADVANCED',
    icon: 'visibility',
    skills: [
      { name: 'Image_Processing (OpenCV)', val: 70 },
      { name: 'SLAM_Validation', val: 85 },
      { name: 'Gazebo_Simulation', val: 90 },
    ]
  }
  ];

  return (
    <div className="flex-1 flex flex-col items-center py-12 px-6 md:px-20 lg:px-40 max-w-[1400px] mx-auto w-full">
      <div className="w-full mb-12 flex flex-col md:flex-row justify-between items-end gap-6 border-l-2 border-primary pl-6 py-2">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <span className="size-2 bg-primary rounded-full animate-pulse shadow-[0_0_8px_#259df4]"></span>
            <p className="text-primary text-[10px] font-bold tracking-widest font-mono">ENCRYPTED DATA STREAM_</p>
          </div>
          <h1 className="text-white text-5xl font-black leading-none tracking-tighter italic uppercase glitch-text">Tactical_Skills_HUD</h1>
          <div className="flex gap-4 mt-2">
            <p className="text-primary/60 text-[10px] font-mono leading-normal uppercase">System: Optimized</p>
            <p className="text-primary/60 text-[10px] font-mono leading-normal uppercase">Auth: Bruce_W</p>
            <p className="text-primary/60 text-[10px] font-mono leading-normal uppercase">Location: Gotham_Base</p>
          </div>
        </div>
        <div className="flex flex-col items-end gap-1 font-mono text-[10px] text-white/40 uppercase">
          <div className="flex gap-1 mb-1">
            <div className="h-1 w-8 bg-primary"></div>
            <div className="h-1 w-2 bg-primary/30"></div>
            <div className="h-1 w-2 bg-primary/30"></div>
          </div>
          <p>Vitals: Stable</p>
          <p>Sync: 100%</p>
        </div>
      </div>

      <div className="relative w-full flex justify-center mb-16">
        <div className="z-20 p-8 border border-primary/40 bg-background-dark/80 backdrop-blur-xl rounded-lg text-center relative group">
          <div className="absolute -top-2 -left-2 size-4 border-t-2 border-l-2 border-primary"></div>
          <div className="absolute -bottom-2 -right-2 size-4 border-b-2 border-r-2 border-primary"></div>
          <span className="text-primary font-mono text-[10px] block mb-2 tracking-[0.3em] uppercase">Specialization</span>
          <h2 className="text-white text-2xl font-bold tracking-widest uppercase">ROS 2 & SLAM Specialist</h2>
          <div className="mt-4 flex justify-center gap-1">
            <div className="w-12 h-1 bg-primary/20"></div>
            <div className="w-12 h-1 bg-primary shadow-[0_0_8px_#259df4]"></div>
            <div className="w-12 h-1 bg-primary/20"></div>
          </div>
        </div>
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent -z-10"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full relative">
        {categories.map((cat) => (
          <section key={cat.id} className="flex flex-col gap-6 p-6 rounded bg-primary/5 border border-primary/20 backdrop-blur-sm relative overflow-hidden group hover:border-primary transition-all">
            <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="material-symbols-outlined text-6xl text-primary">{cat.icon}</span>
            </div>
            <div className="flex items-center justify-between mb-4 border-b border-primary/20 pb-2">
              <h3 className="text-white text-lg font-bold tracking-widest uppercase font-mono">
                <span className="text-primary">[{cat.id}]</span> {cat.name}
              </h3>
              <span className="text-[10px] font-mono text-primary/60 tracking-widest">{cat.level}</span>
            </div>
            <div className="space-y-6">
              {cat.skills.map((s) => (
                <div key={s.name} className="flex flex-col gap-2">
                  <div className="flex justify-between items-center text-[10px] font-mono tracking-widest uppercase">
                    <span className="text-white/80">{s.name}</span>
                    <span className="text-primary">{s.val}%</span>
                  </div>
                  <div className="flex gap-1 h-3">
                    {[...Array(10)].map((_, i) => {
                      const isActive = i < Math.round(s.val / 10);
                      return (
                        <div 
                          key={i} 
                          className={`flex-1 transition-all duration-500 ${
                            isActive ? 'bg-primary shadow-[0_0_5px_rgba(37,157,244,0.6)]' : 'bg-primary/10 border border-primary/20'
                          }`}
                          style={{ transitionDelay: `${i * 50}ms` }}
                        ></div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="w-full mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 p-6 border border-primary/20 bg-primary/5 rounded">
        {[
          { label: 'CPU_LOAD', val: '14.2%' },
          { label: 'DRONE_SWARM', val: 'ACTIVE_8' },
          { label: 'NETWORK', val: 'STABLE_SECURED', color: 'text-green-500' },
          { label: 'UPTIME', val: '14,208_HOURS' },
        ].map((stat) => (
          <div key={stat.label} className="flex flex-col">
            <span className="text-[10px] text-primary/60 font-mono tracking-widest uppercase">{stat.label}</span>
            <span className={`text-white text-sm font-bold uppercase ${stat.color || ''}`}>{stat.val}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
