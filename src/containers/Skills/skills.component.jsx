import React from "react";
import "./skills.styles.scss";
import vscodeIcon from "../../assets/images/vscode.svg";
import intellijIcon from "../../assets/images/intellij.svg";
import dbeaverIcon from "../../assets/images/dbeaver.svg";
import photoshopIcon from "../../assets/images/photoshop.svg";
import dockerIcon from "../../assets/images/docker.svg";
import figmaIcon from "../../assets/images/figma.svg";

const Skills = () => {
  const design = [
    { title: "UX/UI Design", id: 0 },
    { title: "Graphics & Illustrations", id: 1 },
    { title: "Iconography", id: 2 },
    { title: "Typography", id: 3 },
    { title: "Prototyping & Testing", id: 4 },
  ];

  const development = [
    { title: "React", id: 0 },
    { title: "React Native", id: 1 },
    { title: "Angular", id: 2 },
    { title: "Spring Boot", id: 3 },
    { title: "PostgreSQL", id: 4 },
  ];

  const tools = [
    { title: "VS Code", id: 4, src: vscodeIcon },
    { title: "IntelliJ", id: 0, src: intellijIcon },
    { title: "DBeaver", id: 1, src: dbeaverIcon },
    { title: "Docker", id: 2, src: dockerIcon },
    { title: "Figma", id: 3, src: figmaIcon },
  ];

  return (
    <div>
      <section id="skills" className="skills">
        <div className="skills-divider" />
        <div className="container">
          <div className="skills-header">
            <h4 className="skills-subtitle">What I Know?</h4>
            <h2 className="skills-title">My Skills</h2>
          </div>

          <div className="skills-grid">
            <div className="skills-category">
              <h3 className="category-title">Development</h3>
              <div className="skills-list">
                {development.map((skill) => (
                  <div className="skill-item" key={skill.id}>
                    <div className="skill-header">
                      <span className="skill-name">{skill.title}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="skills-category">
              <h3 className="category-title">Design</h3>
              <div className="skills-list">
                {design.map((skill) => (
                  <div className="skill-item" key={skill.id}>
                    <div className="skill-header">
                      <span className="skill-name">{skill.title}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="skills-category">
              <h3 className="category-title">Tools I Use</h3>
              <div className="skills-list tools-list">
                {tools.map((tool) => (
                  <div className="skill-item tool-item" key={tool.id}>
                    <div className="skill-header">
                      <div className="tool-name-container">
                        <img
                          src={tool.src}
                          alt={tool.title}
                          className="tool-icon"
                        />
                        <span className="skill-name">{tool.title}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
