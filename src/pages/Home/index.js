import { Link } from 'react-router-dom';

import {
  Container, Header, ListContainer, Card, InputSearchContainer,
} from './styles';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';

export default function Home() {
  return (
    <Container>
      <InputSearchContainer>
        <input type="text" placeholder="Pesquisar contato" />
      </InputSearchContainer>
      <Header>
        <strong>3 Contatos</strong>
        <Link to="/new">Novo Contato</Link>
      </Header>

      <ListContainer>
        <header>
          <button type="button" className="sort-button">
            <span>Nome</span>
            <img src={arrow} alt="Arrow" />
          </button>
        </header>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>João Rodrigues</strong>
              <small>Instagram</small>
            </div>
            <span>
              joaoteles8182@gmail.com
            </span>
            <span>
              (68) 99999-9999
            </span>
          </div>
          <div className="actions">
            <Link to="/edit/123">
              <img src={edit} alt="Edit" />
            </Link>
            <button type="button">
              <img src={trash} alt="Delete" />
            </button>
          </div>
        </Card>
      </ListContainer>
    </Container>
  );
}
