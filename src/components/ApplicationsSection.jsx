import React from 'react';

export default function ApplicationsSection() {
  const applications = [
    {
      title: "Fire Alarm Systems",
      equation: "Alarm = Smoke + Heat",
      description: "An alarm siren must sound if either a smoke detector trips OR a thermal sensor registers abnormal temperature. An OR gate connects both detector signals so that either hazard immediately activates the siren."
    },
    {
      title: "Security Alarm Systems",
      equation: "Alert = Door_Sensor + Window_Sensor",
      description: "Building perimeter defense uses OR gates to aggregate discrete points of entry. If an intruder opens a magnetic door contact OR breaks a window vibration switch, the intrusion warning is triggered."
    },
    {
      title: "Motor Control Systems",
      equation: "Cutoff = E_Stop + Thermal_Overload",
      description: "Industrial equipment motors require fail-safe shutdown. If an operator presses the manual emergency stop push-button OR the motor's bimetallic thermal overload relay detects excessive heat, the motor halts instantly."
    },
    {
      title: "Digital Electronics Circuits",
      equation: "Chip: TTL 7432 (Quad 2-Input OR)",
      description: "OR gates are fundamental in address decoding, multiplexing, arithmetic logic units (ALUs), and memory chip-select circuits where a device must be enabled by any of several control buses."
    }
  ];

  return (
    <section id="applications" className="pt-6 border-t border-[#E7E7E3] space-y-4">
      <div className="max-w-3xl space-y-1">
        <h2 className="text-lg font-semibold text-[#202124] tracking-tight">
          Practical Applications
        </h2>
        <p className="text-sm text-[#777777]">
          Real-world implementations of logical disjunction in engineering and automated systems.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
        {applications.map((app, idx) => (
          <div
            key={idx}
            className="border border-[#E7E7E3] bg-white rounded-lg p-4 sm:p-5 flex flex-col justify-between space-y-3"
          >
            <div className="space-y-1">
              <h3 className="text-sm font-semibold text-[#202124]">
                {app.title}
              </h3>
              <p className="text-xs text-[#777777] leading-relaxed">
                {app.description}
              </p>
            </div>

            <div className="pt-2 border-t border-[#E7E7E3] font-mono text-[11px] text-[#24845B]">
              {app.equation}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
