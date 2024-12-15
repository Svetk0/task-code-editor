import dt from "../../constants/data.json";
import styles from "./LanguageSelect.module.scss";
import { LANGUAGES_Vs } from "../../constants/codeSnippets";
function LanguageSelect() {
  //const dt = staticData;
  const languages = Object.entries(LANGUAGES_Vs);
  console.log("languages", languages);
  return (
    <section className={styles.container}>
      {dt.editor.select_title}
      <select>
        {languages.map(([lang, ver]) => (
          <option key={lang}>
            {lang} {ver}
          </option>
        ))}
      </select>
    </section>
  );
}

export default LanguageSelect;
