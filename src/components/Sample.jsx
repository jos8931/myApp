import styled from 'styled-components'


const Button = styled.div`
    width : 20px;
    height: 20px;
    background: green;
    margin : 5px;
    &:checked {
        background: red;
    }
`;


const Div = styled.div`
    display: flex;
    flex-direction: row;
`

export default function Sample(props){

    return (
        <div>
            <Div>
                <Button/>
                <Button/>
                <Button/>
                <Button/>
            </Div>
            <Div>
                <Button/>
                <Button/>
                <Button/>
                <Button/>
            </Div>
            <Div>
                <Button/>
                <Button/>
                <Button/>
                <Button/>
            </Div>
            <Div>
                <Button/>
                <Button/>
                <Button/>
                <Button/>
            </Div>
        </div>

        
    );
}