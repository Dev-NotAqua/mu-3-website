import React from 'react';

const HierarchyPage = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Global Hierarchy</h1>
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Executives</h2>
          <ul className="space-y-2">
            <li>@[FL] Task Force Director - "Sun" - FL</li>
            <li>@[CFL] Task Force Deputy Director - "Sky" - CFL</li>
            <li>@[ADV] Task Force Advisor - "Blade" - 3rd-in-Command</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">High Command</h2>
          <ul className="space-y-2">
            <li>@[HoO] Head of Operations - Handpicked - Head High Command</li>
            <li>@[VCOM] Vice Commander - Handpicked - CDL</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">High Ranks</h2>
          <ul className="space-y-2">
            <li>@[JCOM] Junior Commander - 530 points + 10 deployments hosted - HR</li>
            <li>@[GEN] General - 480 points - HR</li>
            <li>@[CPT] Captain - 430 points + 3 deployments hosted - HR</li>
            <li>@[CLN] Colonel - 380 points - HR</li>
            <li>@[MAJ] Major - 330 points + Pass HR Applications - HR</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HierarchyPage;