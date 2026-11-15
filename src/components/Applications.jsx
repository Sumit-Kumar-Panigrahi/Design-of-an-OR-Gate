import React from 'react';
import { Flame, ShieldAlert, Cpu, Bell, ExternalLink } from 'lucide-react';

export default function Applications() {
  const applications = [
    {
      title: "Fire Alarm Systems",
      icon: Flame,
      color: "text-amber-600 bg-amber-50 border-amber-200",
      inputs: { a: "Smoke Detector", b: "Thermal / Heat Sensor", y: "Alarm Siren" },
      description:
        "In commercial buildings, an alarm must sound if either smoke is detected OR abnormal heat rises. Connecting both detector outputs to an OR gate ensures the siren activates if either hazard is detected.",
      logicEquation: "Alarm = Smoke + Heat"
    },
    {
      title: "Security Alarm Systems",
      icon: ShieldAlert,
      color: "text-blue-600 bg-blue-50 border-blue-200",
      inputs: { a: "Door Reed Switch", b: "Window Vibration Sensor", y: "Intruder Alert" },
      description:
        "Building perimeter monitoring relies on OR logic. If a burglar forces open a door (Sensor A) OR shatters a window (Sensor B), the OR gate output triggers the central security dispatch immediately.",
      logicEquation: "Alert = Door_Trip + Window_Trip"
    },
    {
      title: "Digital Control Systems",
      icon: Cpu,
      color: "text-indigo-600 bg-indigo-50 border-indigo-200",
      inputs: { a: "Manual Emergency Stop", b: "Thermal Overload Relay", y: "Motor Shutdown" },
      description:
        "Industrial motors must halt if an operator hits the emergency stop button OR if the overload relay detects excessive coil temperature. An OR gate provides fail-safe shutoff capability.",
      logicEquation: "Motor_Cutoff = E_Stop + Overload"
    },
    {
      title: "Sensor-Based Alert Systems",
      icon: Bell,
      color: "text-emerald-600 bg-emerald-50 border-emerald-200",
      inputs: { a: "Low Engine Oil Pressure", b: "Coolant Overheating", y: "Check Engine Warning" },
      description:
        "Automotive instrument clusters illuminate the master warning lamp if critical oil pressure drops below safe threshold OR coolant temperature climbs into danger territory.",
      logicEquation: "Warning_Lamp = Low_Oil + Overheat"
    }
  ];

  return (
    <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm">
      <div className="flex items-center space-x-3 mb-6">
        <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
          <Bell className="w-5 h-5" />
        </div>
        <div>
          <h2 className="text-lg font-bold text-slate-900 tracking-tight">Real-World Engineering Applications</h2>
          <p className="text-xs text-slate-500">Practical implementations of OR logic in industrial and commercial electronics</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {applications.map((app, index) => {
          const Icon = app.icon;
          return (
            <div
              key={index}
              className="flex flex-col justify-between bg-slate-50/70 rounded-xl p-5 border border-slate-200/70 hover:border-blue-300 hover:shadow-sm transition-all"
            >
              <div>
                <div className="flex items-center space-x-2.5 mb-3">
                  <span className={`p-2 rounded-lg border ${app.color}`}>
                    <Icon className="w-4 h-4" />
                  </span>
                  <h3 className="font-bold text-slate-900 text-sm">{app.title}</h3>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {app.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200 space-y-2">
                <div className="text-[11px] font-mono text-slate-500 space-y-1">
                  <div><strong>Input A:</strong> {app.inputs.a}</div>
                  <div><strong>Input B:</strong> {app.inputs.b}</div>
                  <div className="text-blue-700 font-semibold"><strong>Output Y:</strong> {app.inputs.y}</div>
                </div>

                <div className="bg-white rounded px-2.5 py-1 border border-slate-200 text-center font-mono text-[11px] font-bold text-slate-800">
                  {app.logicEquation}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

