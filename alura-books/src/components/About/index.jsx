import styled from "styled-components";

const AboutContent = styled.div`
    display: flex;
    gap: 15px;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
    color: #FFF;
    text-align: center;
`;

const Title = styled.h2`
    color: #FFF;
    font-size: 42px;
    text-align: center;
    width: 100%;
`;

const SubTitle = styled.h3`
    color: #FFF;    
    font-size: 22px;
    font-weight: 500;
    margin-bottom: 20px;
    text-align: center;
`;

const Description = styled.p`
    font-size: 18px;
    line-height: 1.6;
    max-width: 600px;
    margin-top: 20px;
    opacity: 0.9;
`;

export default function About() {
    return (
        <AboutContent>
            <Title>Sobre a Alura Books</Title>
            <SubTitle>A sua estante virtual de conhecimento e aprendizado</SubTitle>
            <Description>
                A Alura Books é o seu portal para explorar o universo de tecnologia. Nosso objetivo é levar
                livros de qualidade para profissionais de software, design e negócios, impulsionando a
                carreira de milhares de desenvolvedores no Brasil.
            </Description>
        </AboutContent>
    );
}
