import { useState } from "react";
import ContentContainer from "../../components/contentContainer";
import NavBar from "../../components/navbar";
import PageTitle from "../../components/pageTitle";
import styles from "./contact.module.css";

const teamMembers = [
  {
    name: "Álvaro Antônio",
    github: "https://github.com/alvaro5801",
    linkedIn: "https://www.linkedin.com/in/%C3%A1lvaro-silva",
    image: "/images/members/alvaro.jpeg",
  },
  {
    name: "Arthur Estevão",
    github: "https://github.com/ArthurEstevaum",
    linkedIn: "https://www.linkedin.com/in/arthur-estevão-304707260/",
    image: "/images/members/estevao.jpeg",
  },
  {
    name: "Ícaro Leonardo",
    github: "https://github.com/Icaro-Costa",
    linkedIn: "https://www.linkedin.com/in/icaro-costa-ic",
    image: "/images/members/icaro.jpeg",
  },
  {
    name: "Thays Barbosa",
    github: "https://github.com/idthy",
    linkedIn: "https://www.linkedin.com/in/thays-barbosa-332683318",
    image: "/images/members/thays.jpeg"
  }
];

export default function Contact() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <PageTitle message="Contato" />
      <ContentContainer>
        <h2 className={styles["subtitle"]}>Membros do projeto</h2>
        <ul style={{textAlign: "center", maxWidth: "250px", margin: "0 auto", listStyle: "none"}}>
          {teamMembers.map((member) => (
            <li key={member.name}>
              <p style={{cursor: "pointer", border: "1px solid black", borderRadius: "15px", padding: "12px 24px"}} onClick={() => setSelectedImage(member.image)}>
                {member.name}
              </p>
              | <a href={member.github}>Github</a> | <a href={member.linkedIn}>LinkedIn</a>
            </li>
          ))}
        </ul>
        {selectedImage && <img width={360} src={selectedImage} alt="Foto do membro" />}
      </ContentContainer>
    </>
  );
}
