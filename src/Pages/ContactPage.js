import ContactItem from '../components/ContactItem';
import phone from '../img/phone.svg';
import email from '../img/emailme.svg';
import location from '../img/location.svg';
import Tittle from '../components/Tittle';

const ContactPage = () => {
  return (
    <div>
      <div className="title">
        <Tittle title={'About Me'} span={'About Me'} />
      </div>
      <div className="ContactPage">
        <div className="contact-sect">
          <ContactItem
            icon={phone}
            text1={'+91 8217454919'}
            text2={'+91 9844144328'}
            title={'Phone'}
          />
          <ContactItem
            icon={email}
            text1={'2428kcr@gmail.com'}
            text2={'chousinrahit120@gmail.com'}
            title={'Email'}
          />
          <ContactItem
            icon={location}
            text1={
              'Alur Palya, Alur, Near Makali, Tumkur Road, Bengaluru - 562123'
            }
            text2={'India'}
            title={'Address'}
          />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
