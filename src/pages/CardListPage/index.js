import { Card, Text, Heading } from '../../components';
import { ROUTE } from '../../constants';
import './style.css';

export const CardListPage = (props) => {
  const { setRoute } = props;
  const handleAddButtonClick = () => setRoute(ROUTE.ADD_FORM);

  return (
    <div className="CardListPage">
      <Heading>보유카드</Heading>
      <button className="CardListPage__AddButton" onClick={handleAddButtonClick}>
        <Card>
          <Text className="CardListPage__AddSign">+</Text>
        </Card>
      </button>
    </div>
  );
};
