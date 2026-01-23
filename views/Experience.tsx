
import React from 'react';

const Experience: React.FC = () => {
  const experiences: Array<{
    ref: string;
    status: string;
    role: string;
    company: string;
    points?: string[];
    active: boolean;
    quote?: string;
    denied?: boolean;
  }> = [
    {
      ref: 'OCT 2025-PRESENT',
      status: 'ACTIVE',
      role: 'UAV Robotics Engineer',
      company: 'Aero360-Dronix Technology // Chennai',
      points: [
        'Implemented RealSense-based stereo SLAM and RTAB-Map for reliable RGB-D and point-cloud 3D mapping in GPS-denied warehouses.',
        'Enabled fully autonomous aisle navigation with stable odometry, precise localization, and safe operation in cluttered indoor environments.',
        'Designed automated slot-scanning routines with QR code detection for inventory identification and location verification.',
        'Deployed the complete perception, mapping, and decision pipeline on Jetson Orin NX, enabling real-time autonomous inspection.'
      ],
      active: true
    },
    {
      ref: 'APR 2025 - OCT 2025',
      status: 'ACTIVE',
      role: 'UAV Robotics Intern',
      company: 'Aero360-Dronix Technology // Chennai',
      points: [
        'Railway Inspection Micro Drone: Integrated dual EO/IR payload with electro-optical and thermal cameras for track inspection and anomaly detection.',
        'EMI-Resilient Navigation: Deployed Holybro Mosaic-H multi-band GNSS for stable positioning under high electromagnetic interference along railway corridors.',
        'Compact Autonomous Platform: Optimized micro-drone form factor for constrained spaces and close-range inspection missions.',
        'FPV Drone Autonomy: Integrated and tuned ArduPilot firmware on ORQA F405 for stable manual and autonomous flight modes.',
        'Low-Latency FPV & Video Streaming: Deployed Zeus VTX with FPV pipeline for real-time video transmission during search-and-rescue missions.',
        'EO/IR-Enabled Target Awareness: Integrated dual EO/IR cameras to support autonomous navigation and thermal target detection in low-visibility environments.'
      ],
      active: true
    },
    
    // {
    //   ref: '2024',
    //   status: 'COMPLETED',
    //   role: 'SIH 2024 Finalist',
    //   company: 'Smart India Hackathon // Problem Statement: Logistics Drone',
    //   points: [
    //     'Developed Indigenous Logistics Drone for autonomous payload delivery.',
    //     'Implemented autonomous mission planning and path optimization algorithms.',
    //     'Integrated real-time GPS-denied navigation using visual odometry.',
    //     'Team achieved finalist status among 4000+ participating teams nationwide.'
    //   ],
    //   active: false
    // },
    // {
    //   ref: '2023-2024',
    //   status: 'ARCHIVED',
    //   role: 'Robotics Research & Development',
    //   company: 'Academic Projects // IIT-Level Robotics',
    //   quote: '"Specialized in autonomous navigation systems, SLAM implementation, and real-time path planning for mobile robots in dynamic environments."',
    //   active: false,
    //   denied: true
    // }
  ];

  return (
    <div className="flex-1 flex flex-col items-center py-12 px-6">
      <div className="max-w-[1000px] w-full">
        <div className="flex flex-col gap-4 mb-16 px-4">
          <div className="flex items-center gap-2">
            <span className="w-12 h-1 bg-primary"></span>
            <span className="text-primary font-mono text-sm tracking-tighter">DECRYPTING ARCHIVAL MISSION DATA...</span>
          </div>
          <div className="flex flex-wrap justify-between items-end gap-4">
            <h1 className="text-white text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em] uppercase whitespace-nowrap">
              EXPERIENCE // <span className="text-primary">CLASSIFIED_LOGS</span>
            </h1>
            <div className="flex items-center gap-4 bg-white/5 border border-white/10 p-3 rounded">
              <div className="flex flex-col">
                <span className="text-[10px] text-white/40 font-mono">ENCRYPTION_LEVEL</span>
                <span className="text-xs font-bold text-accent-red font-mono">LEVEL 7 / TOP SECRET</span>
              </div>
              <span className="material-symbols-outlined text-accent-red">encrypted</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 px-4">
          {[
            { label: 'ACTIVE_YEARS', val: '01', progress: '80%', icon: 'calendar_today' },
            { label: 'DEVICES_DEPLOYED', val: '4+', progress: '65%', icon: 'precision_manufacturing' },
            { label: 'SECTORS_CLEARED', val: '04', progress: '95%', icon: 'map' }
          ].map(stat => (
            <div key={stat.label} className="group relative flex flex-col gap-2 rounded p-6 border border-white/10 bg-white/5 backdrop-blur-sm hover:border-primary/50 transition-all overflow-hidden">
              <div className="absolute -right-4 -top-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <span className="material-symbols-outlined text-8xl">{stat.icon}</span>
              </div>
              <p className="text-white/60 text-[10px] font-mono tracking-widest uppercase">{stat.label}</p>
              <p className="text-white tracking-tight text-4xl font-bold font-display">{stat.val}</p>
              <div className="w-full h-1 bg-white/10 mt-2">
                <div className="h-full bg-primary" style={{ width: stat.progress }}></div>
              </div>
            </div>
          ))}
        </div>

        <div className="relative px-4">
          <div className="absolute left-10 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2"></div>
          <div className="space-y-12 relative">
            {experiences.map((exp, i) => (
              <div key={exp.ref} className={`relative flex flex-col md:flex-row gap-8 items-start md:items-center ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-20">
                  <div className={`size-8 rounded-full bg-background-dark border-2 flex items-center justify-center transition-all ${exp.active ? 'border-primary shadow-[0_0_15px_rgba(37,157,244,0.5)]' : 'border-white/20'}`}>
                    <span className={`size-2 rounded-full ${exp.active ? 'bg-primary animate-pulse' : 'bg-white/20'}`}></span>
                  </div>
                </div>
                
                <div className={`w-full md:w-[45%] ${i % 2 !== 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                  <div className="relative group p-6 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm hover:border-primary/40 transition-all">
                    {exp.active && (
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-10 pointer-events-none overflow-hidden">
                        <span className="text-7xl font-black text-accent-red rotate-[-15deg] border-8 border-accent-red px-4 uppercase font-mono">CLASSIFIED</span>
                      </div>
                    )}
                    <p className={`font-mono text-[10px] mb-2 tracking-widest uppercase flex items-center gap-2 ${exp.active ? 'text-primary' : 'text-white/40'}`}>
                      <span className={`size-1.5 rounded-full ${exp.active ? 'bg-green-500' : 'bg-white/20'}`}></span>
                      REF: {exp.ref} | STATUS: {exp.status}
                    </p>
                    <h3 className="text-2xl font-bold text-white mb-1 uppercase tracking-tight">{exp.role}</h3>
                    <p className="text-white/60 font-medium mb-4 text-xs font-mono tracking-tighter uppercase">{exp.company}</p>
                    
                    {exp.points && (
                      <ul className="space-y-2 text-white/70 text-sm leading-relaxed list-none">
                        {exp.points.map((p, j) => (
                          <li key={j} className="flex gap-2">
                            <span className="text-primary font-mono">{j + 1 < 10 ? `0${j+1}` : j+1}.</span>
                            <span>{p}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    
                    {exp.quote && (
                      <p className="text-white/70 text-sm leading-relaxed italic border-l-2 border-primary/30 pl-4 font-mono">
                        {exp.quote}
                      </p>
                    )}

                    <div className="mt-6 flex justify-end">
                      <button className={`flex items-center gap-2 text-[10px] font-mono tracking-widest uppercase ${exp.denied ? 'text-white/30 cursor-not-allowed' : 'text-primary hover:underline'}`}>
                        <span>{exp.denied ? '[ ACCESS_DENIED ]' : '[ ACCESS_ENCRYPTED_FILES ]'}</span>
                        <span className="material-symbols-outlined text-sm">{exp.denied ? 'lock' : 'lock_open'}</span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="hidden md:block w-[45%]"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 px-4 pb-20">
          <div className="flex items-center gap-4 mb-8">
            <span className="material-symbols-outlined text-primary">priority_high</span>
            <h2 className="text-xl font-black uppercase tracking-[0.2em]">Featured_Mission_Reports</h2>
          </div>
          <div className="p-6 bg-white/5 border border-primary/20 rounded-lg relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-2 bg-primary/20 text-primary font-mono text-[8px] tracking-widest uppercase">Encrypted_Data_Burst</div>
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="w-full lg:w-1/3 aspect-video rounded border border-white/10 overflow-hidden relative">
                <img src="https://picsum.photos/600/400?tech" className="w-full h-full object-cover opacity-50 grayscale group-hover:scale-105 transition-transform duration-700" alt="Drone Mission" />
                <div className="absolute inset-0 bg-primary/5"></div>
              </div>
              <div className="flex-1 flex flex-col justify-between py-2">
                <div>
                  <p className="text-primary font-mono text-xs mb-1 tracking-widest uppercase">Mission_Log: Omega-7</p>
                  <h4 className="text-2xl font-bold text-white mb-4 uppercase">Autonomous Urban Response Grid</h4>
                  <p className="text-white/60 text-sm mb-4 leading-relaxed font-mono">
                    Engineered a mesh-networked fleet of response units capable of sub-100ms coordination. System successfully navigated dense urban obstacles during live testing in high-interference zones.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Neural_Pathfinding', 'Hydraulic_Sensing', 'C++ / ROS2'].map(tag => (
                    <span key={tag} className="px-2 py-1 bg-white/5 border border-white/10 rounded text-[10px] font-mono text-white/60 uppercase">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
