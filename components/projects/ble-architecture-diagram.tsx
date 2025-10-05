import React from 'react';

const BLEArchitectureDiagram = () => {
  const asciiDiagram = `
┌──────────────────┐    ┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   ESP32 Device   │    │ BLE Comm Layer  │    │  Flutter Mobile  │    │ Firebase Cloud  │
│                  │    │                 │    │      App         │    │                 │
│ ┌──────────────┐ │    │ ┌─────────────┐ │    │ ┌──────────────┐ │    │ ┌─────────────┐ │
│ │   Sensors    │─┼────┼─│Advertisement│─┼────┼─│ BLE Scanner  │ │    │ │    Auth     │ │
│ │  • GPS       │ │    │ │• Device Info│ │    │ │• Discovery   │ │    │ │• Google     │ │
│ │  • Accel     │ │    │ │• RSSI       │ │    │ │• Connect     │ │    │ │• Sessions   │ │
│ │  • Battery   │ │    │ │• EID Beacon │ │    │ │• Background  │ │    │ │• Security   │ │
│ └──────────────┘ │    │ └─────────────┘ │    │ └──────────────┘ │    │ └─────────────┘ │
│                  │    │                 │    │                  │    │                 │
│ ┌──────────────┐ │    │ ┌─────────────┐ │    │ ┌──────────────┐ │    │ ┌─────────────┐ │
│ │ BLE Module   │─┼────┼─│GATT Services│─┼────┼─│ Data Layer   │─┼────┼─│Firestore DB │ │
│ │• Advertise   │ │    │ │• Read/Write │ │    │ │• Real-time   │ │    │ │• Trackers   │ │
│ │• Low Power   │ │    │ │• Notify     │ │    │ │• SQLite      │ │    │ │• Locations  │ │
│ │• GATT Server │ │    │ │• Buzzer Cmd │ │    │ │• Cache       │ │    │ │• History    │ │
│ └──────────────┘ │    │ └─────────────┘ │    │ └──────────────┘ │    │ └─────────────┘ │
│                  │    │                 │    │                  │    │                 │
│ ┌──────────────┐ │    │ ┌─────────────┐ │    │ ┌──────────────┐ │    │ ┌─────────────┐ │
│ │  WiFi/MCU    │─┼────┼─│ Network I/O │─┼────┼─│ UI Services  │ │    │ │ Cloud Sync  │ │
│ │• Config      │ │    │ │• Data Backup│ │    │ │• Notifications│ │    │ │• Real-time  │ │
│ │• OTA Updates │ │    │ │• Cloud Sync │ │    │ │• Map Display │ │    │ │• Analytics  │ │
│ │• Buzzer Ctrl │ │    │ │• Analytics  │ │    │ │• Settings    │ │    │ │• Backup     │ │
│ └──────────────┘ │    │ └─────────────┘ │    │ └──────────────┘ │    │ └─────────────┘ │
└──────────────────┘    └─────────────────┘    └──────────────────┘    └─────────────────┘

Data Flow:
ESP32 Sensors ──→ BLE Advertisement ──→ Flutter Scanner ──→ Firebase Database
     ↓                    ↓                      ↓                    ↓
WiFi Module ──→ Network Backup ──→ Local Storage ──→ Cloud Sync

Buzzer Control Flow:
Flutter App ──→ BLE GATT Write ──→ ESP32 Buzzer ──→ Audio Feedback
  `;

  return (
    <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg border">
      <div className="text-center mb-6">
        <h3 className="text-lg font-semibold mb-2">BLE Tracker System Architecture</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">Complete system data flow and component interaction</p>
      </div>
      
      <div className="bg-black dark:bg-gray-800 p-2 sm:p-4 rounded-lg overflow-x-auto w-full">
        <pre className="text-green-400 dark:text-green-300 text-[10px] sm:text-xs font-mono whitespace-pre leading-tight min-w-max">
{asciiDiagram}
        </pre>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
        <div className="bg-white dark:bg-gray-800 p-3 rounded border">
          <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">Key Components</h4>
          <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
            <li>• ESP32: BLE beacon with sensors & WiFi</li>
            <li>• Flutter: Cross-platform mobile scanner</li>
            <li>• Firebase: Authentication & cloud database</li>
            <li>• BLE GATT: Low-energy communication protocol</li>
          </ul>
        </div>
        <div className="bg-white dark:bg-gray-800 p-3 rounded border">
          <h4 className="font-semibold text-orange-600 dark:text-orange-400 mb-2">System Features</h4>
          <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
            <li>• Real-time device tracking & discovery</li>
            <li>• Remote buzzer control via BLE commands</li>
            <li>• Background scanning & notifications</li>
            <li>• Cloud sync with offline support</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BLEArchitectureDiagram;