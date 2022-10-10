import { useExpansion } from "@/lib/hooks"
import { User as UserType } from "@/src/server/models/user.model"
import { BlockLink } from "@/styled/shared/helpers"
import Link from "next/link"
import { ParentModal } from "../collections/modal"
import { EditModal } from "../collections/modal/edit"
import { SinglePost } from "../collections/post"
import { 
  UserWrapper,
  ContentContainer,
  UserContentContainer,
  UserHeader,
  UserName,
  UserEmail,
  UserBio,
  UserEditProfile,
  UserPostHeading,
  UserPostList,
  UserWatchlistContainer,
  UserWatchlistHeader,
  UserWatchlist,
  UserWatchlistItem
 } from "./user.styled"


type UserProps = {
  user: UserType
}


const User = ({ user }: UserProps) =>{
  const { isExpanded, handleExpansion } = useExpansion()

  return (
    <>
    { isExpanded && (
      <ParentModal exit={ handleExpansion }>
        <EditModal exit={ handleExpansion } />
      </ParentModal>
    ) }
      <UserWrapper>
        <ContentContainer>
          <UserContentContainer>
            <UserHeader>
              <UserName>{ user.username }</UserName>
              <UserEmail>{ user.email.split("@")[0] }</UserEmail>
              { user.bio && (
                <UserBio>{ user.bio }</UserBio>
              ) }
              { user.watchlist && (
                <UserEditProfile onClick={ handleExpansion } >Edit profile</UserEditProfile>
              ) }
            </UserHeader>
            <div>
              <UserPostHeading>Posts</UserPostHeading>
              <UserPostList>
                { user.posts?.map(post => (
                  <SinglePost
                    key={ post.postId }
                    post={ post }
                    isOwned={ Array.isArray(user.watchlist) } />
                )) }
              </UserPostList>
            </div>
          </UserContentContainer>
          { user.watchlist && (
            <UserWatchlistContainer>
              <UserWatchlistHeader>Watchlists</UserWatchlistHeader>
              <UserWatchlist>
                { user.watchlist.map(tag => (
                  <UserWatchlistItem key={ tag.id }>
                    <Link
                      href={ `/${ tag.id }`}
                      passHref>
                      <BlockLink>
                        <img 
                          src={ `/coins/${ tag.id }.png` }
                          alt="" />
                        <p>
                          { tag.name }
                          <span>{ tag.symbol }</span>
                        </p>
                      </BlockLink>
                    </Link>
                  </UserWatchlistItem>
                )) }
              </UserWatchlist>
            </UserWatchlistContainer>
          ) }
        </ContentContainer>
      </UserWrapper>
    </>
  )
}


export default User