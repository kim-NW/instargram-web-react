import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faHeart as SolidHeart } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane, faUser, faComment, faHeart, faBookmark } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

const FeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FeedWrapper = styled.div`
  max-width: 350px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 10px;
`

const FeedHeader = styled.div`
  display: flex;
	justify-content: first baseline;
  margin: 8px;

  h1{
    font-size:1.2em;
	  font-weight:bold;
  }
`;

const FeedPImg = styled.img`
  width: 30px;
  height: 30px; 
  border-radius: 70%;
  overflow: hidden;
  margin-right: 10px; 
`;

const FeedPhoto = styled.img`
  width: 100%;
  height: 55%;
`;

const FeedContent = styled.div`
	margin-left: 8px;
  h1{
  font-weight:bold;
  }
`;

const FeedContentDiv = styled.div`
  margin-top: 20px;
  margin-left: 7px;
  width: 95%;
  height: 1px;
  background-color: black;
`

const FeedActions = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 10px;

  div{
    width: 15%;
    display: flex;
    justify-content: space-around;
  }
`;

const FeedLikes = styled.div`
 margin: 0 13px 10px;
`

const Comments = styled.div`
  margin: 10px
`;



function Feed({ id, created, updated, caption, contentImg, likesNum, reviewsNum, user }) {
  return (
    <FeedContainer key={id}>
      <FeedWrapper>
        <FeedHeader>
          <FeedPImg src={user.profileImg} />
          <h1>{user.username}</h1>
        </FeedHeader>
        <FeedPhoto src={contentImg} />
        <FeedActions>
          <div>
            <FontAwesomeIcon style={{ color: true ? "tomato" : "inherit" }} size="" icon={true ? SolidHeart : faHeart} />
            <FontAwesomeIcon size="" icon={faUser} />
            <FontAwesomeIcon icon={faPaperPlane} />
          </div>
          <p>
            <FontAwesomeIcon icon={faBookmark} />
          </p>
        </FeedActions>
        <FeedLikes>
          {likesNum} likes
        </FeedLikes>
        <FeedContent>
          <h1>#음악 #이순간 #힙합 #ESTP #BTS #NewJeans <br />#하입보이</h1><br />
          <h2>{caption}</h2>
        </FeedContent>
        <FeedContentDiv></FeedContentDiv>
        <Comments>{reviewsNum} reviews</Comments>
      </FeedWrapper>
    </FeedContainer>
  )
}

export default Feed