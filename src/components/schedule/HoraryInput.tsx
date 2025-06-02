import { FieldValues, useController, UseControllerProps } from "react-hook-form";
import { Days } from "../../types/days.ts";
import { useState } from "react";
import styles from "./HoraryInput.module.css"
import { ISubjectCreationData } from "../../interfaces/ISubjectCreationData.ts";

export type FormValues = any;

export default function HoraryInput(props: UseControllerProps<ISubjectCreationData>) {
  const { field, fieldState } = useController(props);
  const [daysSelected, setDaysSelected] = useState<Days[]>([]);
  function togglePickedDay(dayValue: Days) {
    if (daysSelected.includes(dayValue)) {
      const filteredDays = daysSelected.filter((day) => day !== dayValue);
      field.onChange(filteredDays);
      setDaysSelected(filteredDays);
    } else {
      field.onChange([...daysSelected, dayValue]);
      setDaysSelected([...daysSelected, dayValue]);
    }
  }

  return (
    <div className={`${styles.container} ${fieldState.invalid? styles.errorRing : ""}`}>
      <div className={`${styles.day} ${daysSelected.includes("MONDAY") ? styles.active : ""}`} onClick={() => togglePickedDay("MONDAY")}>Segunda</div>
      <div className={`${styles.day} ${daysSelected.includes("TUESDAY") ? styles.active : ""}`} onClick={() => togglePickedDay("TUESDAY")}>Terça</div>
      <div className={`${styles.day} ${daysSelected.includes("WEDNESDAY") ? styles.active : ""}`} onClick={() => togglePickedDay("WEDNESDAY")}>Quarta</div>
      <div className={`${styles.day} ${daysSelected.includes("THURSDAY") ? styles.active : ""}`} onClick={() => togglePickedDay("THURSDAY")}>Quinta</div>
      <div className={`${styles.day} ${daysSelected.includes("FRIDAY") ? styles.active : ""}`} onClick={() => togglePickedDay("FRIDAY")}>Sexta</div>
      <div className={`${styles.day} ${daysSelected.includes("SATURDAY") ? styles.active : ""}`} onClick={() => togglePickedDay("SATURDAY")}>Sábado</div>
    </div>
  );
}
