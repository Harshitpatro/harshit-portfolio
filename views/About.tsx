
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="flex-1 flex flex-col px-8 md:px-20 lg:px-40 py-10">
      <div className="flex flex-wrap gap-2 mb-8 items-center">
        <span className="text-slate-500 text-xs font-bold tracking-widest uppercase">Root</span>
        <span className="text-slate-400 text-xs">/</span>
        <span className="text-white text-xs font-bold tracking-widest uppercase">About_Me</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-7 flex flex-col gap-8">
          <div className="flex flex-col gap-4 p-6 border-l-2 border-primary bg-primary/5">
            <p className="text-white text-4xl md:text-5xl font-black leading-tight tracking-tighter uppercase font-display">
              [01] Robotics_Engineer
            </p>
            <p className="text-primary/70 text-sm font-bold tracking-[0.2em] uppercase">
              Autonomous Systems & ROS 2 Specialist
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-6">
            <div className="flex flex-col gap-2 border-t border-white/10 py-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse shadow-[0_0_5px_#259df4]"></span>
                <p className="text-white/40 text-[10px] font-bold tracking-widest uppercase">Professional Summary</p>
              </div>
              <p className="text-white/80 text-sm font-normal leading-relaxed">
                Robotics Engineer specializing in autonomous mobile robot navigation, perception, and system integration. Expertise in ROS 2, SLAM algorithms, and LiDAR-based autonomous systems with hands-on experience in hardware integration and real-world deployment.
              </p>
            </div>
            
            <div className="flex flex-col gap-2 border-t border-white/10 py-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="material-symbols-outlined text-primary text-sm">settings_input_component</span>
                <p className="text-white/40 text-[10px] font-bold tracking-widest uppercase">Current Focus</p>
              </div>
              <p className="text-white/80 text-sm font-normal leading-relaxed">
                UAV Robotics Engineer at Aero360-Dronix Technology, developing warehouse automation drones, railway inspection systems, and FPV drone platforms. Focus on autonomous navigation and advanced computer vision systems.
              </p>
            </div>

            <div className="flex flex-col gap-2 border-t border-white/10 py-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="material-symbols-outlined text-primary text-sm">terminal</span>
                <p className="text-white/40 text-[10px] font-bold tracking-widest uppercase">Core Technologies</p>
              </div>
              <p className="text-white/90 text-sm font-mono leading-relaxed bg-white/5 p-3 rounded border border-white/5">
                ROS2, C++, Python, SLAM, LiDAR, Jetson Orin, Computer Vision, Docker, embedded systems.
              </p>
            </div>

            <div className="flex flex-col gap-2 border-t border-white/10 py-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="material-symbols-outlined text-green-500 text-sm">sensors</span>
                <p className="text-white/40 text-[10px] font-bold tracking-widest uppercase">Education</p>
              </div>
              <p className="text-white/80 text-sm font-normal leading-relaxed italic">
                Odisha University of Technology and Research<br/>
                B.Tech Information Technology (2021-2025) • CGPA: 7.52 • SIH 2024 Finalist
              </p>
            </div>
          </div>

          <a href="./Harshit-PatroRobotics.pdf" download className="flex items-center gap-2 group text-primary font-bold text-xs tracking-widest uppercase mt-4 hover:opacity-70 transition-opacity">
            <span>Download_Resume.pdf</span>
            <span className="material-symbols-outlined group-hover:translate-y-1 transition-transform">download</span>
          </a>
        </div>

        <div className="lg:col-span-5 flex items-center justify-center relative">
          <div className="relative w-full aspect-square max-w-md">
            <div className="absolute inset-0 border-2 border-dashed border-primary/20 rounded-full animate-spin-slow"></div>
            <div className="absolute inset-8 border border-primary/40 rounded-full animate-spin-reverse"></div>
            
            <div className="absolute inset-16 flex items-center justify-center bg-primary/5 rounded-full overflow-hidden">
              <div className="w-full h-full opacity-30 animate-spin-slow" style={{ background: 'conic-gradient(from 0deg, transparent 0%, #259df4 100%)' }}></div>
              <div className="absolute inset-4 rounded-full bg-background-dark flex items-center justify-center border border-primary/20">
                <div className="w-4/5 h-4/5 flex flex-col items-center justify-center gap-2">
                  <span className="material-symbols-outlined text-primary text-6xl opacity-80">precision_manufacturing</span>
                  <div className="text-[10px] font-mono text-primary/60 text-center uppercase tracking-widest">
                    Lidar_Active<br/>
                    360_Sweep_OK
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute top-0 right-1/2 w-1 h-1 bg-primary rounded-full shadow-[0_0_8px_#259df4]"></div>
            <div className="absolute bottom-1/4 left-0 w-1 h-1 bg-primary rounded-full shadow-[0_0_8px_#259df4]"></div>
            <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-primary rounded-full shadow-[0_0_8px_#259df4]"></div>

            <div className="absolute -bottom-10 -right-10 w-48 h-48 border border-primary/20 bg-background-dark/80 backdrop-blur-sm p-1 rounded-lg overflow-hidden group">
              <img src="https://picsum.photos/400/400?grayscale" className="w-full h-full object-cover opacity-50 grayscale transition-transform duration-700 group-hover:scale-110" alt="Technical Visualization" />
              <div className="absolute top-0 left-0 text-[8px] p-1 font-mono text-primary bg-background-dark/80 border-r border-b border-primary/20">REF_001_SENSORS</div>
              <div className="absolute bottom-0 right-0 p-1">
                <div className="w-2 h-2 bg-primary animate-pulse rounded-full shadow-[0_0_5px_#259df4]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
