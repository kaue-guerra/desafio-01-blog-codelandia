import { Container, Content } from './styles';

import { GoSearch } from 'react-icons/go';



export function Header(){
    return(
        <Container>
            <Content>
                <div id="title-header">
                    <h2>Codelândia</h2>
                    <h2>Blog</h2>
                </div>
                <div id="divBusca">
                    <i><GoSearch /></i>
                    <input type="text" id="txtBusca" placeholder="Pesquisar no blog"/>
                </div>
            </Content>
        </Container>
    )
}