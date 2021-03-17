import MenuItems from '../components/MenuItems';
import Tittle from '../components/Tittle';
import { portfolios } from '../components/Portfolios';

const PortfoliosPage = () => {
  return (
    <div className="PortfolioPage">
      <div className="title">
        <Tittle title={'Portfolios'} span={'portfolios'} />
      </div>
      <div className="portfolios-data">
        <MenuItems menuItem={portfolios} />
      </div>
    </div>
  );
};

export default PortfoliosPage;
