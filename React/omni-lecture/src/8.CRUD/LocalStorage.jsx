import { Button } from "@/components/ui/button";

let userData = { name: "Urvish", age: 25 };

export default function LocalStorage() {
  const addDataToLocalStorage = () => {
    let convertedJsonData = JSON.stringify(userData);
    console.log(
      "🚀 ~ addDataToLocalStorage ~ convertedJsonData:",
      convertedJsonData,
    );
    localStorage.setItem("data", convertedJsonData);
    localStorage.setItem("token", "Hello Secret token");
  };

  const removeDataFromLocalStorage = () => {
    localStorage.clear();
  };

  const removeSingleDataFromLocalStorage = ()=>{
    localStorage.removeItem("token")
  }

  return (
    <div className="flex items-center flex-col p-12 ">
      <Button onClick={() => addDataToLocalStorage()}>Add Data</Button>

      <Button onClick={() => removeDataFromLocalStorage()}>Remove Data</Button>

      <Button onClick={() => removeSingleDataFromLocalStorage()}>Remove Token Only</Button>
    </div>
  );
}
