import { useEffect, useState } from "react";

export default function AdminSettings() {
  const [settings, setSettings] = useState({ site_title: "", theme: "light", primary_color: "#007bff" });

  useEffect(() => {
    fetch("/api/settings/")
      .then((res) => res.json())
      .then(setSettings)
      .catch(console.error);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSettings({ ...settings, [e.target.name]: e.target.value });
  };

  const saveSettings = async () => {
    await fetch("/api/settings/", { method: "POST", body: JSON.stringify(settings) });
    alert("Settings saved!");
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Admin Settings</h1>
      <label>Site Title</label>
      <input type="text" name="site_title" value={settings.site_title} onChange={handleChange} className="border p-2" />
      <label>Theme</label>
      <select name="theme" value={settings.theme} onChange={handleChange}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
      <label>Primary Color</label>
      <input type="color" name="primary_color" value={settings.primary_color} onChange={handleChange} />
      <button onClick={saveSettings} className="bg-blue-500 p-2 text-white">Save</button>
    </div>
  );
}
