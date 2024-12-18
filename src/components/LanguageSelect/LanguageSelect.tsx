import { Dispatch } from "react";
import { CODE_SNIPPETS } from "../../constants/codeSnippets";
import dt from "../../constants/data.json";
import styles from "./LanguageSelect.module.scss";

type Props = {
  language?: string;
  setLanguage: Dispatch<string>;
};
function LanguageSelect({ language, setLanguage }: Props) {
  const languages = Object.keys(CODE_SNIPPETS);

  return (
    <section className={styles.container}>
      <h2> {dt.editor.select_title}</h2>
      <select
        className={styles.select}
        value={language}
        onChange={(event) => setLanguage(event.target.value)}
      >
        {languages.map((lang) => (
          <option key={lang}>{lang}</option>
        ))}
      </select>
    </section>
  );
}

export default LanguageSelect;
