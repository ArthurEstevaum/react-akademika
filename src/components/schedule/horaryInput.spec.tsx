import { describe, expect, it, vi } from "vitest";
import { useForm } from "react-hook-form";
import { Days } from "../../types/days.ts";
import HoraryInput from "./HoraryInput.tsx";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

const mockSubmit = vi.fn();
type FormValues = {
  days: Days[];
};

const Wrapper = () => {
  const { control, handleSubmit } = useForm<FormValues>();

  return (
    <form onSubmit={handleSubmit(mockSubmit)}>
      <HoraryInput name="days" control={control} />
      <input type="submit" aria-label="submitInput" />
    </form>
  );
};

describe("Horary input component", () => {
  it("should pass the selected day to form hook", async () => {
    render(<Wrapper />);
    const monday = screen.getByText("Segunda-feira");
    fireEvent.click(monday);

    fireEvent.click(screen.getByLabelText("submitInput"));

    await waitFor(() => {
      expect(mockSubmit).toHaveBeenCalledOnce();
    });

    expect(mockSubmit).toHaveBeenCalledWith(
      { days: ["Segunda-feira"] },
      expect.any(Object)
    );
  });

  it("should remove the day clicked if it is already selected in form", async () => {
    render(<Wrapper />);
    const monday = screen.getByText("Segunda-feira");
    fireEvent.click(monday);
    fireEvent.click(monday);
    fireEvent.click(screen.getByLabelText("submitInput"));

    await waitFor(() => {
      expect(mockSubmit).toHaveBeenCalledOnce();
    });
    expect(mockSubmit).toHaveBeenCalledWith({ days: [] }, expect.any(Object));
  });

  it.each([
    ["Segunda-feira", "Terça-feira", ["Segunda-feira", "Terça-feira"]],
    ["Quarta-feira", "Quinta-feira", ["Quarta-feira", "Quinta-feira"]],
    ["Sexta-feira", "Sábado", ["Sexta-feira", "Sábado"]],
  ])(
    "Should pick %s and %s by clicking on them",
    async (dayOne, dayTwo, expected) => {
      render(<Wrapper />);
      mockSubmit.mockClear(); //Limpando as chamadas anteriores do mock
      const first = screen.getByText(dayOne);
      const second = screen.getByText(dayTwo);

      fireEvent.click(first);
      fireEvent.click(second);
      fireEvent.click(screen.getByLabelText("submitInput"));

      await waitFor(() => {
        expect(mockSubmit).toHaveBeenCalledOnce();
      });

      expect(mockSubmit).toBeCalledWith({ days: expected }, expect.any(Object));
    }
  );
});
