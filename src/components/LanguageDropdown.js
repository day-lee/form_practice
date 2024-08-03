function LanguageDropdown() {
  return (
    <>
      <form>
        <label htmlFor="language"></label>
        <select id="language" name="language">
          <option value="English">English </option>
          <option value="Español"> Español</option>
          <option value="Deutsch"> Deutsch</option>
          <option value="简体中文"> 简体中文</option>
          <option value="繁體中文"> 繁體中文</option>
          <option value="Français">Français </option>
          <option value="Português"> ortuguês</option>
          <option value="日本語"> 日本語</option>
          <option value="Русский">Русский </option>
          <option value="한국어">한국어 </option>
          <option value="Italiano">Italiano </option>
          <option value="Tiếng Việt">Tiếng Việt </option>
          <option value="polski">polski </option>
          <option value="Türkçe"> Türkçe</option>
          <option value="Bahasa Indonesia">Bahasa Indonesia </option>
          <option value="Nederlands"> ederlands</option>
          <option value="Svenska"> Svenska</option>
        </select>
      </form>
    </>
  );
}
export default LanguageDropdown;
