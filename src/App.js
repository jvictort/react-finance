import GlobalStyle from './styles/global';

import Header from './components/Header/index';
import Resume from './components/Resume/index';
import Form from './components/Form/index';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Resume />
      <Form />
    </>
  );
}

export default App;
