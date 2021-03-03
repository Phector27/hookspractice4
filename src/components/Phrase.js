import styled from '@emotion/styled'

const PhraseContainer = styled.div`
padding: 3rem;
border-radius: .5rem;
background-color: #fff;
max-width: 800px;
margin-top: 5rem;
@media (min-width: 992px) {
    margin-top: 10rem;
}

h1 {
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    position: relative;
    padding-left: 4rem;

    &::before {
        content: open-quote;
        font-size: 8rem;
        color: black;
        position: absolute;
        left: -1rem;
        top: -1rem;
    }
}

    p {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        color: #666;
        margin-top: 2rem;
        font-weight: bold;
        font-size: 1.4rem;
        text-align: right;


    }
}
`

const Phrase = ({ phrase }) => {

    if(Object.keys(phrase).length === 0) return null

    return (
        <PhraseContainer>
            <h1> {phrase.quote}</h1>
            <p>— {phrase.author}</p>
        </PhraseContainer>
    );
}

export default Phrase;