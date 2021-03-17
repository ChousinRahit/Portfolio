import { Fragment } from 'react';

const ContactItem = ({ icon, text1, text2, title }) => {
  const href = title === 'Phone' ? `tel:` : `mailto:`;
  return (
    <div className="ContactItem">
      <div className="contact">
        <img src={icon} alt="" />
        <div className="right-items">
          <h6>{title}</h6>
          {title === 'Address' ? (
            <Fragment>
              <p>{text1}</p>
              <p>{text2}</p>
            </Fragment>
          ) : (
            <Fragment>
              <p>
                <a href={href.concat(text1)}>{text1}</a>
              </p>
              <p>
                <a href={href.concat(text2)}>{text2}</a>
              </p>
            </Fragment>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactItem;
