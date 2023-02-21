import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane, faUser } from "@fortawesome/free-regular-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Sheader = styled.header`
  width: 100%;
  display: flex;
  padding: 18px 0;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid black;
  background-color: ${(props) => props.theme.bgColor};
  `;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 930px;
`
const Column = styled.div``;

const Icon = styled.span`
  margin-left: 5px;
`;
const Button = styled.span``;

function Header() {
  return (

    <Sheader>
      <Wrapper>
        <Column>
          <Icon>
            <FontAwesomeIcon size="lg" icon={faInstagram} />
          </Icon>
        </Column>

        <Column>
          <Icon>
            <Link to="/">
              <FontAwesomeIcon size="lg" icon={faHome} />
            </Link>
          </Icon>
          <Icon>
            <Link>
              <FontAwesomeIcon size="lg" icon={faPaperPlane} />
            </Link>
          </Icon>
          <Icon>
            <Link to="/profile">
              <FontAwesomeIcon size="lg" icon={faUser} />
            </Link>
          </Icon>
        </Column>
      </Wrapper>
    </Sheader>
  )
}

export default Header