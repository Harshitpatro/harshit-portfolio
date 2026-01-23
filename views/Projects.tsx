
import React from 'react';

const Projects: React.FC = () => {
  const projects = [
    {
      id: '001',
      title: 'Multi-Map Navigation (ROS 2 Humble)',
      desc: 'Autonomous mobile robot navigation system supporting multiple floor maps with real-time switching. Implements custom SLAM with multi-floor building traversal.',
      tags: ['ROS2', 'SLAM', 'Navigation', 'C++'],
      img: './images/001.jpg',
      stats: ['MAPPING: Real-time', 'ACCURACY: 99%'],
      github: 'https://github.com/Harshitpatro/MultiMapNav_ROS2_Humble'
    },
    {
      id: '002',
      title: 'LiDAR Autonomous Docking (ICP Algorithm)',
      desc: 'Precision docking system using Iterative Closest Point algorithm for autonomous robot-to-dock alignment. Implements robust point cloud registration.',
      tags: ['LiDAR', 'ICP', 'PYTHON', 'PCL'],
      img: './images/002.jpg',
      stats: ['PRECISION: ±5cm', 'LATENCY: 100ms'],
      github: 'https://github.com/Harshitpatro/Pallet_Docking_ICP.git'
    },
    {
      id: '003',
      title: 'Custom DWA Local Planner',
      desc: 'From-scratch implementation of Dynamic Window Approach local planner for ROS 2. Custom cost function optimization for efficient path planning.',
      tags: ['ROS2', 'PLANNING', 'C++', 'ALGORITHMS'],
      img: './images/003.jpg',
      stats: ['CYCLES: 20Hz', 'CPU: 12%'],
      github: 'https://github.com/Harshitpatro/custom_dwa_planner'
    },
    {
      id: '004',
      title: 'UAV Strategic Deconfliction System (4D Airspace)',
      desc: 'A 4D (space + time) UAV deconfliction system for shared airspace safety. Implements probabilistic conflict detection and intelligent path planning for automatic collision avoidance.',
      tags: ['UAV', 'DECONFLICTION', 'PATH_PLANNING', 'MONTE_CARLO', 'RRT'],
      img: './images/004.jpg',
      stats: ['DIMENSION: 4D','SIMULATIONS: 500/run','PLANNERS: A*, RRT, VO'],
      github: 'https://github.com/Harshitpatro/Flytbase_UAV_assignment/tree/main'
    },
    {
  id: '005',
  title: 'Nav2 Bot – ROS 2 Autonomous Navigation',
  desc: 'Complete ROS 2 autonomous navigation simulation using Gazebo, AMCL localization, and the Nav2 stack. Features stable map visualization, obstacle avoidance, and goal-based navigation.',
  tags: ['ROS2', 'NAV2', 'AMCL', 'GAZEBO', 'SIMULATION'],
  img: './images/005.jpg',
  stats: [
    'LOCALIZATION: AMCL',
    'PLANNING: Nav2',
    'CONTROL: 20Hz'
  ],
  github: 'https://github.com/Harshitpatro/nav2_bot'
},
{
  id: '006',
  title: 'ArduPilot Precision Landing with AprilTags',
  desc: 'Autonomous precision landing system using AprilTag detection and MAVLink integration for ArduPilot. Handles real-time tag detection, frame conversions, and triggers LAND mode for accurate touchdown.',
  tags: ['ROS2', 'Python', 'ArduPilot', 'AprilTag', 'MAVLink'],
  img: './images/006.jpg',
  stats: ['ACCURACY: ±10cm', 'UPDATE RATE: 10Hz', 'ALTITUDE RANGE: 2–10m'],
  github: 'https://github.com/Harshitpatro/precisionlanding'
}
  ];

  return (
    <div className="flex-1 flex flex-col px-8 md:px-20 lg:px-40 py-10">
      <div className="flex flex-wrap justify-between items-end gap-6 mb-12">
        <div className="flex min-w-72 flex-col gap-2">
          <div className="flex items-center gap-2 text-primary/60 text-xs font-bold tracking-[0.2em]">
            <span className="w-8 h-[1px] bg-primary/40"></span>
            SYSTEM_ARCHIVE
          </div>
          <h1 className="text-white text-5xl font-black leading-tight tracking-tighter uppercase">
            ACTIVE_PROJECTS <span className="text-primary">.04</span>
          </h1>
          <p className="text-white/40 text-sm font-mono tracking-widest uppercase">CLASSIFIED ROBOTICS RESEARCH & DEVELOPMENT SECTOR</p>
        </div>
        
        <button className="flex items-center justify-center rounded border border-primary/30 h-12 px-6 bg-primary/10 text-primary text-[10px] font-bold tracking-widest uppercase hover:bg-primary/20 transition-all">
          <span className="relative flex h-2 w-2 mr-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          SYS_STATUS: OPTIMAL
        </button>
      </div>

      <div className="flex gap-3 mb-10 overflow-x-auto pb-4 scrollbar-hide">
        {['ALL_SYSTEMS', 'ROS2', 'SLAM', 'LIDAR', 'AUTONOMY'].map((filter, i) => (
          <div key={filter} className={`flex h-9 shrink-0 items-center justify-center gap-x-2 rounded border px-5 cursor-pointer transition-colors ${i === 0 ? 'border-primary bg-primary/20' : 'border-white/10 bg-white/5 hover:border-primary/50'}`}>
            <p className="text-white text-[10px] font-bold tracking-widest uppercase">{filter}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((p) => (
          <div key={p.id} className="group relative border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden hover:border-primary transition-all duration-300">
            <div className="relative h-48 overflow-hidden border-b border-white/10">
              <div className="absolute top-2 right-2 z-20 flex flex-col items-end gap-1">
                {p.stats.map(s => (
                  <span key={s} className="text-[8px] font-mono text-primary bg-black/50 px-1 py-0.5">{s}</span>
                ))}
              </div>
              <img src={p.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60" alt={p.title} />
              <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 to-transparent"></div>
            </div>
            
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-primary text-[10px] font-bold tracking-widest uppercase mb-1">MODULE // {p.id}</p>
                  <h3 className="text-white text-xl font-bold tracking-tight uppercase">{p.title}</h3>
                </div>
                <div className="text-white/20">
                  <span className="material-symbols-outlined text-lg">settings_suggest</span>
                </div>
              </div>
              
              <p className="text-white/60 text-sm leading-relaxed mb-6 h-12 line-clamp-2">
                {p.desc}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {p.tags.map(tag => (
                  <span key={tag} className="text-[9px] font-bold border border-primary/30 bg-primary/5 text-primary px-2 py-0.5 tracking-tighter uppercase">{tag}</span>
                ))}
              </div>
              
              <div className="flex items-center justify-between pt-4 border-t border-white/5">
                <a href={p.github} target="_blank" rel="noopener noreferrer" className="flex gap-4">
                  <span className="material-symbols-outlined text-white/40 hover:text-primary transition-colors cursor-pointer text-xl">code</span>
                  <span className="material-symbols-outlined text-white/40 hover:text-primary transition-colors cursor-pointer text-xl">open_in_new</span>
                </a>
                <span className="text-[10px] text-white/20 font-mono">ID: {p.id}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
