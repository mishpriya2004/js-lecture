import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

function Login() {
  let [userData, setUserData] = useState({
    name: "",
    email: "",
  });
  console.log("🚀 ~ Login ~ userData:", userData)

  const onChangeHandler = (e,key) => {
    console.log("🚀 ~ onChangeHandler ~ key:", key)
    setUserData({...userData, [key]: e.target.value });
  };


  return (
    <div
      className="flex justify-center items-center h-[calc(100vh - 48px)]"
      style={{ minHeight: "calc(100vh - 48px)" }}
    >
      <form className="w-full border bg-gray-200  border-black p-3 rounded-xl max-w-sm">
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="form-name">Name</FieldLabel>
            <Input
            // value={}
              className="border border-gray-500"
              id="form-name"
              type="text"
              placeholder="Evil Rabbit"
              required
              onChange={(e) => onChangeHandler(e,"name")}
            />
          </Field>
          <Field>
            <FieldLabel htmlFor="form-email">Email</FieldLabel>
            <Input
              className="border border-gray-500"
              id="form-email"
              type="email"
              placeholder="john@example.com"
              onChange={(e)=>onChangeHandler(e,"email")}
            />
            <FieldDescription>
              We&apos;ll never share your email with anyone.
            </FieldDescription>
          </Field>
          {/* <div className="grid grid-cols-2 gap-4">
          <Field>
            <FieldLabel htmlFor="form-phone">Phone</FieldLabel>
            <Input  className="border border-gray-500" id="form-phone" type="tel" placeholder="+1 (555) 123-4567" />
          </Field>
          <Field>
            <FieldLabel htmlFor="form-country">Country</FieldLabel>
            <Select  className="border border-gray-500" defaultValue="us">
              <SelectTrigger   className="border border-gray-500" id="form-country">
                <SelectValue />
              </SelectTrigger>
              <SelectContent  className="border border-gray-500">
                <SelectItem value="us">United States</SelectItem>
                <SelectItem value="uk">United Kingdom</SelectItem>
                <SelectItem value="ca">Canada</SelectItem>
              </SelectContent>
            </Select>
          </Field>
        </div>
        <Field>
          <FieldLabel htmlFor="form-address">Address</FieldLabel>
          <Input  className="border border-gray-500" id="form-address" type="text" placeholder="123 Main St" />
        </Field> */}
          <Field orientation="horizontal">
            <Button type="button" variant="outline">
              Cancel
            </Button>
            <Button type="submit">Submit</Button>
          </Field>
        </FieldGroup>
      </form>
    </div>
  );
}

export default Login;


