import React, { useState } from "react";
import Header from "../../../widgets/header";
import FormContainer from "../../../components/formContainer";
import styles from "./novaDisciplina.module.scss";
import { useForm } from "react-hook-form";
import TextInput from "../../../components/textInput";

interface IDisciplines {
  name: string;
  date: string;
}

const NovaDisciplina = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [disciplineCreated, setDisciplineCreated] = useState<boolean>(false);

  const [disciplines, setDisciplines] = useState<IDisciplines[]>([
   
  ]);

  const [disciplineInput, setDisciplineInput] = useState<IDisciplines>({
    name: "",
    date: "",
  });

  const [inputActive, setInputActive] = useState<number>(0);

  function nextBtn() {
    if (inputActive == 2) return;
    setInputActive((inputActive) => inputActive + 1);
  }

  return (
    <>
      
          <Header />
          <FormContainer>
            <>
                {!disciplineCreated ? (
                  <>
            <div className={styles["nova-disciplina"]}>
              <div className={styles["nova-disciplina__header"]}>
                <h2>Criar nova disciplina</h2>
                <span>mantenha provas, conteúdos e tudo sob seu controle</span>
              </div>
              <div className={styles["nova-disciplina__form-container"]}>
                {inputActive == 0 ? (
                  <div className={styles["nova-disciplina__step-1"]}>
                    <div className={styles["nova-disciplina__step-1__row-1"]}>
                      <TextInput
                        register={register}
                        label="Nome da disciplina"
                        required
                        fieldName="name"
                        errors={errors}
                      />
                      <TextInput
                        register={register}
                        label="Período"
                        type="number"
                        required
                        fieldName="degree"
                        errors={errors}
                      />
                    </div>
                    <div className={styles["nova-disciplina__step-1__row-2"]}>
                      <span>Status</span>
                      <ul>
                        <label>
                          <input type="checkbox" {...register("inProgress")} />
                          Cursando
                        </label>
                        <label>
                          <input type="checkbox" {...register("notStart")} />
                          Não iniciado
                        </label>
                        <label>
                          <input type="checkbox" {...register("completed")} />
                          Concluído
                        </label>
                      </ul>
                    </div>
                    <div className={styles["nova-disciplina__step-1__row-3"]}>
                      <TextInput
                        register={register}
                        label="Professor (opcional)"
                        required={false}
                        fieldName="professorName"
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
                      <div className={styles["nova-disciplina__schedule"]}>
                        <div className={styles["schedule-day"]}>
                          <input type="checkbox" />
                          <span>Segunda</span>
                        </div>
                        <div className={styles["schedule-day"]}>
                          <input type="checkbox" />
                          <span>Terça</span>
                        </div>
                        <div className={styles["schedule-day"]}>
                          <input type="checkbox" />
                          <span>Quarta</span>
                        </div>
                        <div className={styles["schedule-day"]}>
                          <input type="checkbox" />
                          <span>Quinta</span>
                        </div>
                        <div className={styles["schedule-day"]}>
                          <input type="checkbox" />
                          <span>Sexta</span>
                        </div>
                        <div className={styles["schedule-day"]}>
                          <input type="checkbox" />
                          <span>Sábado</span>
                        </div>
                      </div>
                    </div>
                    <div className={styles["nova-disciplina__step-2__row-2"]}>
                      <span className={styles["step2-form-title"]}>
                        Plano de classe (opcional)
                      </span>
                      <p className={styles["step2-form-subtitle"]}>
                        Adicione datas importantes como provas e trabalhos
                      </p>
                      <div className={styles["nova-disciplina__exams"]}>
                        {disciplines.map((item: IDisciplines, key) => {
                          return (
                            <div
                              key={key}
                              className={
                                styles["nova-disciplina__exams-content"]
                              }
                            >
                              <div
                                style={{ boxShadow: "none" }}
                                className={styles["exams-name"]}
                              >
                                {item.name}
                              </div>
                              <div
                                style={{ boxShadow: "none" }}
                                className={styles["exams-date"]}
                                id=""
                              >
                                {item.date}
                              </div>
                            </div>
                          );
                        })}

                        <div
                          className={styles["nova-disciplina__exams-content"]}
                        >
                          <input
                            className={styles["exams-name"]}
                            type="text"
                            value={disciplineInput.name}
                            onChange={(e) =>
                              setDisciplineInput({
                                ...disciplineInput,
                                name: e.target.value,
                              })
                            }
                            placeholder="Ex: Prova 1"
                          />
                          <input
                            className={styles["exams-date"]}
                            type="text"
                            placeholder="29/05/2025"
                            value={disciplineInput.date}
                            onChange={(e) => {
                              const selectedDate = e.target.value;
                              setDisciplineInput({
                                ...disciplineInput,
                                date: selectedDate,
                              });
                            }}
                            name=""
                            id=""
                          />
                          <button
                            onClick={() => {
                              setDisciplines((value: any) => [
                                ...value,
                                disciplineInput,
                              ]);
                              setDisciplineInput({ name: "", date: "" });
                            }}
                          >
                            +
                          </button>
                        </div>
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
                        Adicione os assuntos e tópicos da disciplina
                      </p>
                      <textarea
                        placeholder="Ex: Matemática básica; noção de limites; introdução a derivadas..."
                        name=""
                        id=""
                      ></textarea>
                    </div>
                  </div>
                )}
              </div>
              <div className={styles["nova-disciplina__footer"]}>
                <button
                  onClick={() => {
                    if(inputActive == 2) setDisciplineCreated(true)
                    else nextBtn()
                  }}
                  className={styles["nova-disciplina__step-btn"]}
                >
                  {inputActive == 2 ? "Criar" : "Avançar"}
                </button>
                <div className={styles["nova-disciplina__step-dots"]}>
                  <button
                    onClick={() => setInputActive(0)}
                    className={inputActive == 0 ? styles["form-active"] : ""}
                  >
                    1
                  </button>
                  <button
                    onClick={() => setInputActive(1)}
                    className={inputActive == 1 ? styles["form-active"] : ""}
                  >
                    2
                  </button>
                  <button
                    onClick={() => setInputActive(2)}
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

          <button className={styles["nova-disciplina__step-btn"]}>Ir para minha disciplina</button>
          <a href="">Voltar para meu dashboard</a>
        </div>
      )}
    </>
          </FormContainer>
        </>
  );
};

export default NovaDisciplina;
