import React, { useState } from "react";
import FormContainer from "../../../components/formContainer";
import styles from "./novaDisciplina.module.scss";
import { useFieldArray, useForm } from "react-hook-form";
import TextInput from "../../../components/textInput";
import NavBar from "../../../components/navbar";
import HoraryInput from "../../../components/schedule/HoraryInput";
import { Days } from "../../../types/days";
import { ISubjectCreationData } from "../../../interfaces/ISubjectCreationData";
import createSubject from "../../../services/subjects/createSubject";
import { Link } from "react-router";

const NovaDisciplina = () => {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors, isValid },
  } = useForm<ISubjectCreationData>({
    defaultValues: {
      deadlines: [{ name: "", date: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "deadlines",
  });

  const deadlinesInputs = watch("deadlines");

  const [disciplineCreated, setDisciplineCreated] = useState<boolean>(false);

  const [inputActive, setInputActive] = useState<number>(0);

  function nextBtn() {
    if (inputActive == 2) {
      setDisciplineCreated(true);
      return;
    }
    if (!isValid) return;
    setInputActive((inputActive) => inputActive + 1);
  }

  const onSubmit = (data: ISubjectCreationData) => {
    if (inputActive == 2) {
      const response = createSubject(data);
      setDisciplineCreated(true);
    }
  };

  return (
    <>
      <NavBar />
      <FormContainer>
        <form onSubmit={handleSubmit(onSubmit)}>
          {!disciplineCreated ? (
            <>
              <div className={styles["nova-disciplina"]}>
                <div className={styles["nova-disciplina__header"]}>
                  <h2>Criar nova disciplina</h2>
                  <span>
                    mantenha provas, conteúdos e atividades sob seu controle
                  </span>
                </div>
                <div className={styles["nova-disciplina__form-container"]}>
                  {inputActive == 0 ? (
                    <div className={styles["nova-disciplina__step-1"]}>
                      <div className={styles["nova-disciplina__step-1__row-1"]}>
                        <TextInput
                          register={register}
                          label="Nome da disciplina"
                          registerOptions={{ required: true }}
                          fieldName="name"
                          errors={errors}
                        />
                        <TextInput
                          register={register}
                          label="Período"
                          type="number"
                          registerOptions={{ required: true, min: 1, max: 10 }}
                          fieldName="quarter"
                          errors={errors}
                        />
                      </div>
                      <div className={styles["nova-disciplina__step-1__row-2"]}>
                        <span>Status</span>
                        <ul>
                          <label>
                            <input
                              type="radio"
                              style={
                                errors.status && {
                                  border: "2px solid rgba(255, 0, 0, 0.575)",
                                }
                              }
                              {...register("status", { required: true })}
                              value="cursando"
                            />
                            Cursando
                          </label>
                          <label>
                            <input
                              type="radio"
                              style={
                                errors.status && {
                                  border: "2px solid rgba(255, 0, 0, 0.575)",
                                }
                              }
                              {...register("status", { required: true })}
                              value="não iniciado"
                            />
                            Não iniciado
                          </label>
                          <label>
                            <input
                              type="radio"
                              style={
                                errors.status && {
                                  border: "2px solid rgba(255, 0, 0, 0.575)",
                                }
                              }
                              {...register("status", { required: true })}
                              value="concluído"
                            />
                            Concluído
                          </label>
                        </ul>
                        {errors.status && (
                          <span style={{ color: "#ff0000" }}>
                            O status da disciplina é obrigatório
                          </span>
                        )}
                      </div>
                      <div className={styles["nova-disciplina__step-1__row-3"]}>
                        <TextInput
                          register={register}
                          label="Professor (opcional)"
                          registerOptions={{ required: false }}
                          fieldName="teacher"
                          errors={errors}
                        />
                      </div>
                    </div>
                  ) : inputActive == 1 ? (
                    <div className={styles["nova-disciplina__step-2"]}>
                      <div className={styles["nova-disciplina__step-2__row-1"]}>
                        <span className={styles["step2-form-title"]}>
                          Horários (opcional)
                        </span>
                        <p className={styles["step2-form-subtitle"]}>
                          Clique nos dias que você tem aulas
                        </p>
                        <HoraryInput name="days" control={control} />
                      </div>
                      <div className={styles["nova-disciplina__step-2__row-2"]}>
                        <span className={styles["step2-form-title"]}>
                          Plano de classe (opcional)
                        </span>
                        <p className={styles["step2-form-subtitle"]}>
                          Adicione datas importantes como provas e entregas de
                          projeto
                        </p>
                        <div className={styles["nova-disciplina__exams"]}>
                          {fields.map((field, index) => {
                            return (
                              <div
                                key={field.id}
                                className={
                                  styles["nova-disciplina__exams-content"]
                                }
                              >
                                <TextInput
                                  register={register}
                                  label="Nome"
                                  type="text"
                                  registerOptions={{
                                    required:
                                      deadlinesInputs[index].date !== "",
                                  }}
                                  fieldName={`deadlines.${index}.name`}
                                  errors={errors}
                                  placeholder="Ex: Matemática"
                                />
                                <TextInput
                                  label="Data"
                                  type="text"
                                  register={register}
                                  fieldName={`deadlines.${index}.date`}
                                  placeholder="29/05/2025"
                                  errors={errors}
                                  registerOptions={{
                                    required:
                                      deadlinesInputs[index].name !== "",
                                    pattern: {
                                      value:
                                        /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/[0-9]{4}$/,
                                      message:
                                        "A data deve estar no formato dd/mm/aaaa",
                                    },
                                  }}
                                />
                                {index !== 0 ? (
                                  <button
                                    className={styles["remove-button"]}
                                    type="button"
                                    onClick={() => remove(index)}
                                  >
                                    <img
                                      width={32}
                                      src="/images/minus.svg"
                                      alt="minus icon (-)"
                                    />
                                  </button>
                                ) : (
                                  <button
                                    className={styles["add-button"]}
                                    onClick={() =>
                                      append({ name: "", date: "" })
                                    }
                                    type="button"
                                  >
                                    <img
                                      width={24}
                                      src="/images/plus.svg"
                                      alt="plus icon (+)"
                                    />
                                  </button>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className={styles["nova-disciplina__step-3"]}>
                      <div className={styles["nova-disciplina__step-3__row-1"]}>
                        <span className={styles["step2-form-title"]}>
                          Ementa (opcional)
                        </span>
                        <p className={styles["step2-form-subtitle"]}>
                          Adicione os assuntos e tópicos da disciplina, quanto
                          mais detalhado, melhor
                        </p>
                        <textarea
                          placeholder="Ex: Matemática básica; noção de limites; introdução a derivadas..."
                          {...register("syllabus", {})}
                          id="syllabus"
                        ></textarea>
                      </div>
                    </div>
                  )}
                </div>
                <div className={styles["nova-disciplina__footer"]}>
                  {inputActive == 2 && (
                    <button
                      className={styles["nova-disciplina__step-btn"]}
                      type="submit"
                    >
                      Criar
                    </button>
                  )}
                  {inputActive != 2 && (
                    <button
                      onClick={nextBtn}
                      className={styles["nova-disciplina__step-btn"]}
                      type="submit"
                    >
                      Avançar
                    </button>
                  )}
                  <div className={styles["nova-disciplina__step-dots"]}>
                    <button
                      type="button"
                      onClick={() => {
                        if (!isValid) return;
                        setInputActive(0);
                      }}
                      className={inputActive == 0 ? styles["form-active"] : ""}
                    >
                      1
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        if (!isValid) return;
                        setInputActive(1);
                      }}
                      className={inputActive == 1 ? styles["form-active"] : ""}
                    >
                      2
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        if (!isValid) return;
                        setInputActive(2);
                      }}
                      className={inputActive == 2 ? styles["form-active"] : ""}
                    >
                      3
                    </button>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className={styles["discipline-created"]}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="151"
                height="150"
                viewBox="0 0 151 150"
                fill="none"
              >
                <path
                  d="M75 7C61.5571 7 48.416 10.9863 37.2386 18.4548C26.0612 25.9233 17.3495 36.5386 12.2051 48.9582C7.0607 61.3779 5.71469 75.0442 8.33728 88.2288C10.9599 101.413 17.4333 113.524 26.9389 123.03C36.4445 132.536 48.5553 139.009 61.74 141.632C74.9246 144.254 88.5909 142.908 101.011 137.764C113.43 132.619 124.045 123.908 131.514 112.73C138.982 101.553 142.969 88.4117 142.969 74.9688C142.969 56.9423 135.808 39.6542 123.061 26.9076C110.315 14.161 93.0265 7 75 7ZM111.914 48.9062L69.586 97.3047C69.3663 97.5547 69.096 97.7551 68.7929 97.8925C68.4898 98.0299 68.1609 98.1011 67.8282 98.1016C67.313 98.1067 66.8106 97.9419 66.3985 97.6328L38.4375 76.1172C38.1928 75.9294 37.9875 75.6953 37.8333 75.4282C37.6791 75.1611 37.579 74.8663 37.5387 74.5605C37.4985 74.2547 37.5188 73.944 37.5987 73.6461C37.6785 73.3482 37.8162 73.0689 38.0039 72.8242C38.1917 72.5795 38.4258 72.3742 38.6929 72.22C38.96 72.0658 39.2548 71.9657 39.5606 71.9254C39.8664 71.8852 40.1771 71.9055 40.475 71.9853C40.7729 72.0652 41.0522 72.2029 41.2969 72.3906L67.5 92.5703L108.375 45.6953C108.578 45.4629 108.825 45.2728 109.102 45.1359C109.378 44.9989 109.679 44.9178 109.987 44.8971C110.295 44.8765 110.604 44.9166 110.897 45.0154C111.189 45.1141 111.459 45.2695 111.691 45.4727C111.924 45.6758 112.114 45.9227 112.251 46.1993C112.388 46.4759 112.469 46.7768 112.49 47.0847C112.51 47.3927 112.47 47.7017 112.371 47.9941C112.273 48.2866 112.117 48.5567 111.914 48.7891V48.9062Z"
                  fill="#71B595"
                />
              </svg>
              <p>Disciplina criada com sucesso!</p>

              <Link to="/disciplinas">
                <button
                  className={styles["nova-disciplina__step-btn"]}
                  type="button"
                >
                  Voltar para o dashboard
                </button>
              </Link>
            </div>
          )}
        </form>
      </FormContainer>
    </>
  );
};

export default NovaDisciplina;
