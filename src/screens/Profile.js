import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled from "styled-components"
import { faComment, faHeart } from "@fortawesome/free-regular-svg-icons";

const Header = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 4px;
`

const ProfileImg = styled.img`
  margin-left: 50px;
  height: 160px;
  width: 160px;
  border-radius: 50%;
  margin-right: 80px;
`

const ProfileInfo = styled.div``

const Username = styled.h3`
  font-size: 28px;
  font-weight: 600;
`

const FollowBtn = styled.span`
  cursor: pointer;
`

const Row = styled.div`
  display: flex;
  algin-items: center;
  margin-top: 20px;
`

const Contents = styled.div`
  display: grid;
  grid-auto-rows: 290px;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-top: 50px;
`

const Feed = styled.div`
  background-image: url(${(props) => props.bg});
  background-size: cover;
  position: relative;
`

const Icons = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0, 0.5);
  color: white;
  opacity: 0;
  &:hover {
    opacity: 1;
  }
`

const Icon = styled.span`
  font-size: 18px;
  display: flex;
  align-items: center;
  margin: 0 5px;
  svg {
    font-size: 14px;
    margin-right: 5px;
  }
`

function Profile() {
  return (
    <>
      <Header>
        <ProfileImg src="data:image/jpeg;base64,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" />
        <ProfileInfo>
          <Row>
            <Username>wook_s</Username>
            <FollowBtn>팔로우버튼</FollowBtn>
          </Row>
          <Row>
            <div>3</div>
            <div>followers</div>
            <div>10</div>
            <div>following</div>
          </Row>
          <Row>
            <div>소개글</div>
          </Row>
        </ProfileInfo>
      </Header>
      <Contents>
        <Feed bg="https://image.yes24.com/images/00_Event/2023/0210yesFunding/bn_pc_245x421.jpg">
          <Icons>
            <Icon>
              <FontAwesomeIcon icon={faHeart} />
              12
            </Icon>
            <Icon>
              <FontAwesomeIcon icon={faComment} />
              12
            </Icon>
          </Icons>
        </Feed>
      </Contents>
    </>
  )
}

export default Profile