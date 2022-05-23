import { Layout } from 'antd';
import Menubar from './components/Menubar';
import RestaurantList from './components/RestaurantList';
import './App.css';

const { Header, Content } = Layout;

function App() {
  return (
    <Layout className='layout'>
      <Header>
        <Menubar />
      </Header>
      <Content>
        <RestaurantList />
      </Content>
    </Layout>
  );
}

export default App;
