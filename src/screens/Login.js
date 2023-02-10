import { darkModeVar } from "../apollo"
import styled from "styled-components"

function Login() {

  const Title = styled.h1`
    font-size: 30px;
    margin-bottom: 30px
  `;

  const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;

  const Form = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `

  return (
      <Container>
        <div>
          <Title>instargram</Title>
        </div>
        <div>
          <Form>
            <input type="email" />
            <input type="password" />
            <input type="submit" />
          </Form>
        </div>
        <div>
          <button onClick={() => darkModeVar(true)}>Dark Mode</button>
          <button onClick={() => darkModeVar(false)}>Light Mode</button>
        </div>
      </Container>
  )
}

export default Login