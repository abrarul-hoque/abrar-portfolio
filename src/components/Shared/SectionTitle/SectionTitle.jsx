
import './SectionTitle.css';

const SectionTitle = ({ heading, subHeading, sectionLogo }) => {
    return (
        <div>
            <div className="text-center my-5">
                <h5 className="section-minititle">{subHeading}</h5>
                <h2 className="section-bigtitle">{heading}</h2>
                <h5 className="section-logo-block flex justify-center">
                    <img className="section-logo rotate-icon" src={sectionLogo} alt="" />
                </h5>
            </div>
        </div>
    );
};

export default SectionTitle;