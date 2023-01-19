import { useEffect, useState } from "react";
import { getMembers } from "../../../services/api";
import { MemberCard } from "../MemberCard/MemberCard";
import {
  CardList,
  MembersSection,
  MemberButton,
} from "../Members/Members.styled";


export const Members = () => {

  const [members, setMembers] = useState([]);
  const [page, setPage] = useState(1);

    useEffect(() => {
        getMembers(page).then((data) => {
          setMembers(prevState => page === 1 ? data.users : [...prevState, ...data.users]);
        });
    }, [page]);
  
  const loadMore = () => {
    setPage(prevState => prevState + 1)
  };
    
    console.log(members)

    return (
      <MembersSection>
        <h1>Working with GET request</h1>
        <CardList>
          {members.map((member) => (
            <MemberCard key={member.id} member={member} />
          ))}
        </CardList>
        <MemberButton type="submit" onClick={loadMore}>
          ShowMore
        </MemberButton>
      </MembersSection>
    );
}