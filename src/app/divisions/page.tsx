import React from 'react';

const DivisionsPage = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Divisions</h1>
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold mb-4">The Probes</h2>
          <ul className="space-y-2">
            <li>Investigates Enemy Groups and Individuals</li>
            <li>Threat Warnings</li>
            <li>Interrogations</li>
            <li>Arrest</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">The Thieves</h2>
          <ul className="space-y-2">
            <li>Focuses on close combat</li>
            <li>High Risk Missions</li>
            <li>Keeps Wealth a Secret</li>
            <li>Hostage Rescue</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DivisionsPage;