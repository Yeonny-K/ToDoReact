import React from 'react';
import ListBox from './components/ListBox';
import CategoryBox from './components/CategoryBox';
import FormBox from './components/FormBox';
import styled from 'styled-components';
import AddToCategory from './components/AddToCategory';

const MainWrapper = styled.div`
    height: 100vh;
    background: linear-gradient(var(--bg-100), var(--bg-300));
    color: var(--text-100);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px 48px;
`;

const Title = styled.h1`
    font-size: 48px;
    font-weight: 700;
    margin: 64px 0;
    color: var(--primary-300);
`;

export default function App() {
    return (
        <MainWrapper>
            <Title>ToDos</Title>
            <AddToCategory />
            <FormBox />
            <CategoryBox />
            <ListBox />
        </MainWrapper>
    );
}