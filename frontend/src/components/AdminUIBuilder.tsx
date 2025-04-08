import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import axios from "axios";

export default function AdminUIBuilder() {
  const [customization, setCustomization] = useState({
    theme_name: "default",
    primary_color: "#007bff",
    secondary_color: "#6c757d",
    font_family: "Arial, sans-serif",
    footer_text: "",
  });

  useEffect(() => {
    axios.get("/api/site-customization/1/").then((response) => {
      setCustomization(response.data);
    });
  }, []);

  const handleChange = (e) => {
    setCustomization({ ...customization, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    axios.put("/api/site-customization/1/", customization).then(() => {
      alert("Customization Saved!");
    });
  };

  return (
    <div className="p-6 space-y-4">
      <Card>
        <CardContent className="p-4 space-y-3">
          <h2 className="text-xl font-bold">Admin UI Builder</h2>
          <div>
            <label>Primary Color</label>
            <Input
              type="color"
              name="primary_color"
              value={customization.primary_color}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Secondary Color</label>
            <Input
              type="color"
              name="secondary_color"
              value={customization.secondary_color}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Font Family</label>
            <Input
              type="text"
              name="font_family"
              value={customization.font_family}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Footer Text</label>
            <Input
              type="text"
              name="footer_text"
              value={customization.footer_text}
              onChange={handleChange}
            />
          </div>
          <Button onClick={handleSave}>Save Changes</Button>
        </CardContent>
      </Card>
    </div>
  );
}
