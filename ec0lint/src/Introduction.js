import { why_section, ec0lint_is_section } from './text';
import prototype from './prototype.webp';

function Introduction() {
  return (
    <div>
        <h3 className="section-header">{why_section.title}</h3>
        <h6 className="section">{why_section.text[0]}<u>{why_section.text[1]}</u>{why_section.text[2]}</h6>
        <h3>{ec0lint_is_section.title}</h3>
        <h6 className="section">{ec0lint_is_section.text}</h6>
        <img src={prototype} alt="prototype" className="prototype" />
        {/* <button onClick={goToGitHub} className="" */}
    </div>
  );
}

export default Introduction;
