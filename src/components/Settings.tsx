import { EditProfile, Preference, Security } from "./SettingsData"
import { useState } from "react";

const Settings = () => {

  const [viewMode, setViewMode] = useState<'edit' | 'preference' | 'security'>('edit');


  return (
    <div className="bg-white rounded-2xl sm:p-6 p-4">
      <div className="flex gap-4 border-b mb-6">
        <button
          onClick={() => setViewMode('edit')}
          className={` sm:px-2 py-1 transition-all duration-300 ${
            viewMode === "edit"
              ? "text-blue-600 border-b-[3px] border-blue-600 font-semibold"
              : "text-slate-400  hover:text-blue-600"
          }`}
        >
          Edit Profile
        </button>
        <button
          onClick={() => setViewMode('preference')}
          className={`sm:px-2 py-1 transition-all duration-300  ${
            viewMode === "preference"
              ? "text-blue-600 border-b-[3px] border-blue-600 font-semibold"
              : "text-slate-400  hover:text-blue-600"
          }`}
        >
          Preferences
        </button>
        <button
          onClick={() => setViewMode('security')}
          className={`sm:px-2 py-1 transition-all duration-300  ${
            viewMode === "security"
              ? "text-blue-600 border-b-[3px] border-blue-600 font-semibold"
              : "text-slate-400  hover:text-blue-600"
          }`}
        >
          Security
        </button>
      </div>
      {viewMode === 'edit' ? (
          <EditProfile />
        ) : viewMode === 'preference' ? 
        ( 
          <Preference /> 
        ) : (
          <Security />
        )}
    </div>
  )
}

export default Settings