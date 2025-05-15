import { FieldValues, useController, UseControllerProps } from "react-hook-form";
import { Days } from "../../types/days.ts";
import { useState } from "react";
import styles from "./HoraryInput.module.css"
import { ISubjectCreationData } from "../../interfaces/ISubjectCreationData.ts";

export type FormValues = any;

export default function HoraryInput(props: UseControllerProps<FieldValues>, error: boolean = false) {
  const { field } = useController(props);
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
    <div className={`${styles.container} ${error? styles.errorRing : ""}`}>
      <div className={`${styles.day} ${daysSelected.includes("Segunda-feira") ? styles.active : ""}`} onClick={() => togglePickedDay("Segunda-feira")}>Segunda</div>
      <div className={`${styles.day} ${daysSelected.includes("Terça-feira") ? styles.active : ""}`} onClick={() => togglePickedDay("Terça-feira")}>Terça</div>
      <div className={`${styles.day} ${daysSelected.includes("Quarta-feira") ? styles.active : ""}`} onClick={() => togglePickedDay("Quarta-feira")}>Quarta</div>
      <div className={`${styles.day} ${daysSelected.includes("Quinta-feira") ? styles.active : ""}`} onClick={() => togglePickedDay("Quinta-feira")}>Quinta</div>
      <div className={`${styles.day} ${daysSelected.includes("Sexta-feira") ? styles.active : ""}`} onClick={() => togglePickedDay("Sexta-feira")}>Sexta</div>
      <div className={`${styles.day} ${daysSelected.includes("Sábado") ? styles.active : ""}`} onClick={() => togglePickedDay("Sábado")}>Sábado</div>
    </div>
  );
}
