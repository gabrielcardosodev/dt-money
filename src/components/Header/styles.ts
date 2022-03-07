import styled from "styled-components";

export const Container = styled.header`
    background: var(--blue);
`

export const Content = styled.div`
    max-width: 1120px;
    padding: 3rem 1rem 9rem;
    margin: 0 auto;
    
    font-size: 1rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
        color: var(--shape);
        background: var(--blue-light);

        border: 0;
        border-radius: 0.25rem;

        padding: 0 2rem;
        height: 3rem;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9);
        }
    }
`