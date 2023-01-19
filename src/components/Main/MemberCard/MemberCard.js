import { CardItem, ImgWrapper, Image, Link, Name } from "./MemberCard.styled";

export const MemberCard = ({member}) => {
    return (
      <CardItem>
        <ImgWrapper>
          <Image src={member.photo} alt="member" width="70px" />
        </ImgWrapper>
        <Name>{member.name}</Name>
        <div>
          <p>{member.position}</p>
          <p>
            <Link>{member.email}</Link>
          </p>
          <p>
            <Link>{member.phone}</Link>
          </p>
        </div>
      </CardItem>
    );
}