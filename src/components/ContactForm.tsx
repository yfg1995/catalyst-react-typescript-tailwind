"use client";

import { FC, useState } from "react";
import { Input } from "./Input";
import { TextArea } from "./Textarea";
import { Button } from "./Button";
import { SelectDropdown } from "./Dropdown/SelectDropdown";
import { states } from "@/data/dummyData";
import { Label } from "./Label";
import { useSegmentPath } from "@/context/SegmentPathContext";

export interface IContactForm {}

export const ContactForm: FC<IContactForm> = () => {
  const { firstSegment } = useSegmentPath();

  const [currentState, setCurrentState] = useState<{ [key: string]: string }>({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    message: "",
    state: "",
  });

  const handleOnChange =
    (
      key: "firstName" | "lastName" | "email" | "company" | "message" | "state"
    ) =>
    (value: string) => {
      setCurrentState((prev) => {
        const newState = prev;
        newState[key] = value;
        return newState;
      });
    };

  const handleSubmit = () => {
    console.log(currentState);
  };

  const borderColor =
    firstSegment === "oncology-cro"
      ? "var(--clr-cyan)"
      : firstSegment === "catalyst-flex"
      ? "var(--clr-green)"
      : "var(--clr-gold)";

  return (
    <form className="relative z-20" onSubmit={handleSubmit}>
      <Label htmlFor="firstname" title="First Name">
        <Input id="firstname" onSave={handleOnChange("firstName")} />
      </Label>

      <Label htmlFor="lastname" title="Last Name">
        <Input id="lastname" onSave={handleOnChange("lastName")} />
      </Label>

      <Label htmlFor="email" title="Email *">
        <Input id="email" onSave={handleOnChange("email")} />
      </Label>

      <Label htmlFor="company" title="Company">
        <Input id="company" onSave={handleOnChange("company")} />
      </Label>

      <Label htmlFor="message" title="Message">
        <TextArea id="message" onSave={handleOnChange("message")} />
      </Label>

      <SelectDropdown options={states} onSave={handleOnChange("state")} />

      <Button
        title="Submit"
        onClick={handleSubmit}
        className="font-semibold ml-auto mt-8 py-3"
        style={{ borderColor: borderColor }}
      />
    </form>
  );
};
