import { useController, UseControllerProps } from "react-hook-form";
import { Days } from "../../types/days.ts";
import { useState } from "react";
import styles from "./HoraryInput.module.css"

export type FormValues = {
  days: Days[];
};

export default function HoraryInput(props: UseControllerProps<FormValues>) {
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
    <div className={styles.container}>
      <div className={styles.day} onClick={() => togglePickedDay("Segunda-feira")}>Segunda-feira</div>
      <div className={styles.day} onClick={() => togglePickedDay("Terça-feira")}>Terça-feira</div>
      <div className={styles.day} onClick={() => togglePickedDay("Quarta-feira")}>Quarta-feira</div>
      <div className={styles.day} onClick={() => togglePickedDay("Quinta-feira")}>Quinta-feira</div>
      <div className={styles.day} onClick={() => togglePickedDay("Sexta-feira")}>Sexta-feira</div>
      <div className={styles.day} onClick={() => togglePickedDay("Sábado")}>Sábado</div>
    </div>
  );
}
